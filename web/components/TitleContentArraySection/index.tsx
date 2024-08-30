
import React, { Fragment } from "react";
import dynamic from "next/dynamic";
const RichText = dynamic(() => import("@/components/RichText"));
import { TitleContentArrayType } from "@/lib/sanity/types/page";


const TitleContentArraySection: React.FC<TitleContentArrayType> = (block) => {
  const { text_section } = block || {};

  return (
    <Fragment>
      <div className="pt-[25em] sm:pt-[28em] lg:pt-[29em] 2xl:pt-[30em] pb-10 sm:pb-20">
        <div className="container">
          {text_section?.map((item, index) => {
            const { content, title } = item || {};
            return (
              <div
                key={index}
                className="[&>ul>li]:mb-4 [&>ul>li]:text-base leading-[28px] font-normal"
              >
                <h4 className="privacy-heading">{title}</h4>
                {content && <RichText block={content} />}
              </div>
            );
          })}
        </div>
      </div>
    </Fragment>
  );
};

export default TitleContentArraySection;
