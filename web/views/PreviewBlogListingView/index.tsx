import { filterSanityDataToSingleItem } from "@/lib/sanity/utils/filterSanityDataToSingleItem";
import { useLiveQuery } from "next-sanity/preview";

import { BlogListing } from "@/lib/sanity/types/blog";
import { blogListingPageQuery } from "@/lib/sanity/queries/blogListingPageQuery";
import BlogListingView, { BlogListingProps } from "../BlogListingView";

export default function PreviewBlogListingView(props: BlogListingProps) {
  const [page, loadingPage] = useLiveQuery<BlogListing[]>(
    [props.page],
    blogListingPageQuery.query.groqQuery
  );
  const pageFilteredData = filterSanityDataToSingleItem({
    data: page,
    isPreview: !!props.preview,
  });
  return <BlogListingView preview loading={loadingPage} page={pageFilteredData!} slug={props.slug}/>;
}
