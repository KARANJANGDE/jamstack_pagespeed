import { useLiveQuery } from "next-sanity/preview";

import { filterSanityDataToSingleItem } from "@/lib/sanity/utils/filterSanityDataToSingleItem";

import { blogDetailPageQuery } from "@/lib/sanity";
import BlogDetailPageView, {
  BlogDetailPageViewProps,
} from "../BlogDetailPageView";
import { BlogDetailPageType } from "@/lib/sanity/types/blog";

export default function PreviewBlogDetailPageView(
  props: BlogDetailPageViewProps
) {
  const [page, loadingPage] = useLiveQuery<BlogDetailPageType[]>(
    [props.page],
    blogDetailPageQuery.query.groqQuery,
    { slug: props.page.slug }
  );
  const pageFilteredData = filterSanityDataToSingleItem({
    data: page,
    isPreview: !!props.preview,
  });

  return (
    <BlogDetailPageView
      preview
      loading={loadingPage}
      page={pageFilteredData!}
    />
  );
}
