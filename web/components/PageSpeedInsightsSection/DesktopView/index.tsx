//@ts-ignore
//@ts-nocheck
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';

export default function PageSpeedDesktop({url}) {
  
    
    const [performanceData, setPerformanceData] = useState(null);
    const [loading, setLoading] = useState(false);
   
    const [lighthouseMetrics, setLighthouseMetrics] = useState({});
    const [screenshotData, setScreenshotData] = useState(null);
    const [screenshotData2, setScreenshotData2] = useState([]);

    const getCategoryScore = (category) => {
        if (performanceData && performanceData.lighthouseResult) {
            const scores = performanceData.lighthouseResult.categories[category];
            if (scores && scores.score) {
                // Scale the score to be between 1 and 100
                return Math.round(scores.score * 100);
            }
        }
        return null;
    };

    const getScreenshotData = async () => {
        if (performanceData && performanceData.lighthouseResult) {
            const screenshotDataUrl =
                performanceData.lighthouseResult.fullPageScreenshot.screenshot.data;
            try {
                const response = await axios.get(screenshotDataUrl, {
                    responseType: 'arraybuffer',
                });
                // Decode the binary data to a base64 string
                const base64Data = btoa(
                    new Uint8Array(response.data).reduce(
                        (data, byte) => data + String.fromCharCode(byte),
                        ''
                    )
                );
                setScreenshotData(base64Data);
            } catch (error) {
              
            }
        }
    };

    const getScreenshotData2 = async () => {
        if (performanceData && performanceData.lighthouseResult) {
            const screenshotItems =
                performanceData.lighthouseResult.audits['screenshot-thumbnails'].details.items;

            const images = await Promise.all(
                screenshotItems.map(async (item) => {
                    try {
                        const response = await axios.get(item.data, {
                            responseType: 'arraybuffer',
                        });
                        const base64Data = btoa(
                            new Uint8Array(response.data).reduce(
                                (data, byte) => data + String.fromCharCode(byte),
                                ''
                            )
                        );
                        return `data:image/png;base64,${base64Data}`;
                    } catch (error) {
                        return null;
                    }
                })
            );

            setScreenshotData2(images);
        }
    };

    useEffect(() => {
        if (performanceData) {
            getScreenshotData();
            getScreenshotData2();
        }
    }, [performanceData]);

    
    useEffect(() => {
        handleSubmit()
        
    }, [url]);



    function getPathColor(score) {
        if (score >= 0 && score <= 49) {
            return '#c00';
        } else if (score >= 50 && score <= 89) {
            return '#fa3';
        } else {
            return '#0c6';
        }
    }

    const handleSubmit = async () => {
      

        if (url.trim() === '') {
            // alert('Please enter a valid URL.');
            return;
        }

        setLoading(true); // Show the loading text

        try {
            const response = await axios.get(
                `https://www.googleapis.com/pagespeedonline/v5/runPagespeed?url=${encodeURIComponent(
                    url
                )}&strategy=${'desktop'}&category=performance&category=seo&category=accessibility&category=best-practices`
            );
            setPerformanceData(response.data);

           

            // Extract and set the CrUX metrics
            const loadingExperience = response.data.loadingExperience;
            // setCruxMetrics({
            //     'First Contentful Paint': loadingExperience.metrics.FIRST_CONTENTFUL_PAINT_MS.category,
            //     'First Input Delay': loadingExperience.metrics.FIRST_INPUT_DELAY_MS.category,
            // });

            // Extract and set the Lighthouse metrics
            const lighthouse = response.data.lighthouseResult;
            setLighthouseMetrics({
                'First Contentful Paint': lighthouse.audits['first-contentful-paint'].displayValue,
                'Speed Index': lighthouse.audits['speed-index'].displayValue,
                'Time To Interactive': lighthouse.audits['interactive'].displayValue,
                'First Meaningful Paint': lighthouse.audits['first-meaningful-paint'].displayValue,
            });
        } catch (error) {
            alert('Error fetching data. Please check the URL and try again.');
    
        } finally {
            setLoading(false); // Hide the loading text
        }
    };

    return (
        <div className='container'>

            {/* input  */}
            {/* <div className="min-h-screen flex flex-col items-center justify-center">
                <h1 className="text-2xl mb-4">Page Speed Insight</h1>
                <p>Enter URL to test the page load time , analyze it, and find bottlenecks.</p>
                <form onSubmit={handleSubmit} className="flex">
                    <div className="rounded-md ">
                        <input
                            type="text"
                            placeholder="URL"
                            value={url}
                            onChange={(e) => setUrl(e.target.value)}
                        />
                    </div>
                    <Button type="submit" className="rounded-md">
                        Analyze
                    </Button>
                </form>
            </div> */}

            {/* analyzed data  */}
            {loading && <p className='text-center'>Loading...</p>}
            {performanceData && !loading && (
                <div className='flex flex-col items-center justify-center p-6 border-[1px] border-[#B7B5B5] rounded-lg max-w-[700px] mx-auto my-10'>
                    <h2 className='text-dark-blue text-2xl'>Performance Results for {performanceData.id}</h2>
                    <div className='flex flex-row justify-center items-center space-x-6 mt-6'>

                        {/* Performance */}
                        <div className='flex flex-col items-center'>
                            <div className='h-24 w-24 relative flex'>
                                <CircularProgressbar
                                    value={getCategoryScore('performance')}
                                    text={''}
                                    styles={buildStyles({
                                        rotation: 0.25,
                                        strokeLinecap: 'butt',
                                        textSize: '16px',
                                        pathTransitionDuration: 0.5,
                                        pathColor: getPathColor(getCategoryScore('performance')),
                                        textColor: '#f88',
                                        trailColor: '#d6d6d6',
                                        backgroundColor: '#3e98c7',
                                    })}
                                />
                                <p className="absolute top-[62%] left-1/2 text-2xl transform -translate-x-1/2 -translate-y-1/2" style={{ color: '#f88' }}>
                                    {`${getCategoryScore('performance')}`}%
                                </p>
                            </div>
                            <p className='text-[red] text-base font-medium mt-2'>Performance</p>
                        </div>

                        {/* SEO */}
                        <div className='flex flex-col items-center'>
                            <div className='h-24 w-24 relative'>
                                <CircularProgressbar
                                    value={getCategoryScore('seo')}
                                    text={''}
                                    styles={buildStyles({
                                        rotation: 0.25,
                                        strokeLinecap: 'butt',
                                        textSize: '16px',
                                        pathTransitionDuration: 0.5,
                                        pathColor: getPathColor(getCategoryScore('seo')),
                                        textColor: '#f88',
                                        trailColor: '#d6d6d6',
                                        backgroundColor: '#3e98c7',
                                    })}
                                />
                                <p className="absolute top-[62%] left-1/2 text-2xl transform -translate-x-1/2 -translate-y-1/2" style={{ color: '#f88' }}>
                                    {`${getCategoryScore('seo')}`}%
                                </p>
                            </div>
                            <p className='text-[#FB8C00] text-base font-medium mt-2'>SEO</p>
                        </div>

                        {/* Accessibility */}
                        <div className='flex flex-col items-center'>
                            <div className='h-24 w-24 relative'>
                                <CircularProgressbar
                                    value={getCategoryScore('accessibility')}
                                    text={''}
                                    styles={buildStyles({
                                        rotation: 0.25,
                                        strokeLinecap: 'butt',
                                        textSize: '16px',
                                        pathTransitionDuration: 0.5,
                                        pathColor: getPathColor(getCategoryScore('accessibility')),
                                        textColor: '#f88',
                                        trailColor: '#d6d6d6',
                                        backgroundColor: '#3e98c7',
                                    })}
                                />
                                <p className="absolute top-[62%] left-1/2 text-2xl transform -translate-x-1/2 -translate-y-1/2" style={{ color: '#f88' }}>
                                    {`${getCategoryScore('accessibility')}`}%
                                </p>
                            </div>
                            <p className='text-[#FB8C00] text-base font-medium mt-2'>Accessibility</p>
                        </div>

                        {/* Best Practices */}
                        <div className='flex flex-col items-center'>
                            <div className='h-24 w-24 relative'>
                                <CircularProgressbar
                                    value={getCategoryScore('best-practices')}
                                    text={''}
                                    styles={buildStyles({
                                        rotation: 0.25,
                                        strokeLinecap: 'butt',
                                        textSize: '16px',
                                        pathTransitionDuration: 0.5,
                                        pathColor: getPathColor(getCategoryScore('best-practices')),
                                        textColor: '#f88',
                                        trailColor: '#d6d6d6',
                                        backgroundColor: '#3e98c7',
                                    })}
                                />
                                <p className="absolute top-[62%] left-1/2 text-2xl transform -translate-x-1/2 -translate-y-1/2" style={{ color: '#f88' }}>
                                    {`${getCategoryScore('best-practices')}`}%
                                </p>
                            </div>
                            <p className='text-[#18B663] text-base font-medium mt-2'>Best Practices</p>
                        </div>

                    </div>
                </div>
            )}

            <div className='flex justify-between max-w-[70%] mx-auto my-10'>
                {screenshotData && !loading && (
                    <div className='border-r-[1px] border-[#AFAFAF] px-10 w-[50%]'>
                        <h2 className='text-dark-blue text-2xl '>Page Screenshot</h2>
                        <img
                            src={`data:image/png;base64,${screenshotData}`}
                            alt="Page Screenshot"
                            className='!h-[300px] w-full mt-5 object-cover'
                        />
                    </div>
                )}

                {Object.keys(lighthouseMetrics).length > 0 && !loading && (
                    <div className='w-1/2 px-10'>
                        <h2 className='text-dark-blue text-2xl '>Lighthouse Results</h2>
                        {Object.keys(lighthouseMetrics).map((key) => (
                            <p key={key} className='mt-5 text-black-color text-lg pb-[5px]'>
                                {key}: {lighthouseMetrics[key]}
                            </p>
                        ))}
                    </div>
                )} 
            </div>

            


            {screenshotData2 && screenshotData2.length > 0 && !loading && (
                <div className='p-6 border border-[#B7B5B5] rounded-lg my-14'>
                    <h2 className='text-dark-blue text-2xl '>Screenshot Thumbnails</h2>
                    <div style={{ display: 'flex' }} className='mt-6'>
                        {screenshotData2.map((data, index) => (
                            <img
                                key={index}
                                src={data}
                                alt={`Screenshot ${index + 1}`}
                                style={{ width: '100px', height: 'auto', margin: '5px' }}
                            />
                        ))}
                    </div>
                </div>
            )}

        </div>
    );
}

