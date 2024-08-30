import React, { Fragment, useState } from "react";
import clsx from "clsx";

import Frameworkalldata from "./Frameworkalldata";
import TitleSubtitle from "../TitleSubtitle";
import {
  AllFrameworkTypes,
  FrameworkType,
  TechStackSectionType,
} from "@/lib/sanity/types/page";

const TechStackSection: React.FC<TechStackSectionType> = ({
  title_subtitle,
  frameworkTypes,
}) => {
  const [sortedDetails, setSortedDetails] = useState<{
    frameworkName: string;
    frameworks?: Pick<AllFrameworkTypes, "_type" | "image" | "name">[];
  }>({
    frameworkName: frameworkTypes?.[0].name,
    frameworks: frameworkTypes?.[0].frameworks,
  });
  const handleClick = (data?: FrameworkType) => {
    setSortedDetails({
      frameworkName: data?.name,
      frameworks: data?.frameworks,
    });
  };
  return (
    <Fragment>
      <div className="pt-4 em:pt-8 sm:pt-24 pb-4 em:pb-8 sm:pb-12">
        <div className="container">
          {title_subtitle && <TitleSubtitle block={title_subtitle} />}
          <div className="  block em:inline-block my-4 em:my-8 text-center mx-auto">
            <ul className="flex flex-col em:flex-row items-center ml-0 em:ml-2">
              {frameworkTypes &&
                frameworkTypes?.map((i, index) => {
                  return (
                    <li
                      key={index}
                      className={clsx(
                        "mr-0 em:mr-8 text-sm em:text-base sm:text-lg font-medium text-dark-pink opacity-50 pt-[0.7em] em:pt-0 cursor-pointer hover:opacity-100 font-DM border-b-[0.125em] border-[transparent] ",
                        sortedDetails.frameworkName === i?.name &&
                        "!border-dark-blue !opacity-[1]"
                      )}
                      onClick={() => handleClick(i)}
                    >
                      {i?.name}
                    </li>
                  );
                })}
            </ul>
          </div>
          <div>
            <ul className="grid grid-cols-[1fr_1fr] esm:grid-cols-[1fr_1fr_1fr] em:grid-cols-[1fr_1fr_1fr] sm:grid-cols-[1fr_1fr_1fr_1fr_1fr] md:grid-cols-[1fr_1fr_1fr_1fr_1fr_1fr] lg:grid-cols-[1fr_1fr_1fr_1fr_1fr_1fr_1fr_1fr] gap-x-4 xlg:gap-x-7 gap-y-4 em:gap-y-8  md:gap-y-8">
              {sortedDetails.frameworks &&
                sortedDetails.frameworks.map((item, index) => {
                  return (
                    <li
                      key={index}
                      className="[&>div>div]:flex [&>div>div]:justify-center [&>div>div]:items-center [&>div>div]:mx-auto [&>div>div]:w-24 xlg:[&>div>div]:w-28 [&>div>div]:h-28 [&>div>div]:p-2 [&>div>div]:text-center "
                    >
                      <Frameworkalldata block={item} key={index} />
                    </li>
                  );
                })}
            </ul>
          </div>
        </div>
        <div />
      </div>
    </Fragment>
  );
};

export default TechStackSection;
