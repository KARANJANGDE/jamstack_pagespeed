import clsx from "clsx";
import React from "react";
import dynamic from "next/dynamic";
import { FeaturedCaseStudySectionType } from "@/lib/sanity/types/page";
import CustomImage from "../CustomImage";
import { PortableText } from "@portabletext/react";
const ProgressBar = dynamic(() => import("../ProgressBar"));

const case_study_data = [
  {
    label: "First contentful paint",
    value: 93,
  },
  {
    label: "Cumulative layout shift score",
    value: 84,
  },
  {
    label: "First input delay",
    value: 97,
  },
  {
    label: "Experimental interaction to next paint",
    value: 87,
  },
];

const Casestudy: React.FC<FeaturedCaseStudySectionType> = (props) => {
  const {
    case_study_blog,
    case_study_image,
    title_subtitle,
    core_web_title,
    section_theme,
  } = props || {};
  return (
    <div
      className={clsx(
        "px-0 py-10 sm:py-20 ",
        section_theme ?? "bg-white"
      )}
    >
      <div className="container">
        <div>
          {title_subtitle && (
            <div className="max-w-[850px] mt-[0] ml-auto em:ml-0 mr-auto text-center em:text-left mb-[10px]">
              <p className="after:absolute after:bg-light-blue after:w-[1em] md:after:w-[1.5em] after:h-[0.125em] after:right-[0.5em] after:top-[0.5em] before:absolute before:bg-light-blue before:w-[1em] md:before:w-[1.5em] before:h-[0.125em] before:left-[0.5em] before:top-[0.5em] font-medium leading-[1.25em] uppercase text-light-blue  tracking-wider relative inline-block mb-4 px-8 md:px-12 py-0 text-[14.175px] sm:text-[15.75px] xl:text-[18px] font-DM">
                {title_subtitle?.title}
              </p>
              <p className="font-medium leading-[1.25em] text-[20px] lg:text-[24px] xl:text-[28px] font-DM text-title-blue-shade">
                {title_subtitle?.sub_title}
              </p>
            </div>
          )}
          <div className="block md:flex  p-0 font-DM ">
            <div className="w-full md:w-2/5 max-w-full md:max-w-[35em] xl:max-w-[30em]">
              {case_study_image && (
                <div>
                  <CustomImage
                    block={case_study_image}
                    height={350}
                    width={350}
                    priority
                  />
                </div>
              )}
              <div className="mt-6 mb-0 mx-0 ">
                <h1 className="text-[17px] sm:text-[19px] xl:text-[24px] font-normal leading-[1.5em] text-dark-blue font-DM">
                  {core_web_title}
                </h1>
                <div>
                  <ul className="block mt-6">
                    {case_study_data?.map((i, index) => (
                      <li key={index} className="mt-0 mb-8 mx-0">
                        <label className="text-base font-normal leading-[1em] text-[#5d63a9]">
                          {i?.label}
                        </label>
                        <div className="relative z-0 block [&>*>div]:absolute [&>*>div]:w-auto [&>*>div]:left-0 ">
                          <ProgressBar progress={100} bgcolor="#E53A36" />
                          <ProgressBar progress={90} bgcolor="#FB8C00" />
                          <ProgressBar progress={i?.value} />
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            {case_study_blog && (
              <div
                className="w-full md:w-3/5 pl-[0] md:pl-[5.3125em] [&>h2]:font-medium [&>h2]:leading-[1.5em] [&>h2]:text-title-blue-shade [&>h2]:mb-4 mt-12 sm:mt-20 md:mt-12
                [&>h3]:font-medium [&>h3]:leading-[1.5em] [&>h3]:text-title-blue-shade [&>h3]:mb-4 
                [&>h4]:font-medium [&>h4]:leading-[1.5em] [&>h4]:text-title-blue-shade [&>h4]:mb-4
                [&>h1]:font-medium [&>h1]:leading-[1.5em] [&>h1]:text-title-blue-shade [&>h1]:mb-4 [&>h1]:text-[17px] sm:[&>h1]:text-[20px]  xl:[&>h1]:text-[24px] [&>h1]:font-DM
                [&>h6]:font-medium [&>h6]:leading-[1.5em] [&>h6]:text-title-blue-shade [&>h6]:mb-4 
                [&>p]:text-[16px]  sm:[&>p]:text-[20px] lg:[&>p]:text-[24px] xl:[&>p]:text-[28px]  [&>p]:font-normal [&>p]:leading-[24px] em:[&>p]:leading-[28px] sm:[&>p]:leading-[35px] lg:[&>p]:leading-[40px]  [&>p]:text-dark-blue  [&>p]:mb-2  [&>p]:p-0
                [&>p>em]:block [&>p>em]:text-black-color [&>p>em]:text-[16px] sm:[&>p>em]:text-[20px] lg:[&>p>em]:text-[22px] [&>p>em]:leading-[1.5em] [&>p>em]:mt-8 xl:[&>p>em]:mt-16 [&>p>em]:mb-5 [&>p>em]:mx-0
                [&>p>em>span]:text-dark-pink [&>a]:px-[1.8em] lg:[&>a]:px-[2.5em] [&>a]:py-[0.8em] lg:[&>a]:py-[1em]  hover:[&>a]:bg-dark-blue  [&>a]:text-white-color [&>a]:hover:text-white-color  [&>a]:text-xs sm:[&>a]:text-sm xl:[&>a]:text-lg
              "
              >
                <PortableText value={case_study_blog.custom_rich_text} />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Casestudy;
