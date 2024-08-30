import clsx from "clsx";
import React, { useState } from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemButton,
  AccordionItemHeading,
  AccordionItemPanel,
} from "react-accessible-accordion";

import dynamic from "next/dynamic";
import { PlanType } from "@/lib/sanity/types/page";
import { routes } from "@/lib/routes";
import locales from "@/lib/locales";
const Link = dynamic(() => import("../Link"));
const PackageDetail = dynamic(() => import("../PriceSection/PackageDetail"));
const PackageSummaryCard = dynamic(
  () => import("../PlanSecondSection/packageSummaryCard")
);

const PriceTable: React.FC<{
  block: PlanType;
  minified?: boolean;
  className?: string;
}> = ({ block, minified = false, className = "" }) => {
  const [activeIndexs, setActiveIndexes] = useState<(number | string)[]>(["0"]);
  return minified ? (
    <Accordion
      allowZeroExpanded
      preExpanded={["0"]}
      className="block lg:hidden max-w-full em:max-w-[90%] sm:max-w-[80%] my-8 mx-auto"
      onChange={(e) => setActiveIndexes(e)}
    >
      {block?.packages?.map((pricing_package, idx) => (
        <AccordionItem
          key={idx}
          uuid={String(idx)}
          className={clsx(
            pricing_package?.popularity
              ? "mt-12 mb-4 bg-comparision-inner-gradient "
              : "" && activeIndexs?.includes(String(idx))
              ? ""
              : "mb-4",
            activeIndexs?.includes(String(idx))
              ? "border-[0.0625em] border-dark-pink"
              : ""
          )}
        >
          <AccordionItemHeading
            className={clsx(
              "mb-4 bg-black-[#0000]  relative",
              activeIndexs?.includes(String(idx)) ? "" : ""
            )}
          >
            <AccordionItemButton
              className={clsx(
                "relative border-dark-pink border-[1px] flex justify-between py-4 px-4 em:px-8 items-center",
                activeIndexs?.includes(String(idx))
                  ? "border-b-[0.0625em] border-gallery-color"
                  : ""
              )}
            >
              {pricing_package?.popularity && (
                <span className="absolute top-[-2.1em] left-[-0.1em] bg-dark-pink py-[0.3em] px-6 text-white-color text-[0.875em] font-normal">
                  {locales.en.MOST_POPULAR}
                </span>
              )}
              <div className="responsive-left-header font-DM ">
                <span className="text-[13.7812px] em:text-[16.8438px] font-medium">
                  {pricing_package?.package_title}
                </span>
              </div>
              <div
                className={clsx(
                  "font-DM mr-16 relative",
                  activeIndexs?.includes(String(idx)) ? "active" : ""
                )}
              >
                <div className="flex">
                  <div className="text-[16px] em:text-[19.9062px] sm:text-[22.75px]">
                    {pricing_package?.package_price_currency}
                  </div>
                  <span className="text-[16px] em:text-[19.9062px] sm:text-[22.75px]">
                    {pricing_package?.package_price_value ?? "0"}
                  </span>
                  <span className="before-duration text-[1.2em] em:text-[1.625em]">
                    &#47;
                  </span>
                  <div className="time-duration text-sx sm:text-base pt-0 em:pt-1">
                    {pricing_package?.package_price_postfix}
                  </div>
                </div>
                <div
                  className={clsx(
                    "accordion-opener after:content-[''] after:bg-[url(/table-drop-arrow.png)] after:bg-tableArrowBg after:bg-no-repeat after:w-[1.25em] after:h-[1.25em] after:absolute after:right-[-4em] after:top-[0.7em] after:transition after:ease-in-out after:duration-300 ",
                    activeIndexs?.includes(String(idx))
                      ? "after:content-[''] transition ease-in-out duration-300  after:transform after:rotate-180 after:top-[0.1em]"
                      : ""
                  )}
                ></div>
              </div>
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel className="py-4 px-8">
            <PackageSummaryCard
              block={block}
              pricing_package={pricing_package || {}}
            />
            <div className="choose-plan-link font-DM mt-8">
              <Link
                to={routes.pricing()}
                className="bg-dark-blue hover:bg-dark-pink text-white-color text-[13.7812px] font-medium rounded py-2 px-6 inline-block hover:text-white-color"
              >
                {locales.en.CHOOSE_PLAN}
              </Link>
            </div>
          </AccordionItemPanel>
        </AccordionItem>
      ))}
    </Accordion>
  ) : (
    <table
      id="test"
      className={clsx(
        className,
        "border-separate pricetable-content-table border-spacing-x-[2.5em] w-full mt-[5em] mb-[5.125em] mx-0 font-DM hidden lg:block"
      )}
      cellSpacing="10"
    >
      <colgroup>
        <col />
        {block?.packages?.map((i, index) => (
          <col
            className={clsx(
              i?.popularity ? "bg-last-column-gradient w-[13em]" : ""
            )}
            key={index}
          />
        ))}
      </colgroup>
      <thead>
        <tr>
          <th className="!border-0"></th>
          {block?.packages?.map((i, index) =>
            i?.popularity === true ? (
              <th
                className=" popular text-center !bg-dark-pink !text-white-color !text-base font-medium uppercase !p-2"
                key={index}
              >
                {locales.en.MOST_POPULAR}
              </th>
            ) : (
              <th key={index} />
            )
          )}
        </tr>
        <tr className="[&>*:first-child]:border-t-0  [&>td]:text-center [&>td]:bg-white [&>td]:text-dark-blue [&>td]:text-[1em] [&>td]:font-medium [&>td]:w-[10em] [&>td]:p-2 [&>td]:border-[0.0625em] [&>td]:border-solid [&>td]:border-dark-pink ">
          <th className="!border-0"></th>
          {block?.packages?.map((i, index) => (
            <th
              className={clsx(
                " bg-white text-dark-blue !text-base font-medium w-[10em] !p-[8px] border-[0.0625em] border-solid !border-dark-pink",
                i?.popularity
                  ? "!border-t-[0] !border-b-[transparent] border-[0.0625em] border-solid border-dark-pink !font-bold"
                  : ""
              )}
              key={index}
            >
              {i?.package_title}
            </th>
          ))}
        </tr>
      </thead>
      <tbody
        className="
       [&>tr>td]:relative [&>tr>td]:text-[1.125em] [&>tr>td]:leading-[1.5em] [&>tr>td]:font-medium [&>tr>td]:text-center [&>tr>td]:text-dark-blue [&>tr>td]:m-2 [&>tr>td]:px-[0.5em] [&>tr>td]:py-[1em] [&>tr>td]:border-b-[0.0625em] [&>tr>td]:border-b-[#ebf8ff] [&>tr>td]:border-solid
      "
      >
        <tr className="z-0 relative">
          <td className="!border-0"></td>
          {block?.packages?.map((i, index) => (
            <td
              className={clsx(
                " relative text-[1.125em]",
                i?.popularity
                  ? "active border-t-0 !border-b-[rgba(255,203,212,0.3)] border-[0.0625em] border-solid border-dark-pink "
                  : ""
              )}
              key={index}
            >
              <div className={clsx('price-tag font-bold flex justify-center h-[3.8em] py-4 px-0',
                    i?.popularity ? "text-dark-blue" : "text-dark-pink"
              )}>
                <div className="self-start mt-[-0.5em] text-[1.1em] flex">
                  {i?.package_price_currency}
                </div>
                <span className="text-[2em]">
                  {i?.package_price_value ?? "0"}
                </span>
                <div className="self-end text-base flex">
                  {" "}
                  <span className="before-duration">&#47;</span>
                  {i?.package_price_postfix}
                </div>
              </div>
              <div className="total-bill">
                <p className={clsx('text-sm font-light  p-0',
                    i?.popularity ? "text-dark-pink " : "text-menu-title-text"
                )}>
                  {i?.package_total_price}
                </p>
              </div>
              <div className="price-savings">
                <p
                  className={clsx(
                    "text-sm font-light  p-0 ",
                    i?.popularity ? "text-dark-pink" : "text-menu-title-text"
                  )}
                >
                  {i?.package_price_summary}
                </p>
              </div>
            </td>
          ))}
        </tr>
        {block.plan_services_template?.plan_services?.map((service, index) => (
          <tr key={index}>
            <th className="py-4 !text-left bg-white text-dark-blue  !text-[17.5px] xl:!text-xl w-[15em] !border-0">
              {service}
            </th>
            {block?.packages?.map((i, idx) =>
              index > 0 ? (
                i?.package_details && i.package_details[index - 1] ? (
                  <td
                    key={idx}
                    className={
                      i.popularity
                        ? "border-t-0 !border-b-[rgba(255,203,212,0.3)] border-[0.0625em] border-solid border-dark-pink"
                        : ""
                    }
                  >
                    <PackageDetail item={i?.package_details[index - 1] || {}} />
                  </td>
                ) : (
                  <td
                    className={
                      i?.popularity
                        ? "border-t-0 !border-b-[rgba(255,203,212,0.3)] border-[0.0625em] border-solid border-dark-pink"
                        : ""
                    }
                  ></td>
                )
              ) : (
                <td
                  key={idx}
                  className={
                    i?.popularity
                      ? "border-t-0 !border-b-[rgba(255,203,212,0.3)] border-[0.0625em] border-solid border-dark-pink"
                      : ""
                  }
                >
                  {i?.package_duration}
                </td>
              )
            )}
          </tr>
        ))}
        <tr>
          <td className="!border-0"></td>
          {block?.packages?.map((i, index) => (
            <td
              className={clsx(
                " bg-dark-blue cursor-pointer  !px-2 !py-[0.4em] z-0 transition ease-in-out duration-300",
                i?.popularity ? "bg-dark-pink hover:bg-dark-blue" : "hover:bg-dark-pink"
              )}
              key={index}
            >
              <Link
                to={routes.pricing()}
                className="block text-white text-center text-base xl:text-lg text-white-color font-medium p-1 hover:text-white-color"
              >
                {locales.en.CHOOSE_PLAN}
              </Link>
            </td>
          ))}
        </tr>
      </tbody>
    </table>
  );
};

export default PriceTable;
