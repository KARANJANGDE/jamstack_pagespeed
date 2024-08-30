import clsx from "clsx";
import React, { useState } from "react";
import dynamic from "next/dynamic";
const Link = dynamic(() => import("../Link"));
const PriceTable = dynamic(() => import("../PriceTable"));
import { PlanType, PriceSectionType } from "@/lib/sanity/types/page";

const PriceSection: React.FC<PriceSectionType> = ({
  title_subtitle,
  pricing_section,
  section_theme,
}) => {
  const { plans, plan_navigation, plan_discuss } = pricing_section || {};
  const [planDuration, setPlanDuration] = useState(
    plans ? plans[plans.length - 1]?.plan_name : ""
  );
  const filterItems = (plan: PlanType) => {
    if (planDuration != "") {
      const isPlanDuration =
        plan?.plan_name?.toString()?.toLowerCase() ===
        planDuration?.toString()?.toLowerCase();
      return isPlanDuration;
    }
    return false;
  };
  return (
    <div
      className={clsx(
        "pricetable-section px-0 py-8",
        section_theme ?? "bg-white"
      )}
      id="pricing"
    >
      <div className="container">
        <div className="pricetabel-container mt-[2.125em]">
          <div className="pricetable-header">
            <div className="max-w-[50.5625em]  mb-16 emd:mb-24">
              {title_subtitle && (
                <div className="max-w-[850px] mt-0 ml-auto em:ml-0 mr-auto text-center em:text-left mb-[30px] md:mb-[50px] ">
                  <p className="after:absolute after:bg-light-blue after:w-[1em] md:after:w-[1.5em] after:h-[0.125em] after:right-[0.5em] after:top-[0.5em] before:absolute before:bg-light-blue before:w-[1em] md:before:w-[1.5em] before:h-[0.125em] before:left-[0.5em] before:top-[0.5em] font-medium leading-[1.25em] uppercase text-light-blue  tracking-wider relative inline-block mb-4 px-8 md:px-[3em] py-0 text-[14.175px] sm:text-[15.75px] xl:text-[18px] font-DM">
                    {title_subtitle?.title}
                  </p>
                  <h2 className="font-medium leading-[1.25em] text-[20px] lg:text-[24px] xl:text-[28px] font-DM text-title-blue-shade">
                  {title_subtitle?.sub_title}
                    {title_subtitle?.caption && (
                      <p
                        className={clsx(
                          `text-base sm:text-lg xl:text-xl font-semibold text-Cerise-red inline-block p-0 font-DM`
                        )}
                      >
                        {title_subtitle?.caption}
                      </p>
                    )}
                  </h2>
                </div>
              )}
            </div>
            <div className=" flex justify-center items-center rounded-[0.5em] mt-0 font-DM">
              <ul className=" flex justify-between flex-col sm:flex-row items-center [&>*:nth-child(2)]:my-[3em] sm:[&>*:nth-child(2)]:my-0">
                {plans?.map((i, index) => (
                  <li
                    key={index}
                    className={clsx(
                      "relative my-0 ",
                      planDuration === i?.plan_name
                        ? "active  [&>p]:bg-dark-pink"
                        : ""
                    )}
                  >
                    <p
                      onClick={() => setPlanDuration(String(i?.plan_name))}
                      className="bg-dark-blue text-white-color text-[1.125em] tracking-[0.833333px] cursor-pointer min-w-[11em] text-center mx-[0.625em] my-0 px-3 py-2"
                    >
                      {i?.plan_name}
                    </p>
                    {i?.discount && (
                      <span className="flex justify-center absolute w-[7em] top-[-2em] bg-light-blue text-white-color text-[0.75em] leading-[1em] font-semibold mx-auto my-0 px-0 py-[0.5em] inset-x-0">
                        {i.discount}
                      </span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {plans &&
            plans
              ?.filter((item) => filterItems(item || {}))
              ?.map((item, index) => {
                return (
                  <div className="pricetable-content" key={index}>
                    {item && <PriceTable block={item} />}
                    {item && (
                      <PriceTable
                        block={item}
                        key={index}
                        minified
                        className="price-table-minified block emd:hidden"
                      />
                    )}
                  </div>
                );
              })}
          <div className="flex lg:grid grid-cols-[1fr_2.05fr] gap-x-0 pr-0 emd:pr-[2.5em] justify-center">
            <div />
            <div className="flex flex-col lg:flex-row justify-between items-center p-4 emd:p-[2.125em] border-[0.125em] border-solid border-[rgba(218,54,84,0.6)] bg-table-footer-gradient  w-full md:w-[64%] lg:w-full  mr-0 lg:mr-0 xl:mr-auto ml-0 xl:ml-auto">
              <h1 className="w-full em:w-[70%] font-medium leading-[20px] em:leading-[26px] text-dark-pink mb-4 lg:mb-0 text-center text-[14px] em:text-[16px] xl:text-[22px] font-Mont">
                {plan_navigation}
              </h1>
              <button className="font-Montserrat p-0">
                <Link
                  to={plan_discuss?.link || ""}
                  className="text-white-color bg-Cerise-red text-[12.25px] xl:text-[14px] font-semibold leading-[22px] inline-block ml-0 px-[1.5625em] py-[0.935em] rounded-[0.8em] hover:bg-dark-blue hover:text-white-color font-Inter"
                >
                  {" "}
                  {plan_discuss?.label}{" "}
                </Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PriceSection;
