import { useLiveQuery } from "next-sanity/preview";

import { filterSanityDataToSingleItem } from "@/lib/sanity/utils/filterSanityDataToSingleItem";
import CaseStudyDetailPageView, {
  CaseStudyDetailPageViewProps,
} from "../CaseStudyDetailPageView";
import { CaseStudy } from "@/lib/sanity/types/caseStudy";
import { casestudiesQuery } from "@/lib/sanity";

export default function PreviewCaseStudyDetailPageView(
  props: CaseStudyDetailPageViewProps
) {
  const [page, loadingPage] = useLiveQuery<CaseStudy[]>(
    [props.page],
    casestudiesQuery.query.groqQuery,
    { slug: props.page.slug }
  );
  const pageFilteredData = filterSanityDataToSingleItem({
    data: page,
    isPreview: !!props.preview,
  });

  return (
    <CaseStudyDetailPageView
      preview
      loading={loadingPage}
      page={pageFilteredData!}
      slug={props.slug}
    />
  );
}
