import React from "react";
import clsx from "clsx";
import { Fragment } from "react";
import { TitleDescriptionSideImageSectionType } from "@/lib/sanity/types/page";
import dynamic from "next/dynamic";
const RichText = dynamic(() => import("@/components/RichText"));
const CustomImage = dynamic(() => import("@/components/CustomImage"));

const BlogDetailTitleDescriptionSideImageSection: React.FC<{
  block: TitleDescriptionSideImageSectionType;
}> = ({ block }) => {
  const { desc, side_image, title_subtitle, background, variant } = block || {};

  const { sub_title, title } = title_subtitle || {};

  return (
    <Fragment>
      <div
        className={clsx("background-purple", background ?? "background-white")}
      >
        <div className="container">
          <div
            className={clsx(
              "max-w-[1220px] mx-auto py-8 md:py-[2.6875em] px-8 md:px-[3.5em] rounded-[0.625em] block md:flex justify-between text-center em:text-left items-center bg-review-gradient rounded-none "
            )}
          >
            <div
              className={clsx(
                "[&>div>h5]:text-white-color [&>div>h5]:text-center em:[&>div>h5]:text-left [&>h5]:text-[19px] sm:[&:h5]:text-[21px] xl:[&>h5]:text-[24px]  [&>p]:font-DM  [&>p]:text-white-color [&>p]:text-sm xl:[&>p]:text-base [&>p]:text-center em:[&>p]:text-left [&>a]:rounded-[3em] [&>a]:text-sm xl:[&>a]:text-base [&>a]:font-semibold hover:[&>a]:bg-white-color hover:[&>a]:text-dark-blue [&>a]:shadow-hire-btn [&>a]:py-4 esm:[&>a]:py-[1.125em] [&>a]:px-4 lsm:[&>a]:px-[1.8em] esm:[&>a]:px-10 w-full md:w-3/4 xl:pr-10"
              )}
            >
              {title && (
                <p
                  className={clsx(
                    "after:w-[1.5em] after:h-[0.125em] after:right-[0.5em] after:top-[0.5em]  before:absolute font-DM tracking-wider relative inline-block mb-4 px-12 py-0 text-[14.175px] sm:text-[15.75px] xl:text-[18px] font-medium leading-[1.25em] uppercase after:absolute before:h-[0.125em] before:left-[0.5em] before:top-[0.5em]  after:bg-dark-pink  before:bg-dark-pink before:w-[1.5em]  !text-dark-pink"
                  )}
                >
                  {title}
                </p>
              )}
              {sub_title && (
                <h5
                  className={clsx(
                    "capitalize font-DM !text-[1.875em] mb-2 leading-tight font-medium text-white-color "
                  )}
                >
                  {sub_title}
                </h5>
              )}
              <div
                className={clsx(
                  "max-w-full md:max-w-[74%]  [&>p]:text-base  [&>p>span]:text-dark-pink [&>a]:mt-4  [&>a]:font-semibold hover:[&>a]:text-white-color hover:[&>a]:bg-btn-hover-pink [&>a]:rounded-[0.625em] [&>a]:px-[1.57em] [&>a]:py-4 [&>a]:text-sm [&>p]:text-white-color !max-w-full "
                )}
              >
                {desc?.custom_rich_text && <RichText block={desc} />}
              </div>
            </div>
            <div className="!mx-auto lg:ml-auto  hidden md:flex justify-center md:justify-end pt-12 md:pt-0 [&>img]:max-w-[90%] [&>img]:ml-auto [&>img]:mr-auto lg:[&>img]:mr-0 [&>img]:h-[335px]">
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

export default BlogDetailTitleDescriptionSideImageSection;
