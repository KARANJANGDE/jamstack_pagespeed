import {
  GetServerSideProps,
  GetStaticPaths,
  GetStaticProps,
  NextPage,
} from "next";
import { fetchDataFromSanity, frameWorkQuery, readToken } from "@/lib/sanity";
import { filterSanityDataToSingleItem } from "@/lib/sanity/utils/filterSanityDataToSingleItem";
import { Framework } from "@/lib/sanity/types/framework";
import { comparisionDetailsPageQuery } from "@/lib/sanity/queries/comparisionDetailsPageQuery";
import { ComparisionDetailPageType, SharedPageProps } from "@/lib/sanity/types";
import ComparisionDetailPageView from "@/views/ComparisionDetailPageView";
import { replace } from "@/lib/replace";
import { comparisionPagesQuery } from "@/lib/sanity/queries/comparisionPagesQuery";
import { REVALIDATE_DURATION } from "@/lib/constants";

interface ComparisionDetailsPageProps extends SharedPageProps {
  page: ComparisionDetailPageType;
  framework_1: Framework;
  framework_2: Framework;
  slug: string;
}

interface Query {
  [key: string]: string;
}

const ComparisionMainPage: NextPage<ComparisionDetailsPageProps> = ({
  page,
  framework_1,
  framework_2,
  draftMode,
  slug,
}) => {
  // if (draftMode) {
  //    return <PreviewComparisionDetailPageView framework_1={framework_1} framework_2={framework_2} page={page} preview={draftMode} />;
  //  }
  return (
    <ComparisionDetailPageView
      framework_1={framework_1}
      framework_2={framework_2}
      page={page}
      slug={slug}
    />
  );
};

export default ComparisionMainPage;

export const getStaticProps: GetStaticProps<
  ComparisionDetailsPageProps,
  Query
> = async (ctx) => {
  const { draftMode = false, params = {} } = ctx;
  const { slug } = params;
  const [framework1, framework2] = slug.split("-vs-");
  if (!framework1 || !framework2 || framework1 === framework2) {
    return {
      notFound: true,
    };
  }
  // const client = getClient(draftMode ? { token: readToken } : undefined);
  const [pageData, framework1Data, framework2Data] = await Promise?.all([
    fetchDataFromSanity<ComparisionDetailPageType[]>({
      query: comparisionDetailsPageQuery?.query,
      queryParams: { slug: "comparision_details_page" },
    }),
    fetchDataFromSanity<Framework[]>({
      query: frameWorkQuery?.query,
      queryParams: { slug: framework1 },
    }),
    fetchDataFromSanity<Framework[]>({
      query: frameWorkQuery?.frameWorkTwoQuery,
      queryParams: { slug: framework2 },
    }),
  ]);
  const page = filterSanityDataToSingleItem({
    data: pageData,
    isPreview: draftMode,
  });
  const framework_1 = filterSanityDataToSingleItem({
    data: framework1Data,
    isPreview: draftMode,
  });
  const framework_2 = filterSanityDataToSingleItem({
    data: framework2Data,
    isPreview: draftMode,
  });
  if (!page || !framework_1 || !framework_2) {
    return {
      notFound: true,
    };
  }
  const { seo } = page || {};

  const {
    meta_description,
    meta_image,
    meta_tags,
    meta_title,
    openGraph,
    twitter,
    setting,
  } = seo || {};

  const replace_args = {
    "{framework_1}": framework_1?.name ?? "",
    "{framework_2}": framework_2?.name ?? "",
    "{seo_postfix}": framework_1?.type?.type?.seo_postfix ?? "",
  };
  const seoAugmentedData: ComparisionDetailPageType = {
    ...page,
    seo: seo
      ? {
          _type: "seo",
          meta_description: replace(meta_description ?? "", replace_args),
          meta_title: replace(meta_title ?? "", replace_args),
          meta_image: meta_image,
          meta_tags: meta_tags,
          openGraph: openGraph,
          twitter: twitter,
          setting: setting,
        }
      : null,
  };
  return {
    props: {
      page: seoAugmentedData,
      draftMode,
      token: draftMode ? readToken : "",
      framework_1,
      framework_2,
      slug: params.slug,
    },
    revalidate: REVALIDATE_DURATION,
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const pageData = await fetchDataFromSanity<{ slugs: string[] }>({
    query: comparisionPagesQuery.query,
  });

  const paths = pageData.slugs.map((slug) => ({
    params: { slug },
  }));

  return {
    paths: [], // TODO : remove this part after testing
    fallback: true,
  };
};