import BookConsultationSection from "@/components/BookConsultationSection";
import PlancontactSection from "@/components/PlanContactSection";
import PlanSecondSection from "@/components/PlanSecondSection";
import React, { useState } from "react";
import Layout from "@/layouts/Layout";

import ReviewPlanSummary from "@/components/ReviewSummary";
import { PricingSectionType } from "@/lib/sanity/types/page";
// import PageStepCounter from "@/components/PlanContactSection/PageStepCounterSection";

export interface pricingViewProps {
  preview?: boolean;
  loading?: boolean;
  price?: PricingSectionType;
  slug? : string
}

export default function PricingView(props: pricingViewProps) {
  const { preview, loading, price, slug } = props;

  const [curStep, setCurStep] = useState(0);
  const [priceValue, setPriceValue] = useState(0);
  const planPriceblock = (val) => {
    setPriceValue(val);
  };
  return (
    <Layout
      seo={price?.seo}
      preview={preview}
      loading={loading}
      header={price?.header}
      footer={price?.footer}
      slug={slug}
    >
      <div className="">
        {curStep == 0 && <PlancontactSection setCurStep={setCurStep} />}
        {/* {curStep == 1 && (
          <PlanSecondSection
            block={price}
            setCurStep={setCurStep}
            planPriceblock={planPriceblock}
            curStep={curStep}
          />
        )} */}
        {curStep == 2 && (
          <ReviewPlanSummary
            setCurStep={setCurStep}
            block={price}
            priceValue={priceValue}
            curStep={curStep}
          />
        )}
        {curStep === 0 || curStep === 1
          ? price?.section?.map((item: any, index) => (
              <div key={index}>
                {index === 0 ? (
                  <BookConsultationSection
                    content={item?.content}
                    staff={item?.staff}
                    section_image={item?.section_image}
                    variant={item?.variant}
                    _type={"book_consultation"}
                  />
                ) : (
                  ""
                )}
              </div>
            ))
          : null}
      </div>
    </Layout>
  );
}
