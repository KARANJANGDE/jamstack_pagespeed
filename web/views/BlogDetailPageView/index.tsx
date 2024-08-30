import BlogDetailPage from "@/components/BlogDetailPage";
import Layout from "@/layouts/Layout";
import { useModals } from "@/lib/hooks/useModals";
import { BlogDetailPageType } from "@/lib/sanity/types/blog";
import { ArticleJsonLd } from "next-seo";

export interface BlogDetailPageViewProps {
  preview?: boolean;
  loading?: boolean;
  page: BlogDetailPageType;
  slug?: string;
}

export default function BlogDetailPageView(props: BlogDetailPageViewProps) {
  const { preview, loading, page, slug } = props;
  const { readblog } = page || {};
  const { setBlog } = useModals();
  if (readblog) {
    setBlog(readblog);
  }
  return (
    <Layout
      seo={page?.seo}
      preview={preview}
      loading={loading}
      header={page?.header}
      footer={page?.footer}
      slug={`/blog/${slug}`}
    >
      <ArticleJsonLd
        type="BlogPosting"
        publisherName={page.author?.author_Name || ""}
        publisherLogo={page.author?.author_Image?.image?.asset?.url || ""}
        title={page.banner_title || ""}
        url={slug || ""}
        images={[page.hero_image.image?.asset?.url || ""]}
        authorName={{
          name: page.author?.author_Name || "",
          url: page.author?.author_Image?.image?.asset?.url || "",
        }}
        description={page.banner_desc || ""}
        datePublished={new Date(page.publish_date || "").toISOString()}
        dateModified={new Date(page.publish_date || "").toISOString()}
      />
      <BlogDetailPage block={page} />
    </Layout>
  );
}
