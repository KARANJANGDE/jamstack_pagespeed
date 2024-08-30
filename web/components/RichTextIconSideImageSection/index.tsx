import React from "react";
import dynamic from "next/dynamic";
const RichText = dynamic(() => import("../RichText"));
const CustomImage = dynamic(() => import("../CustomImage"));
const TitleSubtitle = dynamic(() => import("../TitleSubtitle"));
import { RichTextIconSideImageSectionType } from "@/lib/sanity/types/page";

const RichTextIconSideImageSection: React.FC<
  RichTextIconSideImageSectionType
> = (block) => {
  const {
    title_subtitle,
    section_description,
    icon_lable_array,
    section_image,
  } = block || {};
  return (
    <div className="pt-10 sm:pt-20 pb-10 sm:pb-12">
      <div className="container">
        <div className="block emd:grid grid-cols-[1.5fr_1fr] gap-x-[7em] [&>div>p]:text-[14px] xl:[&>div>p]:text-[15px] [&>div>p]:text-[#646680] [&>div>p]:font-Montserrat [&>div>p]:leading-[180%] [&>div>p]:pb-4 [&>div>p]:font-Inter [&>div>p]:text-center em:[&>div>p]:text-left">
          <div className="[&>div>h5]:max-w-[50.56em] [&>div>h5]:text-dark-blue [&>div>h5]:font-Montserrat [&>div>h5]:font-semibold [&>div>h5]:mb-[0.5em] [&>div>h5]:text-[19px] sm:[&>div>h5]:text-[21px] xl:[&>div>h5]:text-[24px] ">
            {title_subtitle && <TitleSubtitle block={title_subtitle} />}
            {section_description && <RichText block={section_description} />}
            <div className="mt-4 max-w-full md:max-w-[70%]">
              <ul className="grid grid-cols-2 em:grid-cols-4 grid-rows-1 gap-y-[30px] sm:gap-y-0 gap-x-[30px] em:gap-x-0 items-baseline justify-center">
                {icon_lable_array?.map((item, index) => {
                  const { icon_image, icon_title } = item || {};
                  return (
                    <li
                      key={index}
                      className="ml-auto mr-auto sm:mr-8  text-center"
                    >
                      <div className="flex flex-col justify-center w-28">
                        <div className="w-[5em] h-auto p-4 mx-auto text-center bg-white-color rounded-[0.8em] shadow-white-lable">
                          {icon_image && <CustomImage block={icon_image} />}
                        </div>
                        <h6 className="text-[0.875em] text-dark-blue font-semibold font-Inter mt-2">
                          {icon_title}
                        </h6>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
          <div className="max-w-[90%] em:max-w-[50%] emd:max-w-full mx-auto pt-20 emd:pt-0">
            {section_image && <CustomImage block={section_image} />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RichTextIconSideImageSection;
