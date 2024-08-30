import clsx from "clsx";
import CaseStudyBestWorkCard from "./CaseStudyBestWorkCard";
import React from "react";
import TitleSubtitle from "../TitleSubtitle";
import { CasestudyBestworkSectionFields } from "@/lib/sanity/types/page";

const CaseStudyBestWorkSection: React.FC<CasestudyBestworkSectionFields> = (
  props
) => {
  const { title_subtitle, section_theme, caseStudies } = props || {};
  return (
    <div
      className={clsx(
        "pt-10 sm:pt-[5.5em] pb-2",
        section_theme ?? "bg-white"
      )}
    >
      <div className="container">
        {title_subtitle && <TitleSubtitle block={title_subtitle} />}
        <ul className="block my-[3em] lg:my-[5em] xl:my-[6.25em] [&>*:nth-child(2)>div]:flex-col md:[&>*:nth-child(2)>div]:flex-row  !mb-0 ">
          {caseStudies &&
            caseStudies?.map((item, index) => {
              return <CaseStudyBestWorkCard item={item} key={index} />;
            })}
        </ul>
      </div>
    </div>
  );
};
export default CaseStudyBestWorkSection;
