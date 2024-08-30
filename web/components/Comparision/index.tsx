import clsx from "clsx";
import FrameworkCell from "../Framework-cell";
import SummaryCompare from "../FrameworkContent";
import ComparisionOverview from "./ComparisionOverview";
import FrameworkTitleCard from "./FrameworkTitleCard";

import React from "react";
import { Framework } from "@/lib/sanity/types/framework";
import { ComparisionDetailPageType } from "@/lib/sanity/types";
import SidebarSection from "../Section";
import Frameworks from "../Frameworks";

const Comparision: React.FC<{
  block: {
    framework_1: Framework;
    page: ComparisionDetailPageType;
    framework_2: Framework;
  };
}> = ({ block }) => {
  const { framework_1, framework_2, page } = block || {};
  const { sidebar } = page || {};
  const fields_1 = framework_1?.type?.template?.fields || [];
  const fields_2 = framework_2?.type?.template?.fields || [];
  return (
    <div className="">
      <div className=" bg-comparision-inner-gradient pt-40 sm:pt-48 md:pt-60 pb-8 em:pb-16 sm:pb-24">
        <div className="container">
          <div className="">
            {block && <FrameworkTitleCard block={block} />}
          </div>
        </div>
      </div>
      <div className="container">
        <div className="comparison-inner-table w-full py-6 em:py-12">
          <div className="comparison-summary py-0 sm:py-6 md:py-12">
            <SummaryCompare block={framework_1} />
            <SummaryCompare block={framework_2} />
          </div>

          <div className=" grid grid-cols-[1fr] lg:grid-cols-[2.5fr_1fr] gap-x-12 mb-20 sm:mb-32">
            <div className="bg-white-shad-color border-[0.0625em] border-dark-pink py-14 px-6 h-fit rounded-lg">
              <ComparisionOverview
                block={{ frameworks: [framework_1, framework_2] }}
              />
            </div>
            <div className="flex flex-col justify-center mt-12 lg:mt-0">
              {Array.isArray(sidebar) &&
                sidebar.map((i, index) => (
                  <SidebarSection block={i} key={index} />
                ))}
            </div>
          </div>

          <div className=" mb-20 overflow-x-auto">
            <table className="grid">
              <thead>
                <tr className="grid grid-cols-[1fr_1fr_1fr] bg-dark-blue rounded-t-lg py-7 px-8 w-full">
                  <th className="text-base text-white-color text-left font-normal min-w-[17em]">
                    {" "}
                    FrameWork{" "}
                  </th>
                  <th className="text-lg text-white-color font-bold text-center min-w-[17em]">
                    {" "}
                    {framework_1?.name}
                  </th>
                  <th className="text-lg text-white-color font-bold text-center min-w-[17em]">
                    {" "}
                    {framework_2?.name}
                  </th>
                </tr>
              </thead>
              <tbody className="bg-comparision-table mt-[2px] [&>tr]:grid [&>tr]:items-center [&>tr]:grid-cols-[1fr_1fr_1fr] [&>tr]:py-6 [&>tr]:px-8">
                {fields_1
                  ?.concat(
                    fields_2?.filter(
                      (i) => !fields_1.find((j) => j?.name == i?.name)
                    ) || []
                  )
                  .map((i, index) => (
                    <tr
                      key={index}
                      className={clsx({
                        "!py-[0.15em] px-8 bg-white-color grid grid-cols-[1fr_1fr_1fr] items-center":
                          fields_1.find((j) => j?.name === i?.name)
                            ?.isDivider ||
                          fields_2?.find((j) => j?.name === i?.name)?.isDivider,
                      })}
                    >
                      <td className="text-left max-w-full text-white-color font-normal w-[17em]">
                        {fields_1.find((j) => j?.name === i?.name)?.isDivider ||
                        fields_2?.find((j) => j?.name === i?.name)?.isDivider
                          ? null
                          : i?.name}
                      </td>
                      <td className="text-center text-white-color text-base max-w-[70%] mx-auto w-[17em] [&>a]:text-white-color [&>svg]:mx-auto [&>div>svg]:mx-auto [&>div>p]:text-white-color [&>div>p]:text-sm [&>div]:text-sm [&>a]:underline [&>a]:underline-offset-2 hover:[&>a]:opacity-80">
                        <FrameworkCell
                          block={fields_1.find((j) => j?.name === i?.name)!}
                        />
                      </td>
                      <td className="text-center text-white-color text-base max-w-[70%] mx-auto w-[17em] [&>a]:text-white-color [&>svg]:mx-auto [&>div>svg]:mx-auto [&>div>p]:text-white-color [&>div>p]:text-sm [&>div]:text-sm [&>a]:underline [&>a]:underline-offset-2 hover:[&>a]:opacity-80">
                        <FrameworkCell
                          block={fields_2?.find((j) => j?.name === i?.name)!}
                        />
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
          <Frameworks
            isshow={false}
            block={{
              _type: "compare_frameworks_section",
              content: framework_1?.type?.type?.content,
              frameworks: framework_1?.frameworks,
              type: framework_1?.type?.type,
              title_subtitle: {
                title: framework_1?.type?.type?.name,
              },
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Comparision;
