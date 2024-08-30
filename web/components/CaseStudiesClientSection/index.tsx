import React, { Fragment } from "react";
import clsx from "clsx";

import CaseStudiesImageDescription from "../CaseStudiesImageDescription";
import TitleSubtitle from "../TitleSubtitle";
import { CaseStudiesClientSectionType } from "@/lib/sanity/types/page";

const CaseStudiesClientSection: React.FC<CaseStudiesClientSectionType> = (
  props
) => {
  const { title_subtitle, section_theme, caseStudies } = props || {};
 

  return (
    <Fragment>
      <div
        className={clsx(
          "pt-8 sm:pt-16 pb-16 sm:pb-28",
          section_theme ?? "bg-white"
        )}
      >
        <div className="container">
          {title_subtitle && <TitleSubtitle block={title_subtitle} />}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 em:gap-y-12 md:gap-y-0 gap-x-12 2xl:gap-x-20 mt-4 sm:mt-12">
            {caseStudies &&
              caseStudies?.map((i, index) => (
                <CaseStudiesImageDescription block={i} key={index} />
              ))}
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default CaseStudiesClientSection;
