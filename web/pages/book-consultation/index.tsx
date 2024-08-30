import React from "react";
import { GetStaticProps, NextPage } from "next";
import { SharedPageProps } from "@/lib/sanity/types";
import { fetchDataFromSanity, readToken } from "@/lib/sanity";
import { filterSanityDataToSingleItem } from "@/lib/sanity/utils/filterSanityDataToSingleItem";

import BookConsultationPageView from "@/views/BookConsultationPageView";
import { bookConsultationQuery } from "@/lib/sanity/queries/bookConsultationQuery";
import { BookConsultationListing } from "@/lib/sanity/types/bookConsultation";
import PreviewBookConsultationListingView from "@/views/PreviewBookConsultationListingView";
import { REVALIDATE_DURATION } from "@/lib/constants";

export interface PageProps extends SharedPageProps {
  page: BookConsultationListing;
}
const BookConsultationPage: NextPage<PageProps> = ({ page, draftMode }) => {

  if (draftMode) {
    return <PreviewBookConsultationListingView page={page} preview={draftMode} slug="/book-consultation" />;
  }
  return <BookConsultationPageView page={page} slug="/book-consultation" />;
};
export default BookConsultationPage;
export const getStaticProps: GetStaticProps<PageProps> = async ({
  draftMode = false,
}) => {
  const pageData = await fetchDataFromSanity<BookConsultationListing[]>({
    query: bookConsultationQuery.query,
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
    props: {
       page, draftMode, token: draftMode ? readToken : ""
      },
      revalidate:REVALIDATE_DURATION
  };
};
