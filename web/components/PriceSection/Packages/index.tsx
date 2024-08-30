import clsx from "clsx";
import React from "react";

import dynamic from "next/dynamic";
import { PlanType } from "@/lib/sanity/types/page";
const Link = dynamic(() => import("../../Link"));
const PackageDetail = dynamic(() => import("../PackageDetail"));

const Packages: React.FC<{ plan: PlanType }> = ({ plan }) => {
  return (
    <div className="price-col-details">
      {plan?.packages?.map((i, index) => {
        return (
          <div key={index}>
            {i?.popularity && (
              <div className="price-tab popular">Most Popular</div>
            )}
            {!i?.popularity && (
              <div className="price-tab common">{i?.package_title}</div>
            )}
            <div
              key={index}
              className={clsx(
                { "price-col-bg common": !i?.popularity },
                { "price-col-bg premium": i?.popularity }
              )}
            >
              {i?.popularity && (
                <div className="price-tab"> {i?.package_title} </div>
              )}
              <div className="price-tab">
                {i?.package_price_postfix?.replace(
                  "{price}",
                  i.package_price_value ?? "0"
                )}
              </div>
              <div className="price-tab">{i?.package_duration}</div>
              <div>
                {i?.package_details?.map((item, index) => {
                  return item && <PackageDetail item={item} key={index} />;
                })}
              </div>
            </div>
            <div className="choose-plan-link font-DM">
              <Link to="/pricing/">Choose Plan</Link>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Packages;
