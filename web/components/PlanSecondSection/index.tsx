//@ts-ignore
//@ts-nocheck
import clsx from "clsx";
import { useState } from "react";
import PackageSummaryCard from "./packageSummaryCard";
const PlanSecondSection: React.FC<{
  block?: any;
  setCurStep?: any;
}> = ({ setCurStep, block }) => {
  const { plans, plan_coupon_code } = block || {};
  const { coupon_label, coupon_title, coupon_placeholder } =
    plan_coupon_code || {};
  const [activePlan, setActivePlan] = useState(plans ? plans[0].plan_name : "");

  return (
    <>
      <div className="plansecond-section">
        <div className="container">
          <div className="plansecond-inner">
            <h4>
              {`You're just 3 Steps away from unlocking your Agency growth and
              increasing your bandwidth.`}
            </h4>
            <div className="plan-modify-section">
              <h6>Choose or Modify your plan</h6>
              <ul>
                {plans?.map((i, index) => {
                  return (
                    <div className="price-tab-nav" key={index}>
                      <li>
                        <p
                          onClick={() => setActivePlan(String(i?.plan_name))}
                          className={clsx(
                            activePlan === i.plan_name ? "active" : ""
                          )}
                        >
                          {i.plan_name}
                        </p>
                      </li>
                    </div>
                  );
                })}
              </ul>
              <div>
                <ul>
                  {plans?.map((i, index, pricing_package) => {
                    return (
                      <li
                        className={clsx(
                          activePlan === i.plan_name ? "active" : ""
                        )}
                        key={index}
                      >
                        <div className="price-tab-content">
                          <ul>
                            <PackageSummaryCard block={i} />
                            <PackageSummaryCard
                              block={i}
                              key={index}
                              minified
                              className="price-table-minified"
                            />
                          </ul>
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </div>

              <div className="price-tab-content" />
              <div className="price-amount-info">
                <div className="final-amount">
                  <div className="final-amount-price">
                    <h6>Final Amount:</h6>
                    <h4>$599</h4>
                  </div>
                </div>
                <div className="coupon-info">
                  <h6>{coupon_title}</h6>
                  <div className="coupon-input">
                    <input
                      type="text"
                      placeholder={coupon_placeholder ?? "Enter Coupon Code"}
                    />
                    <button>{coupon_label}</button>
                  </div>
                </div>
              </div>
              <div className="price-final-btn">
                <button>Continue</button>
                <button
                  className="inverted-btn"
                  onClick={() => {
                    setCurStep(0);
                  }}
                >
                  Go Back
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default PlanSecondSection;
