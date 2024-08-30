import { SharedPageProps } from "@/lib/sanity/types";
import { getAllBlogsSlugs } from "@/lib/sanity.client";
import { GetStaticProps, NextPage } from "next";
import { readToken } from "@/lib/sanity.api";
import { blogDetailPageQuery, fetchDataFromSanity } from "@/lib/sanity";

import { filterSanityDataToSingleItem } from "@/lib/sanity/utils/filterSanityDataToSingleItem";
import { BlogDetailPageType } from "@/lib/sanity/types/blog";
import BlogDetailPageView from "@/views/BlogDetailPageView";
import { ModalsProvider } from "@/lib/hooks/useModals";
import PreviewBlogDetailPageView from "@/views/PreviewBlogDetailPageView";
import {  REVALIDATE_DURATION } from "@/lib/constants";

interface BlogDetailPageProps extends SharedPageProps {
  page: BlogDetailPageType;
  slug? : string
}

interface Query {
  [key: string]: string;
}

const CaseStudyDetailPage: NextPage<BlogDetailPageProps> = ({
  page,
  draftMode,
  slug
}) => {
  if (draftMode) {
    return (
      <ModalsProvider>
        <PreviewBlogDetailPageView page={page} preview={draftMode} slug={slug}/>
      </ModalsProvider>
    );
  }
  return (
    <ModalsProvider>
      <BlogDetailPageView page={page} slug={slug}/>
    </ModalsProvider>
  );
};

export const getStaticProps: GetStaticProps<
  BlogDetailPageProps,
  Query
> = async (ctx) => {
  const { draftMode = false, params = {} } = ctx;

  const [pageData] = await Promise?.all([
    fetchDataFromSanity<BlogDetailPageType[]>({
      query: blogDetailPageQuery?.query,
      queryParams: { slug: params?.slug },
    }),
  ]);

  const pageFilteredData = filterSanityDataToSingleItem({
    data: pageData,
    isPreview: draftMode,
  });
  if (!pageFilteredData) {
    return {
      notFound: true,
    };
  }
  return {
    props: {
      page: pageFilteredData,
      draftMode,
      token: draftMode ? readToken : "",
      slug : params.slug
    },
    revalidate: REVALIDATE_DURATION
  };
};

export const getStaticPaths = async () => {
  const slugs = await getAllBlogsSlugs();

  return {
    paths: slugs?.map(({ slug }) => `/blog/${slug}`),
    fallback: "blocking",
  };
};
export default CaseStudyDetailPage;
