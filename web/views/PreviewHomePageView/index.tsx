import { homePageQuery } from "@/lib/sanity";
import { Page } from "@/lib/sanity/types/page";
import { filterSanityDataToSingleItem } from "@/lib/sanity/utils/filterSanityDataToSingleItem";
import { useLiveQuery } from "next-sanity/preview";

import type { PageViewProps } from "../PageView";
import dynamic from "next/dynamic";
const PageView = dynamic(()=>import('../PageView'))

export default function PreviewHomePageView(props: PageViewProps) {
  const [page, loadingPage] = useLiveQuery<Page[]>(
    [props.page],
    homePageQuery.query.groqQuery
  );
  const pageFilteredData = filterSanityDataToSingleItem({
    data: page,
    isPreview: !!props.preview,
  });
  return <PageView preview loading={loadingPage} page={pageFilteredData!} slug={props.slug} />;
}
