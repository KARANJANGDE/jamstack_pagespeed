import { SharedPageProps } from "@/lib/sanity/types";
import { getAllCategoriesSlugs } from "@/lib/sanity.client";
import { GetStaticProps, NextPage } from "next";
import { readToken } from "@/lib/sanity.api";
import { fetchDataFromSanity } from "@/lib/sanity";

import { filterSanityDataToSingleItem } from "@/lib/sanity/utils/filterSanityDataToSingleItem";
import { PostCategoriesListingPageQuery } from "@/lib/sanity/queries/postCategoriesListingPageQuery";
import PostCategoriesPageView from "@/views/PostCategoriesListingView";
import { AllBlogsData, PostCategoriesListing } from "@/lib/sanity/types/blog";
import { replace } from "@/lib/replace";
import { REVALIDATE_DURATION } from "@/lib/constants";

interface PostCategoriesPageProps extends SharedPageProps {
  page: PostCategoriesListing;
  allBlogs: AllBlogsData;
  slug: string;
}

interface Query {
  [key: string]: string;
}

const PostCategoriesPage: NextPage<PostCategoriesPageProps> = ({
  page,
  draftMode,
  allBlogs,
  slug,
}) => {
  // if (draftMode) {
  //   return <PreviewPostCategoriesPageView allBlogs={allBlogs} page={page} preview={draftMode} />;
  // }
  return (
    <PostCategoriesPageView
      allBlogs={allBlogs}
      page={page}
      slug={`/post-categories/${slug}`}
    />
  );
};

export const getStaticProps: GetStaticProps<
  PostCategoriesPageProps,
  Query
> = async (ctx) => {
  const { draftMode = false, params = {} } = ctx;
  const [pageData, allBlogs] = await Promise?.all([
    fetchDataFromSanity<PostCategoriesListing[]>({
      query: PostCategoriesListingPageQuery?.query,
      queryParams: { slug: "blog" },
    }),
    await fetchDataFromSanity<AllBlogsData[]>({
      query: PostCategoriesListingPageQuery.postCategoriesListingAllBlogsQuery,
      queryParams: { slug: params?.slug },
    }),
  ]);
  const page = filterSanityDataToSingleItem({
    data: pageData,
    isPreview: draftMode,
  });
  const allBlogsFilteredData = filterSanityDataToSingleItem({
    data: allBlogs,
    isPreview: draftMode,
  });
  if (!page || !allBlogsFilteredData) {
    return {
      notFound: true,
    };
  }
  const { seo, categories } = page || {};
  const {
    meta_description,
    meta_image,
    meta_tags,
    meta_title,
    openGraph,
    twitter,
  } = seo || {};
  const replace_args = {
    "{categories}":
      categories?.find((i) => i.slug?.current === params.slug)?.title ?? "",
  };
  const seoAugmentedData: PostCategoriesListing = {
    ...page,
    seo: seo
      ? {
          _type: "seo",
          meta_description: meta_description,
          meta_title: replace(meta_title ?? "", replace_args),
          meta_image: meta_image,
          meta_tags: meta_tags,
          openGraph: openGraph,
          twitter: twitter,
        }
      : null,
  };
  return {
    props: {
      page: seoAugmentedData,
      slug: params?.slug,
      allBlogs: allBlogsFilteredData,
      draftMode,
      token: draftMode ? readToken : "",
    },
    revalidate: REVALIDATE_DURATION
  };
};

export const getStaticPaths = async () => {
  const slugs = await getAllCategoriesSlugs();
  return {
    paths: slugs?.map(({ slug }) => `/post-categories/${slug?.current}`),
    fallback: "blocking",
  };
};
export default PostCategoriesPage;
