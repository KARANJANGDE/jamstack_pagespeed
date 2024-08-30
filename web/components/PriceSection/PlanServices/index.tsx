import { PlanServicesTemplate } from "@/lib/sanity/types/page";
import React, { Fragment } from "react";

const PlanServices: React.FC<{ block: PlanServicesTemplate }> = ({ block }) => {
  return (
    <Fragment>
      <div className="price-col-header">
        {block?.plan_services?.map((i, index) => {
          return (
            <ul
              key={index}
              className={`${i?.trim() == "" ? "price-tab empty" : "price-tab"}`}
            >
              {i}
            </ul>
          );
        })}
      </div>
    </Fragment>
  );
};

export default PlanServices;
