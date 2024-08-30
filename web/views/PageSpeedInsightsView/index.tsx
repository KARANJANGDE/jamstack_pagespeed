
import React from "react";
import Layout from "@/layouts/Layout";

import { PricingSectionType } from "@/lib/sanity/types/page";

export interface pricingViewProps {
    preview?: boolean;
    loading?: boolean;
    price?: PricingSectionType;
    slug? : string
}

export default function PageSpeedInsightsView(props: pricingViewProps) {
    const { preview, loading, price, slug } = props;

    return (
        <Layout
            seo={price?.seo}
            preview={preview}
            loading={loading}
            header={price?.header}
            footer={price?.footer}
            slug={slug}
        >
            <div>
                {/* <PageSpeedInsightsSection /> */}
            </div>
        </Layout >
    );

}



