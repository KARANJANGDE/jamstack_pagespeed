import Section from "@/components/common/Section";
import Layout from "@/layouts/Layout";
import { CaseStudy } from "@/lib/sanity/types/caseStudy";

export interface CaseStudyDetailPageViewProps {
  preview?: boolean;
  loading?: boolean;
  page: CaseStudy;
  slug? : string
}

export default function CaseStudyDetailPageView(props: CaseStudyDetailPageViewProps) {
  const { preview, loading, page, slug } = props;
  return (
    <Layout
      seo={page?.seo}
      preview={preview}
      loading={loading}
      header={page?.header}
      footer={page?.footer}
      slug={`/case-studies/${slug}`}
    >
      {page?.section &&
        page?.section?.map((item, index) => {
          return <Section data={item} key={index} />;
        })}
    </Layout>
  );
}
