import React from "react";
import { GetStaticProps, NextPage } from "next";
import { SharedPageProps } from "@/lib/sanity/types";
import PreviewBlogListingView from "@/views/PreviewBlogListingView";
import { fetchDataFromSanity, readToken } from "@/lib/sanity";
import { filterSanityDataToSingleItem } from "@/lib/sanity/utils/filterSanityDataToSingleItem";
import { blogListingPageQuery } from "@/lib/sanity/queries/blogListingPageQuery";
import { BlogListing } from "@/lib/sanity/types/blog";
import BlogListingView from "@/views/BlogListingView";
import { replace } from "@/lib/replace";
import { REVALIDATE_DURATION } from "@/lib/constants";

export interface PageProps extends SharedPageProps {
  page: BlogListing;
}
const BlogListingPage: NextPage<PageProps> = ({ page, draftMode }) => {
  if (draftMode) {
    return <PreviewBlogListingView page={page} preview={draftMode} slug="/blog"/>;
  }
  return <BlogListingView page={page} slug="/blog" />;
};
export default BlogListingPage;
export const getStaticProps: GetStaticProps<PageProps> = async ({
  draftMode = false,
}) => {
  const pageData = await fetchDataFromSanity<BlogListing[]>({
    query: blogListingPageQuery.query,
  });

  const page = filterSanityDataToSingleItem({
    data: pageData,
    isPreview: draftMode,
  });
  if (!page) {
    return {
      notFound: true,
    };
  }
  const { seo } = page || {};
  const {
    meta_description,
    meta_image,
    meta_tags,
    meta_title,
    openGraph,
    twitter,
  } = seo || {};
  const replace_args = {
    "{categories}": "Jamstack - NextJS, GatsbyJs, HeadlessCMS, Strapi, Sanity Technical Guide.",
  };
  const seoAugmentedData: BlogListing = {
    ...page,
    seo: seo
      ? {
          _type: "seo",
          meta_description: meta_description,
          meta_title: replace(meta_title ?? "", replace_args),
          meta_image: meta_image,
          meta_tags: meta_tags,
          openGraph: openGraph,
          twitter: twitter,
        }
      : null,
  };
  return {
    props: {
      page: seoAugmentedData,
      draftMode,
      token: draftMode ? readToken : "",
    },
    revalidate: REVALIDATE_DURATION
  };
};
