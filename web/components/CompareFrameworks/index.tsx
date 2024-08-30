import clsx from "clsx";
import React from "react";
import { ComparisionFrameworksSectionType } from "@/lib/sanity/types/page";
import dynamic from "next/dynamic";
const Frameworks = dynamic(()=>import("../Frameworks"))
const ComparisionFrameworks: React.FC<ComparisionFrameworksSectionType> = ({
  compare_framework_section,
  title_subtitle,
  variant,
  is_show,
}) => {
  return (
      <div
        className={clsx(
          "pl-0 pr-0 pt-10 sm:pt-20 pb-4",
          variant ?? "primary"
        )}
      >
        <div className="container">
          <div
            className={clsx(
              "",
              is_show
                ? "hidden"
                : "[&>div]:bg-dark-pink  [&>div]:w-full [&>div]:max-w-full [&>div]:m-0 [&>div]:p-[2em] em:[&>div]:p-[3em] [&>div]:rounded-[0.625em_0.625em_0_0] [&>div>h5]:text-[14.75px] sm:[&>div>h5]:text-[15.75px] emd:[&>div>h5]:text-[14px] xl:[&>div>h5]:text-[16px] [&>div>h5]:mt-4 [&>div>h5]:max-w-full sm:[&>div>h5]:max-w-[85%] [&>div]:text-center em:[&>div]:text-left"
            )}
          >
          {title_subtitle && (
              <div className="max-w-[850px] mt-0 ml-auto em:ml-0 mr-auto text-center em:text-left mb-[30px] md:mb-[50px]">
                <p className="after:absolute after:bg-white-color after:w-[1.5em] after:h-[0.125em] after:right-[0.5em] after:top-[0.5em]  before:absolute before:bg-white-color before:w-[1.5em] before:h-[0.125em] before:left-[0.5em] before:top-[0.5em] font-medium leading-[1.25em] uppercase text-white-color  tracking-wider relative inline-block mb-4 px-12 py-0 text-[14.175px] sm:text-[15.75px] xl:text-[18px] font-DM">
                  {title_subtitle?.title}
                </p>
                <p className="mt-2 xl:mt-4 text-base xl:text-lg max-w-full ms:max-w-[85%] text-white-color font-medium font-DM ">
                  {title_subtitle?.sub_title}
                </p>
              </div>
            )}
          </div>
          <div
            className={clsx(
              "",
              is_show
                ? ""
                : " bg-compare-framework-gradient px-0 py-6 em:py-10"
            )}
          >
            {compare_framework_section &&
              compare_framework_section?.map((item, index) => {
                return (
                  item && (
                    <Frameworks
                      block={item}
                      key={index}
                      isshow={Boolean(is_show)}
                      variant={variant}
                    />
                  )
                );
              })}
          </div>
        </div>
      </div>
  );
};

export default ComparisionFrameworks;
