import Section from "@/components/common/Section";
import Layout from "@/layouts/Layout";
import { CaseStudyListing } from "@/lib/sanity/types/caseStudy";

export interface CaseStudyListingViewProps {
  preview?: boolean;
  loading?: boolean;
  page: CaseStudyListing;
  slug? : string
}

export default function CaseStudyListingView(props: CaseStudyListingViewProps) {
  const { preview, loading, page, slug } = props;
  return (
    <Layout
      seo={page?.seo}
      preview={preview}
      loading={loading}
      header={page?.header}
      footer={page?.footer}
      slug={slug}
    >
      {page?.section &&
        page?.section?.map((item, index) => {
          return <Section data={item} key={index} />;
        })}
    </Layout>
  );
}
