import Section from "@/components/common/Section";
import Layout from "@/layouts/Layout";
import { Page } from "@/lib/sanity/types/page";


export interface PageViewProps {
  preview?: boolean;
  loading?: boolean;
  page: Page;
  slug?: string;
}

export default function PageView(props: PageViewProps) {
  const { preview, loading, page, slug } = props;
  return (
    <Layout
      seo={page.seo}
      preview={preview}
      loading={loading}
      header={page?.header}
      footer={page?.footer}
      slug={slug}
    >
      {page?.section &&
        page?.section?.map((item, index) => {
          return (
              <Section data={item} key={index}  />
          );
        })}
    </Layout>
  );
}
