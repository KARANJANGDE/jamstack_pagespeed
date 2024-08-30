import { GetStaticProps, NextPage } from "next";
import React, { Fragment } from "react";
import { fetchDataFromSanity, pageQuery, readToken } from "@/lib/sanity";
import { Page } from "@/lib/sanity/types/page";
import { filterSanityDataToSingleItem } from "@/lib/sanity/utils/filterSanityDataToSingleItem";
import { SharedPageProps } from "@/lib/sanity/types";
import PageView from "@/views/PageView";
import PreviewPageView from "@/views/PreviewPageView";
export interface PageProps extends SharedPageProps {
  page: Page;
}

const FourZeroFour: NextPage<PageProps> = ({ page, draftMode }) => {
  if (draftMode) {
    return <PreviewPageView page={page} preview={draftMode} slug="/404"/>;
  }
  return <PageView page={page} slug="/404"/>;
};
export const getStaticProps: GetStaticProps<PageProps> = async ({
  draftMode = false,
}) => {
  const PageData = await fetchDataFromSanity<Page[]>({
    query: pageQuery?.query,
    queryParams: { slug: "404" },
  });
  const PageFilteredData = filterSanityDataToSingleItem({
    data: PageData,
    isPreview: draftMode,
  });
  if (!PageFilteredData) {
    return {
      notFound: true,
    };
  }
  return {
    props: {
      page: PageFilteredData,
      draftMode,
      token: draftMode ? readToken : "",
    },
  };
};
export default FourZeroFour;
