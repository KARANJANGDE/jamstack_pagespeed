import React from "react";
import CustomImage from "../CustomImage";
import dynamic from "next/dynamic";
import { Author } from "@/lib/sanity/types/author";


const Link = dynamic(() => import("../Link"));

const Author: React.FC<{ block: Author }> = ({ block }) => {
  const { author_Image, author_Name, author_Post, company } = block || {};
  return (
    <div className="mt-[1.75em] pb-4 sm:pb-12  flex  justify-center em:justify-start items-center">
      <div className="[&>img]:max-w-[4em] sm:[&>img]:max-w-[4.8125em] text-left">
        {author_Image && <CustomImage block={author_Image} />}
      </div>
      <div className="pl-[0.875em]">
        <h1 className="text-base em:text-lg xl:text-[22px] leading-normal font-bold text-black-shade-color font-DM">
          {author_Name}
        </h1>
        <div className="font-Inter">
          {author_Post && <span className="text-[#6D6E76] text-xs em:text-sm leading-normal ">{author_Post}</span>}
          {company && (
            <span className="[&>a]:text-[#6D6E76] [&>a]:text-xs em:[&>a]:text-sm [&>a]:leading-normal">
              <Link to={String(company?.link)} >{company?.label}</Link>
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default Author;
