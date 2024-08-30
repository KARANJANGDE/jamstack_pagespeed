import React from "react";
import { GetStaticProps, NextPage } from "next";
import { SharedPageProps } from "@/lib/sanity/types";
import PreviewCaseStudyListingView from "@/views/PreviewCaseStudyListingView";
import { fetchDataFromSanity, readToken } from "@/lib/sanity";
import { caseStudyListingPageQuery } from "@/lib/sanity/queries/caseStudyListingPageQuery";
import { filterSanityDataToSingleItem } from "@/lib/sanity/utils/filterSanityDataToSingleItem";
import CaseStudyListingView from "@/views/CaseStudyListingView";
import { CaseStudyListing } from "@/lib/sanity/types/caseStudy";
import { REVALIDATE_DURATION } from "@/lib/constants";

export interface PageProps extends SharedPageProps {
  page: CaseStudyListing;
}
const CaseStudyPage: NextPage<PageProps> = ({ page, draftMode }) => {
  if (draftMode) {
    return <PreviewCaseStudyListingView page={page} preview={draftMode} slug="/case-studies"/>;
  }
  return <CaseStudyListingView page={page} slug="/case-studies"/>;
};
export default CaseStudyPage;
export const getStaticProps: GetStaticProps<PageProps> = async ({
  draftMode = false,
}) => {
  const pageData = await fetchDataFromSanity<CaseStudyListing[]>({
    query: caseStudyListingPageQuery.query,
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
  return {
    props: { page, draftMode, token: draftMode ? readToken : "" }, revalidate: REVALIDATE_DURATION
  };
};
