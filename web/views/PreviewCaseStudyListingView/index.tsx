import { filterSanityDataToSingleItem } from "@/lib/sanity/utils/filterSanityDataToSingleItem";
import { useLiveQuery } from "next-sanity/preview";

import { caseStudyListingPageQuery } from "@/lib/sanity/queries/caseStudyListingPageQuery";
import CaseStudyListingView, { CaseStudyListingViewProps } from "../CaseStudyListingView";
import { CaseStudyListing } from "@/lib/sanity/types/caseStudy";

export default function PreviewCaseStudyListingView(props: CaseStudyListingViewProps) {
  const [page, loadingPage] = useLiveQuery<CaseStudyListing[]>(
    [props.page],
    caseStudyListingPageQuery.query.groqQuery
  );
  const pageFilteredData = filterSanityDataToSingleItem({
    data: page,
    isPreview: !!props.preview,
  });
  return <CaseStudyListingView preview loading={loadingPage} page={pageFilteredData!} slug={props.slug}/>;
}
