import React from "react";
import { TitleContent } from "@/lib/sanity/types/page";
import dynamic from "next/dynamic";
import { slugify } from "@/lib/utils/slugify";
const RichText = dynamic(() => import("@/components/RichText"));

const TitleContent: React.FC<{
  block: TitleContent;
}> = ({ block }) => {
  const { content, title } = block || {};
  return (
    <div id={slugify(title as string)}>
      <h4>{title}</h4>
      {content && <RichText isClickable={true} block={content} />}
    </div>
  );
};

export default TitleContent;
