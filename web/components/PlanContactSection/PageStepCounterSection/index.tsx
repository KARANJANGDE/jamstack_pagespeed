import clsx from 'clsx';
import Image from 'next/image';
import React from 'react'

export default function Index({ curStep, setCurStep }) {
    return (
        <div className='flex justify-center items-center'>
            <ul className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-[45px] gap-y-[80px] lg:gap-y-[0px] items-baseline mt-10">
                <li onClick={() => {
                    setCurStep(0);
                }}
                >
                    <span className={clsx(
                        curStep === 0 || curStep > 0 ? "after:border-dark-blue" : "after:border-[#D9D9D9]",
                        "relative flex flex-col items-center justify-center text-center w-full  text-blue-color text-blue-color text-blue-color after:content-[''] after:hidden md:after:block after:absolute after:top-[2em] after:left-[60%] after:w-full after:h-1 after:border-b after:border-[#D9D9D9] after:border-4 after:inline-block mx-2 after:rounded"
                    )}>
                    </span>
                    <span
                        className={clsx(
                            curStep === 0 || curStep > 0 ?
                                "bg-dark-blue"
                                : "bg-[#EFF0F6] bg-white",
                            "relative z-[2] flex items-center justify-center w-20 h-20 md:h-10 bg-white-color rounded-full md:h-16 md:w-16 shadow-circleshdow shrink-0 mx-auto"
                        )}
                    >
                        <Image
                            src="/demo/user1(Traced).svg"
                            width={30}
                            height={30}
                            alt={""}
                            className='h-7'
                        />
                    </span>
                </li>
                <li
                    onClick={() => {
                        setCurStep(1);
                    }}
                >
                    <span className={clsx(
                        curStep === 2 ? "after:border-dark-blue" : "after:border-[#D9D9D9]",
                        "relative flex flex-col items-center justify-center text-center w-full  text-blue-color text-blue-color text-blue-color after:content-[''] after:hidden md:after:block after:absolute after:top-[2em] after:left-[60%] after:w-full after:h-1 after:border-b after:border-[#D9D9D9] after:border-4 after:inline-block mx-2 after:rounded"
                    )}>

                    </span>
                    <span
                        className={clsx(
                            curStep >= 1
                                ? "bg-dark-blue"
                                : "bg-[#EFF0F6] ",
                            "relative z-[2] flex items-center justify-center w-20 h-20 md:h-10 bg-white-color rounded-full md:h-16 md:w-16 shadow-circleshdow shrink-0 mx-auto"
                        )}
                    >
                        <Image
                            src="/demo/edit1(Traced).svg"
                            width={30}
                            height={30}
                            alt={""}
                            className='h-7'
                        />
                    </span>
                </li>
                <li
                    onClick={() => {
                        setCurStep(2)
                    }}
                >
                    <span
                        className={clsx(
                            curStep === 2
                                ? "bg-dark-blue"
                                : "bg-[#EFF0F6] ",
                            "relative z-[2] flex items-center justify-center w-20 h-20 md:h-10 bg-white-color rounded-full md:h-16 md:w-16 shadow-circleshdow shrink-0 mx-auto"
                        )}
                    >

                        <Image
                            src="/demo/credit-card1(Traced).svg"
                            width={30}
                            height={30}
                            alt={""}
                            className='h-7'
                        />
                    </span>
                </li>
            </ul>
        </div >
    );
};

