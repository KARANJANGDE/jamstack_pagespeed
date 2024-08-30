import { useLiveQuery } from "next-sanity/preview";

import { filterSanityDataToSingleItem } from "@/lib/sanity/utils/filterSanityDataToSingleItem";
import PostCategoriesPageView, {
  PostCategoriesPageViewProps,
} from "../PostCategoriesListingView";
import { PostCategoriesListing } from "@/lib/sanity/types/blog";
import { PostCategoriesListingPageQuery } from "@/lib/sanity/queries/postCategoriesListingPageQuery";

export default function PreviewPostCategoriesPageView(
  props: PostCategoriesPageViewProps
) {
  const [page, loadingPage] = useLiveQuery<PostCategoriesListing[]>(
    [props.page],
    PostCategoriesListingPageQuery.query.groqQuery,
    { slug: props.page.slug }
  );
  const pageFilteredData = filterSanityDataToSingleItem({
    data: page,
    isPreview: !!props.preview,
  });

  return (
    <PostCategoriesPageView
      allBlogs={props.allBlogs}
      preview
      loading={loadingPage}
      page={pageFilteredData!}
      slug={props.slug}
    />
  );
}
