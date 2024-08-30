import React from "react";
import CustomImage from "../../CustomImage";
import { AllFrameworkTypes } from "@/lib/sanity/types/page";

const Frameworkalldata: React.FC<{
  block: Pick<AllFrameworkTypes, "_type" | "image" | "name">;
}> = ({ block }) => {
  const { name, image } = block || {};
  return (
    <div className="tech-stack-technology">
      <div className="techIcon">{image && <CustomImage block={image} className="max-w-[3.5em] max-h-[4em] object-contain" />}</div>
      <p className="font-Inter text-center font-medium text-dark-blue text-xs sm:text-sm">
        {name}
      </p>
    </div>
  );
};

export default Frameworkalldata;
