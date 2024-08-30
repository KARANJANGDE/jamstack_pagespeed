import React from "react";
import clsx from "clsx";
import { Fragment } from "react";
import { TitleDescriptionSideImageSectionType } from "@/lib/sanity/types/page";
import dynamic from "next/dynamic";
const RichText = dynamic(() => import("@/components/RichText"));
const CustomImage = dynamic(() => import("@/components/CustomImage"));

const TitleDescriptionSideImageSection: React.FC<{
  block: TitleDescriptionSideImageSectionType;
}> = ({ block }) => {
  const { desc, side_image, title_subtitle, background, variant } = block || {};

  const { sub_title, title } = title_subtitle || {};

  return (
    <Fragment>
      <div
        className={clsx(
          "",
          variant === "secondary" && "pt-28 sm:pt-32 lg:pt-40 pb-16 sm:pb-20",
          variant === "primary" &&
            "py-12 md:py-20 xl:py-28",
          !variant && "",
          background ?? "background-white"
        )}
      >
        <div className="container">
          <div
            className={clsx(
              "max-w-[1220px] mx-auto py-8 md:py-[2.6875em] px-8 md:px-14 rounded-[0.625em] block md:flex justify-between text-center em:text-left items-center",
              variant === "secondary" &&
                "secondary bg-comparision-gradient rounded-[0.625em]",
              variant === "primary" &&
                "!grid !grid-cols-1 lg:!grid-cols-[2fr_1fr] !p-0",
              !variant && "bg-review-gradient rounded-none"
            )}
          >
            <div
              className={clsx(
                "",
                variant === "primary"
                  ? "[&>p]:font-Inter [&>p]:text-sm em:[&>p]:text-base [&>p]:text-center em:[&>p]:text-left [&>a]:rounded-[0.625em] [&>a]:text-sm [&>a]:font-semibold hover:[&>a]:bg-dark-blue hover:[&>a]:text-white-color"
                  : "[&>div>h5]:text-white-color [&>div>h5]:text-center em:[&>div>h5]:text-left [&>h5]:text-[19px] sm:[&:h5]:text-[21px] xl:[&>h5]:text-[24px]  [&>p]:font-DM  [&>p]:text-white-color [&>p]:text-sm xl:[&>p]:text-base [&>p]:text-center em:[&>p]:text-left [&>a]:rounded-[3em] [&>a]:text-sm xl:[&>a]:text-base [&>a]:font-semibold hover:[&>a]:bg-white-color hover:[&>a]:text-dark-blue [&>a]:shadow-hire-btn [&>a]:py-4 esm:[&>a]:py-[1.125em] [&>a]:px-4 lsm:[&>a]:px-[1.8em] esm:[&>a]:px-10 w-full md:w-3/4 xl:pr-10",
                variant === "secondary" ? "!w-full md:!w-[56%]" : ""
              )}
            >
              {title && (
                <p
                  className={clsx(
                    "after:w-[1.5em] after:h-[0.125em] after:right-[0.5em] after:top-[0.5em]  before:absolute font-DM tracking-wider relative inline-block mb-4 px-12 py-0 text-[14.175px] sm:text-[15.75px] xl:text-[18px] font-medium leading-[1.25em] uppercase after:absolute before:h-[0.125em] before:left-[0.5em] before:top-[0.5em]",
                    variant === "primary"
                    
                      ? "after:bg-light-blue before:bg-light-blue before:w-[1.5em] !text-light-blue"
                      : " after:bg-dark-pink  before:bg-dark-pink before:w-[1.5em]  !text-dark-pink"
                  )}
                >
                  {title}
                </p>
              )}
              {sub_title && (
                <h5
                  className={clsx(
                    "capitalize font-DM !text-[1.875em] mb-2 leading-tight font-medium",
                    variant === "primary"
                      ? "leading-[1.25em] font-medium text-title-blue-shade text-[1.625em] md:text-[2.1875em] xl:!text-[2.125em]"
                      : "text-white-color ",
                    variant === "secondary"
                      ? "!text-[2.2640625em] sm:!text-[2.515625em] xl:!text-[2.875em] font-bold leading-tight"
                      : ""
                  )}
                >
                  {sub_title}
                </h5>
              )}
              <div
                className={clsx(
                  "max-w-full md:max-w-[74%]  [&>p]:text-[1em]  [&>p>span]:text-dark-pink [&>a]:mt-4  [&>a]:font-semibold hover:[&>a]:text-white-color hover:[&>a]:bg-btn-hover-pink [&>a]:rounded-[0.625em] [&>a]:px-[1.57em] [&>a]:py-4 [&>a]:text-sm",
                  variant === "primary"
                    ? "[&>p]:text-black-color [&>p]:text-base sm:[&>p]:text-lg !max-w-full [&>p]:leading-[1.8em] "
                    : "!max-w-full ",
                  variant === "secondary"
                    ? "!max-w-full md:!max-w-[75%] text-base leading-[1.3em] [&>p]:text-white-color"
                    : ""
                )}
              >
                {desc?.custom_rich_text && <RichText block={desc} />}
              </div>
            </div>
            <div className="!mx-auto lg:ml-auto  hidden md:flex justify-center md:justify-end pt-12 md:pt-[0] [&>img]:max-w-[90%] [&>img]:ml-auto [&>img]:mr-auto lg:[&>img]:mr-0 [&>img]:h-[335px]">
              {side_image && (
                <CustomImage block={side_image} className="object-contain" />
              )}
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default TitleDescriptionSideImageSection;
