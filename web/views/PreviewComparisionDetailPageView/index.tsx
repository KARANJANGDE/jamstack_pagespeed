import { useLiveQuery } from "next-sanity/preview";
import { filterSanityDataToSingleItem } from "@/lib/sanity/utils/filterSanityDataToSingleItem";
import ComparisionDetailPageView, {
  ComparisionDetailPageViewProps,
} from "../ComparisionDetailPageView";
import { ComparisionDetailPageType } from "@/lib/sanity/types";
import { comparisionDetailsPageQuery } from "@/lib/sanity/queries/comparisionDetailsPageQuery";

export default function PreviewComparisionDetailPageView(
  props: ComparisionDetailPageViewProps
) {
  const [page, loadingPage] = useLiveQuery<ComparisionDetailPageType[]>(
    [props.page],
    comparisionDetailsPageQuery.query.groqQuery,
    { slug: "comparision_details_page" }
  );
  const pageFilteredData = filterSanityDataToSingleItem({
    data: page,
    isPreview: !!props.preview,
  });

  return (
    <ComparisionDetailPageView
      framework_1={props.framework_1}
      framework_2={props.framework_2}
      preview
      loading={loadingPage}
      page={pageFilteredData!}
      slug={props.slug}
    />
  );
}
