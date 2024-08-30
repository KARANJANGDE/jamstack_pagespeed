import React from 'react';
import Slider from "react-slick";

const PlanContactInformation = () => {

    const settings = {
        dots: false,
        autoplay: true,
        arrows: false,
      };

    return (
        <div className="w-full emd:w-2/5 bg-dark-pink rounded-lg p-6 em:p-8 sm:p-[3.125rem] flex flex-col justify-between">
            <div className="plancontact-sidebar-header">
                <h6 className='text-white-color text-base font-medium'>Jamstacky</h6>
                <div className='pt-6 emd:pt-11'>
                    <h4 className='text-[1.75rem] xl:text-[2.08rem] text-white-color font-semibold font-DM leading-[1.2] max-w-full emd:max-w-[20.625rem]'>Start your journey with us</h4>
                    <h5 className='text-white-color text-[0.832rem] tracking-[0.333px] font-medium pt-2.5 opacity-70'>Because only Excellent Team can bring Excellence to your business.</h5>
                </div>
                
            </div>

            <div className=" mt-20 emd:mt-0 overflow-hidden">
                <ul className="bg-dark-blue rounded-[0.875rem]">
                    <Slider {...settings}>
                        <li className=" p-4 em:p-8">  
                                <p className='text-xs sm:text-sm text-white-color text-DM leading-5'>
                                    Codage habitation has been wonderful to work with. We have 2 great
                                    finished mobile apps that took less than the estimated time to
                                    complete. We are impressed with the value to money ratio we got
                                    working with them.{' '}
                                </p>
                                <div className="review-info">
                                    <div className="review-info-left" />
                                    <div className="review-info-right">
                                        <h6 className='text-white-color uppercase font-semibold text-base em:text-lg '>Dj gee</h6>
                                        <p className='text-white-color text-sm'>Founder of King 3 Event - USA</p>
                                    </div>
                                </div>
                        </li>
                        <li className=" p-4 em:p-8">
                                <p className='text-xs sm:text-sm text-white-color text-DM leading-5'>
                                    Codage habitation has been wonderful to work with. We have 2 great
                                    finished mobile apps that took less than the estimated time to
                                    complete. We are impressed with the value to money ratio we got
                                    working with them.{' '}
                                </p>
                                <div className="review-info">
                                    <div className="review-info-left" />
                                    <div className="review-info-right">
                                        <h6 className='text-white-color uppercase font-semibold text-base em:text-lg '>JONE</h6>
                                        <p className='text-white-color text-sm'>Founder of King 3 Event - USA</p>
                                    </div>
                                </div>
                        </li>
                        <li className=" p-4 em:p-8">
                                <p className='text-xs sm:text-sm text-white-color text-DM leading-5'>
                                    Codage habitation has been wonderful to work with. We have 2 great
                                    finished mobile apps that took less than the estimated time to
                                    complete. We are impressed with the value to money ratio we got
                                    working with them.{' '}
                                </p>
                                <div className="review-info">
                                    <div className="review-info-left" />
                                    <div className="review-info-right">
                                        <h6 className='text-white-color uppercase font-semibold text-base em:text-lg '>ELON</h6>
                                        <p className='text-white-color text-sm'>Founder of King 3 Event - USA</p>
                                    </div>
                                </div>
                        </li>
                    </Slider>
                </ul>
           
            </div>
        </div>
    )
}

export default PlanContactInformation
