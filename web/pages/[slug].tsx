import { GetServerSideProps, GetServerSidePropsContext, NextPage } from "next";
import React from "react";
import { readToken } from "@/lib/sanity.api";
import { fetchDataFromSanity } from "@/lib/sanity/utils/fetchDataFromSanity";
import { Page as PageType } from "@/lib/sanity/types/page";
import { pageQuery } from "@/lib/sanity/queries/pageQuery";
import { filterSanityDataToSingleItem } from "@/lib/sanity/utils/filterSanityDataToSingleItem";
import PageView from "@/views/PageView";
import PreviewPageView from "@/views/PreviewPageView";
import { SharedPageProps } from "@/lib/sanity/types";

interface PageProps extends SharedPageProps {
  page: PageType;
}

interface Query {
  [key: string]: string;
}
const Page: NextPage<PageProps> = ({ page, draftMode }) => {
  if (draftMode) {
    return <PreviewPageView page={page} preview={draftMode} slug={page?.slug} />;
  }
  return <PageView page={page} slug={page?.slug} />;
};

export const getServerSideProps: GetServerSideProps<PageProps, Query> = async (
  ctx: GetServerSidePropsContext
) => {
  const { draftMode = false, params } = ctx;
  if (params?.slug === "404") {
    return { notFound: true };
  }
  const [pageData = []] = await Promise?.all([
    fetchDataFromSanity<PageType[]>({
      query: pageQuery?.query,
      queryParams: { slug: params?.slug },
    }),
  ]);
  const pageFilteredData = filterSanityDataToSingleItem({
    data: pageData,
    isPreview: draftMode,
  });
  if (!pageFilteredData) {
    return { notFound: true };
  }
  return {
    props: {
      page: pageFilteredData,
      draftMode,
      token: draftMode ? readToken : "",
    },
  };
};
export default Page;
