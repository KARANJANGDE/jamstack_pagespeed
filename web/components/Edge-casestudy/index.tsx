import clsx from "clsx";
import React, { Fragment } from "react";
import TitleSubtitle from "../TitleSubtitle";
import CustomImage from "../CustomImage";
import Button from "../Button";
import Author from "../Author";
import { CaseStudySectionType } from "@/lib/sanity/types/page";

const EdgeCasestudy: React.FC<CaseStudySectionType> = (data) => {
  const {
    case_study_img,
    title_subtitle,
    description,
    read_full_case_study_button,
    section_title,
    author,
    section_theme,
  } = data || {};

  return (
    <Fragment>
      <div
        className={clsx(
          " px-0 py-6 em:py-8 md:py-16",
          section_theme ?? "bg-white"
        )}
      >
        <div className="container">
          <div className="edge-casestudy-inner">
            <div className="section-header">
              {title_subtitle && (
                <div className="max-w-[850px] mt-0 ml-auto em:ml-0 mr-auto text-center em:text-left mb-[30px] md:mb-[50px]">
                  <p className="after:absolute after:bg-light-blue after:w-[1em] md:after:w-[1.5em] after:h-[0.125em] after:right-[0.5em] after:top-[0.5em] before:absolute before:bg-light-blue before:w-[1em] md:before:w-[1.5em] before:h-[0.125em] before:left-[0.5em] before:top-[0.5em] font-medium leading-[1.25em] uppercase text-light-blue  tracking-wider relative inline-block mb-4 px-8 md:px-[3em] py-0 text-[14.175px] sm:text-[15.75px] xl:text-[18px] font-DM">
                    {title_subtitle?.title}
                  </p>
                  <p className="font-medium leading-[1.25em] text-[20px] lg:text-[24px] xl:text-[28px] font-DM text-title-blue-shade">
                    {title_subtitle?.sub_title}
                  </p>
                </div>
              )}
            </div>
            <div className="block md:flex items-center pt-4 sm:pt-14 pb-0 px-0 ">
              <div
                className="relative w-[70%] sm:w-1/2 mx-auto
              before:content-[''] before:bg-[url(/edge-logo.svg)] before:bg-no-repeat before:w-[3.1em] esm:before:w-12 md:before:w-16 before:h-12 md:before:h-16 before:absolute before:right-[38%]  lsm:before:right-[39%] esm:before:right-[41%] em:before:right-[43%] md:before:right-[45%] before:top-[42%]  lsm:before:top-[43%]  esm:before:top-[44%] before:bg-esmedgeSize esm:before:bg-mdedgeSize md:before:bg-edgeSize 
              "
              >
                {case_study_img && (
                  <CustomImage
                    block={case_study_img}
                    className="animate-spin"
                  />
                )}
              </div>
              <div
                className="w-full md:w-1/2 pl-0 md:pl-[5.3125em] mt-8 md:mt-0
                [&>h2]:font-semibold [&>h2]:leading-[1.5em] [&>h2]:text-title-blue-shade [&>h2]:mb-[0.3em]
                [&>h3]:font-semibold [&>h3]:leading-[1.5em] [&>h3]:text-title-blue-shade [&>h3]:mb-[0.3em]
                 
                [&>h5]:font-semibold [&>h5]:leading-[1.5em] [&>h5]:text-title-blue-shade [&>h5]:mb-[0.3em]
                [&>h6]:font-semibold [&>h6]:leading-[1.5em] [&>h6]:text-title-blue-shade [&>h6]:mb-[0.3em]
                [&>p]:text-[12.75px] md:[&>p]:text-[14.175px] xl:[&>p]:text-[18px] [&>p]:font-inter [&>p]:leading-[22px] xl:[&>p]:leading-[28px] [&>p]:text-center em:[&>p]:text-left [&>*:nth-child(4)]:text-center em:[&>*:nth-child(4)]:text-left
                
              "
              >
                <h2 className="font-Inter font-semibold leading-[30px] sm:leading-[35px] lg:leading-[50px] xl:leading-[60px] text-dark-blue mb-[0.3em] text-[21px] sm:text-[23px] lg:text-[34px] xl:text-[48px] text-center em:text-left font-inter">{section_title}</h2>
                <p className="text-lg font-light leading-[28px]  text-[#646680] mb-4 p-0 font-Inter">
                  {description}
                </p>
                <div>{author && <Author block={author} />}</div>
                <div className="hover:[&>a]:text-white-color [&>a]:px-5 sm:[&>a]:px-7 [&>a]:py-[10px] sm:[&>a]:py-3 hover:[&>a]:bg-dark-blue [&>a]:text-sm md:[&>a]:text-base [&>a]:font-medium [&>a]:leading-[20px]">
                  {read_full_case_study_button && (
                    <Button block={read_full_case_study_button} />
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default EdgeCasestudy;
