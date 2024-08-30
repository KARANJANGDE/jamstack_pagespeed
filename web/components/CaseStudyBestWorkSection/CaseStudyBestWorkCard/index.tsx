import React, { Fragment } from "react";

import dynamic from "next/dynamic";
import { CaseStudyBestWorkCardType } from "@/lib/sanity/types/page";
const Link = dynamic(() => import("../../Link"));
const CustomImage = dynamic(() => import("../../CustomImage"));

const CaseStudyBestWorkCard: React.FC<{
  item?: CaseStudyBestWorkCardType;
}> = ({ item }) => {
  const { heroSectionPreview, slug, feature_images } = item || {};
  if (!heroSectionPreview) {
    return null;
  }
  const { description, section_title, title } = heroSectionPreview || {};

  return (
    <Fragment>
      <li className="">
        <div className="bg-casestudy-gradient flex flex-col md:flex-row-reverse sm:items-center  justify-between shadow-[0px_4px_10px_rgba(74,58,255,0.3)] mb-[3.25em] lg:mb-[6.25em] px-8 md:px-12 py-6 lg:py-12 rounded-[0.625em]">
          <div className="w-full md:w-2/5 font-DM">
            <h6 className="leading-[1.5em] font-normal text-sm sm:text-base text-[#000ee6] mb-2 font-DM !uppercase">
              {section_title}
            </h6>
            <h4 className="text-2xl sm:text-3xl md:text-4xl text-dark-blue font-medium font-DM">
              {title}
            </h4>
            <p className="text-sm sm:text-base md:text-lg font-normal leading-[1.5em] text-dark-blue">
              {description}
            </p>
            <Link
              to={`/case-studies/${slug?.current}`}
              className="inline-block text-sm sm:text-base font-normal leading-[1.25em] px-3 py-[0.45em] rounded-[0.625em] border-[0.0625em] border-solid border-dark-pink hover:bg-dark-pink hover:text-white-color"
            >
              View Case
            </Link>
          </div>
          <div className="flex justify-center md:justify-start w-full sm:w-[53%] mt-8 md:mt-[0]">
            {feature_images?.map((image, index) => {
              return (
                <CustomImage
                  block={image}
                  key={index}
                  className="first:w-full max-w-full min-h-full lg:min-h-[22em] max-h-[22em] object-contain mx-4 my-0"
                />
              );
            })}
          </div>
        </div>
      </li>
    </Fragment>
  );
};
export default CaseStudyBestWorkCard;
