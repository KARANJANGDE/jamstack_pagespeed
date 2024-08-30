import clsx from "clsx";
import React from "react";
import CustomImage from "../CustomImage";
import { ErrorImageType } from "@/lib/sanity/types/page";

const Four0fourSection: React.FC<ErrorImageType> = ( block ) => {
  const { error_image, title, sub_title, section_theme } = block || {};
  return (
    <div className={clsx("pt-40 md:pt-52 pb-16", section_theme ?? "bg-white")}>
      <div className="container">
        <div className="mx-auto text-center [&>img]:max-w-[90%] em:[&>img]:max-w-[70%] md:[&>img]:max-w-[50%] [&>img]:mx-auto">
          <div className="mb-12 md:mb-24">
          {title &&  <h4 className="text-[3em] em:text-[4em] font-black text-dark-pink capitalize">{title}</h4> }
          {sub_title &&  <p className="text-[1.25em] em:text-[1.5em] font-bold text-dark-blue">{sub_title}</p> }
          </div>
          {error_image && <CustomImage block={error_image}/>}
        </div>
      </div>
    </div>
  );
};

export default Four0fourSection;
