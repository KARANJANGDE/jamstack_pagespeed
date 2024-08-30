import { filterSanityDataToSingleItem } from "@/lib/sanity/utils/filterSanityDataToSingleItem";
import { useLiveQuery } from "next-sanity/preview";

import BookConsultationPageView, {
  BookConsultationViewProps,
} from "../BookConsultationPageView";
import { BookConsultationListing } from "@/lib/sanity/types/bookConsultation";
import { bookConsultationQuery } from "@/lib/sanity/queries/bookConsultationQuery";

export default function PreviewBookConsultationListingView(
  props: BookConsultationViewProps
) {
  const [page, loadingPage] = useLiveQuery<BookConsultationListing[]>(
    [props.page],
    bookConsultationQuery.query.groqQuery
  );
  const pageFilteredData = filterSanityDataToSingleItem({
    data: page,
    isPreview: !!props.preview,
  });
  return (
    <BookConsultationPageView
      preview
      loading={loadingPage}
      page={pageFilteredData!}
      slug={props.slug}
    />
  );
}
