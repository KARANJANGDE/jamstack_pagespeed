import { filterSanityDataToSingleItem } from "@/lib/sanity/utils/filterSanityDataToSingleItem";
import { useLiveQuery } from "next-sanity/preview";

import { comparisionListingPageQuery } from "@/lib/sanity/queries/comparisionListingPageQuery";
import ComparisionListingView, { ComparisionListingViewProps } from "../ComparisionListingView";
import { ComparisionListingType } from "@/lib/sanity/types";

export default function PreviewComparisionListingView(props: ComparisionListingViewProps) {
  const [page, loadingPage] = useLiveQuery<ComparisionListingType[]>(
    [props.page],
    comparisionListingPageQuery.query.groqQuery
  );
  const pageFilteredData = filterSanityDataToSingleItem({
    data: page,
    isPreview: !!props.preview,
  });
  return <ComparisionListingView preview loading={loadingPage} page={pageFilteredData!} slug={props.slug}/>;
}
