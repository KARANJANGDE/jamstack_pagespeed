import clsx from "clsx";
import React, { Fragment } from "react";
import Button from "../Button";
import CustomImage from "../CustomImage";
import { HeroSectionCaseStudyPageType } from "@/lib/sanity/types/page";

const HeroSection: React.FC<HeroSectionCaseStudyPageType> = (
  block,
  className
) => {
  const {
    button,
    description,
    image,
    section_title,
    title,
    background_classname,
  } = block || {};
  return (
    <div
      className={clsx(
        "w-full mx-auto my-0 pt-28 pb-10 lg:pt-48 lg:pb-20",
        background_classname ?? "bg-white ",
        background_classname === "dark-gradient"
          ? "bg-dark-gradient"
          : background_classname === "light-gradient"
          ? "light-gradient bg-hire-remote-gradient"
          : "bg-white-color"
      )}
    >
      <div className="container">
        <div className="block md:flex items-start justify-between gap-6">
          <div className="w-full md:w-[70%] max-w-full md:max-w-[60em] relative z-0 font-DM">
            <h6
              className={clsx(
                "   ",
                background_classname === "light-gradient"
                  ? "!uppercase tracking-[1px] sm:tracking-[3px]  font-medium font-inter mb-4 text-[11.2px] em:text-[12.25px] lg:text-[14px] xl:text-[16px] font-DM text-dark-blue "
                  : "!uppercase font-medium text-blue-color tracking-[1px] sm:tracking-[3px] font-Inter pb-3 md:pb-4 text-[11.2px] em:text-[12.25px] lg:text-[14px] xl:text-[16px]"
              )}
            >
              {section_title}
            </h6>
            <h1
              className={clsx(
                "text-[30px] md:text-[33px] emd:text-[40.25px] xl:text-[46px] leading-[1.25em] mb-2",
                background_classname === "dark-gradient"
                  ? "text-white-color font-medium max-w-full md:max-w-[70%] font-DM"
                  : "text-dark-blue font-bold max-w-full md:max-w-[80%] font-DM text-[25.2px] esm:text-[28.35px] md:text-[34px] emd:text-[40.25px] xl:text-[46px] leading-[1.25em]"
              )}
            >
              {title}
            </h1>
            <p
              className={clsx(
                "text-[15.31px] lg:text-[18px] font-normal leading-[1.5em]",
                background_classname === "dark-gradient"
                  ? "text-white-color opacity-70 max-w-full md:max-w-[30em]"
                  : " text-dark-blue max-w-full md:max-w-[35em] opacity-70"
              )}
            >
              {description}
            </p>
            <div>
              <ul className="mt-4 block vem:flex">
                <li
                  className={clsx(
                    "secondary [&>a]:bg-dark-blue hover:[&>a]:bg-btn-hover-blue hover:[&>a]:text-white-color [&>a]:text-[15.75px] xl:[&>a]:text-[18px] mr-4 [&>a]:px-[25px] [&>a]:py-[12px] lg:[&>a]:px-[30px] sm:[&>a]:py-[16px] lg:[&>a]:py-[20px] [&>a]:font-bold",
                    background_classname === "dark-gradient"
                      ? "[&>a]:bg-white-color [&>a]:text-dark-blue"
                      : ""
                  )}
                >
                  {button && button[0] && <Button block={button[0]} />}
                </li>
                <li className="hover:[&>a]:bg-btn-hover-pink hover:[&>a]:text-white-color ml-0 mt-0 vsm:ml-4 [&>a]:text-[15.75px] xl:[&>a]:text-[18px] mr-4 [&>a]:px-[25px] [&>a]:py-3 lg:[&>a]:px-[30px] sm:[&>a]:py-4 lg:[&>a]:py-5 [&>a]:mt-4 vem:[&>a]:mt-0 [&>a]:font-bold ">
                  {button && button[1] && <Button block={button[1]} />}
                </li>
              </ul>
            </div>
          </div>
          {Array.isArray(image) && (
            <div
              className={clsx(
                "w-[70%] em:w-2/4 md:w-2/5 relative z-0 flex justify-end [&>img]:w-full [&>img]:max-w-[30.125em] [&>img]:object-contain [&>img]:h-full ml-auto md:ml-auto mr-auto md:mr-0 mt-12 em:mt-8 md:mt-0",
                className ?? ""
                  ? "w-[70%] md:w-[42%] flex justify-end z-0 "
                  : "",
                {
                  "with-bg": image.length > 1,
                }
              )}
            >
              <CustomImage block={image[0]} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
