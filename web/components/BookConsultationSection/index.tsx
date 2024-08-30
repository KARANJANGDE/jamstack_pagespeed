import clsx from "clsx";
import React from "react";
import { InlineWidget } from "react-calendly";

import { BookConsultationType } from "@/lib/sanity/types/page";
import dynamic from "next/dynamic";
const RichText=dynamic(()=>import("../RichText"))
const CustomImage=dynamic(()=>import("../CustomImage"))

const BookConsultationSection: React.FC<BookConsultationType> = (block) => {
  const { content, staff, section_image, variant } = block || {};
  const { staff_image, staff_name, staff_content, staff_post } = staff || {};
  return (
    <>
      {variant === "secondary" ? (
        <>
          <div className={clsx("py-8 em:py-12", variant ?? "primary")}>
            <div className="container">
            
              <div
                className={clsx(
                  "bg-[#ecf0f3] shadow-none p-8 pt-8 md:p-16 md:pt-0 lg:pt-20 xl:pt-7 lg:px-16 border-[0.0625em] border-solid border-Cerise-red rounded-[1.5em] "
                )}
              >
                
                <div className="grid md:grid-cols-[1fr] lg:grid-cols-[3fr_1.5fr] gap-x-20 gap-y-10 md:gap-y-16">
                <div className="order-1 lg:order-[unset]">
                  
                  <InlineWidget
                    url="https://calendly.com/patelparth9930/30min"
                    styles={{ height: "700px" }}
                    pageSettings={{
                      hideEventTypeDetails: true,
                      hideGdprBanner: true,
                      hideLandingPageDetails: true,
                    }}
                  />
                </div>
                <div className="mt-0 md:mt-16">
                <div className="mb-6 md:mb-10 xl:mb-12 mt-4 md:mt-0">
                <div className="[&>p>strong]:text-[1.5em] [&>p>strong]:font-semibold [&>p]:text-base">
                    {content && <RichText block={content} />}
                  </div>
                  </div>
                  <div className="relative flex-col bg-dark-blue shadow-none px-10 py-8 rounded-[0.5em_0.5em_0_0] mt-28">
                    <div className="mx-auto top-[-5em] flex justify-center inset-x-0 absolute max-w-[6em] rounded-[5em] border-[0.3125em] border-solid border-white-color ">
                      {staff_image && <CustomImage block={staff_image} />}
                    </div>
                    <div className="text-center bg-white mt-[-4em] pt-12 pb-4 px-4 rounded-[0.5em] bg-white-color">
                      <h5 className="text-xl font-bold text-dark-pink uppercase">
                        {staff_name}
                      </h5>
                      <p className="text-base font-normal text-dark-blue opacity-100 p-0">
                        {staff_post}
                      </p>
                    </div>
                  </div>
                  <div className="bg-dark-blue flex-col pt-0 pb-8 px-8 rounded-[0_0_0.5em_0.5em]">
                    {/* <div className="flex items-center justify-center">
                      <p className="text-[0.75em] text-white-color opacity-50 pb-0">
                        Participants
                      </p>
                      <ul className="px-[1.5em] flex items-center">
                        <li className="mx-[-0.8em] [&>img]:max-w-[10em] [&>img]:border-[0.25em] [&>img]:border-white-color [&>img]:rounded-[3em]">
                          {section_image && (
                            <CustomImage block={section_image} />
                          )}
                        </li>
                      </ul>
                      <p className="text-[0.75em] text-white-color opacity-50 pb-0">
                        100+
                      </p>
                    </div> */}
                    <div className="bde-info [&>p]:text-[1em] [&>p]:leading-[1.5em] [&>p]:text-[#ecf0f3] [&>p]:text-center [&>p]:tracking-wide [&>p]:pb-0">
                      {staff_content && <RichText block={staff_content} />}
                    </div>
                  </div>
                  
                </div>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className={clsx("py-[2.5em] em:py-[3em]", variant ?? "primary")}>
            <div className="container">
              <div className="py-[3em] px-[2em] em:px-[4em] shadow-calendy-box rounded-[1.5em] block lg:flex justify-between">
                <div className="w-full lg:w-[70%] max-w-full lg:max-w-[60%]">
                  <div className="block sm:flex  font-Montserrat items-center">
                    <div className="flex items-center bg-white-color rounded-[0.875em] pb-[1em]  relative ">
                      <div className="[&>img]:max-w-[5em] flex justify-center sm:justify-start">
                        {staff_image && <CustomImage block={staff_image} />}
                      </div>
                      <div className=" text-left  pl-3">
                        <h5 className="text-lg font-medium text-black-color">
                          {staff_name}
                        </h5>
                        <p className="text-[12.25px] xl:text-[14px] font-medium opacity-50 pb-[0]">
                          {staff_post}
                        </p>
                      </div>
                    </div>
                    {/* <div className="flex items-center pt-[1em] justify-center">
                      <div className="flex items-center">
                        <p className="text-[12.25px] xl:text-[14px] pb-[0]">
                          Participants
                        </p>
                        <ul className="px-[1.5em] flex items-center">
                          <li className="mx-[-0.8em] [&>img]:max-w-[10em] [&>img]:border-[0.25em] [&>img]:border-white-color [&>img]:rounded-[3em]">
                            {section_image && (
                              <CustomImage block={section_image} />
                            )}
                          </li>
                        </ul>
                        <p className="text-[12.25px] xl:text-[14px] pb-[0]">
                          100+
                        </p>
                      </div>
                      <div className="bde-info">
                        {staff_content && <RichText block={staff_content} />}
                      </div>
                    </div> */}
                  </div>
                  <div className="[&>p>br]:hidden max-w-full lg:max-w-[65%] mt-[1em] [&>p]:text-[16px] xl:[&>p]:text-[16px] [&>p]:opacity-80 [&>p]:font-Montserrat [&>p>strong]:font-medium [&>p>strong]:text-[21px] xl:[&>p>strong]:text-[24px]">
                    {content && <RichText block={content} />}
                  </div>
                </div>
                <div className="w-full lg:w-[40%] hidden em:block">
                  <div className="hidden">
                    {content && <RichText block={content} />}
                  </div>
                  <div className="mt-8 lg:mt-0">
                  <InlineWidget
                    url="https://calendly.com/whoisparth/jamstacky"
                    styles={{ height: "600px" }}
                    pageSettings={{
                      hideEventTypeDetails: true,
                      hideGdprBanner: true,
                      hideLandingPageDetails: true,
                    }}
                  />
                  </div>
                  
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default BookConsultationSection;
