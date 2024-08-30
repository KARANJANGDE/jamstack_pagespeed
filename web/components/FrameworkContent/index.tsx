import React from "react";
import { Framework } from "@/lib/sanity/types/framework";
import dynamic from "next/dynamic";
const RichText = dynamic(() => import("../RichText"));
const CustomImage = dynamic(() => import("../CustomImage"));

const SummaryCompare: React.FC<{ block: Framework }> = ({ block }) => {
  const { richtext, image } = block || {};
  return (
    <div className=" block md:grid grid-cols-[3fr_1fr] gap-x-20 mb-12">
      <div className="[&>div>h4]:bg-dark-pink [&>div>h4]:py-[0.3em] [&>div>h4]:px-[2em] [&>div>h4]:rounded-[0.1em] [&>div>h4]:inline-block [&>div>h4]:text-white-color [&>div>h4]:text-lg xl:[&>div>h4]:text-xl [&>div>h4]:font-medium [&>div>h4]:mb-4 [&>div>p]:text-base sm:[&>div>p]:text-lg xl:[&>div>p]:text-xl [&>div>h4]:font-DM [&>div>p]:text-dark-blue  text-center em:text-left [&>div>p]:tracking-[-1px]">
        {richtext && <RichText block={richtext} />}
      </div>
      <div className="pt-4 em:pt-8 md:pt-0 flex justify-center items-center [&>img]:max-w-[10em] [&>img]:h-auto">
        {image && <CustomImage block={image} />}
      </div>
    </div>
  );
};

export default SummaryCompare;
