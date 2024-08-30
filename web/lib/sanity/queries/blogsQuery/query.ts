import { groq } from "next-sanity";
import { handleSanityRequestError, FetchSanityQuery } from "../../utils";
import { makeSanityQuery } from "../../utils/makeSanityQuery";
import { footer, header, seo } from "../helperQueries";
import { imageFields } from "../helper/imageFields";
import { newaLetterSectionFields } from "../helper/sectionFields";

const groqQuery = groq`*[_type == "blog_detail_page" && slug.current == $slug] | order(_updatedAt desc) {
  _type,
  _id,
  "slug": slug.current,
  ${header},
  ${footer},
  ${seo},
  author->{
  author_Name,
  author_Image{
  ${imageFields}
  },
  },
  banner_title,
  banner_desc,
  "readblog":content.custom_rich_text["title_content"==@._type].content.custom_rich_text["read_blog_together"==@._type]->{
  _id,
  banner_title,
  slug
  },
  "join_our_news_letter":contant[0].content[0],
  "blogSectionTitles" : content.custom_rich_text["title_content"==@._type].title,
  "blog_detail_post_Card":*[_type=="blog_detail_page" && defined(slug.current) && slug.current != ^.slug.current] | order(_createdAt desc)[0..2]{
  _type,
  banner_title,
  banner_desc,
  hero_image{
  ${imageFields}
  },
  category[]->{
  _type,
  title,
  slug,
  },
  slug,
  },
  button,
  hero_image{
  ${imageFields}
  },
  content{
  _type,
  custom_rich_text
  },
  contant_card_title,
  publish_date,
  share_text,
  recommended_blog,
  news_letter_section->{
  ${newaLetterSectionFields}
  },
}`;

const handleError = (error: Error, mockData: unknown = undefined) =>
  handleSanityRequestError({
    error,
    mockData,
  });

export const query: FetchSanityQuery = {
  groqQuery,
  handleError,
  makeGroqQuery: (fields, filters) => {
    return groq`*[_type == "blog_detail_page" && defined(slug.current) ${
      filters ? `&& ${filters}` : ""
    }]{
     ${makeSanityQuery(fields)}
    }`;
  },
};
