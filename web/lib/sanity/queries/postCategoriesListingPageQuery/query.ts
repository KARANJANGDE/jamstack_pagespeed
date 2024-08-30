import { handleSanityRequestError } from "@/lib/sanity/utils";
import { groq } from "next-sanity";
import {
  BlogCategorySectionField,
  blogHeroSectionField,
  newaLetterSectionFields,
  ourBlogSectionFields,
} from "../helper/sectionFields";
import { footer, header, seo } from "../helperQueries";
import { imageFields } from "../helper/imageFields";
const groqQuery = groq`*[_type == "blog_page" && defined(slug.current)]{
  _id,
  _type,
  "slug": slug.current,
  ${header},
  ${footer},
  ${seo},
  "categories":*[_type == "category" && defined(slug.current)]{
  title,
  _type,
  slug,
  },
  section[]{  
    (_type == "blog_hero_section") => {
      ${blogHeroSectionField}
    },
    (_type == "blog_category") => {
      ${BlogCategorySectionField}
    },
    (_type == "our_blog_section")=>{
      ${ourBlogSectionFields}
    },
    (_type == "news_letter_section_document") =>@-> {
      ${newaLetterSectionFields}
    }
  },
}`;

const postCategoriesListingAllBlogsGroqQuery = groq`*[_type == "category" && slug.current == $slug] {
_type,
_id,
"allBlogs":*[_type=="blog_detail_page" && defined(slug.current) && ^.slug.current in category[]->slug.current ]{
_type,
_id,
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
}`;

const handleError = (error: Error, mockData: unknown = undefined) =>
  handleSanityRequestError({
    error,
    mockData,
  });

export const query = {
  groqQuery,
  handleError,
};
export const postCategoriesListingAllBlogsQuery = {
  groqQuery:postCategoriesListingAllBlogsGroqQuery,
  handleError,
};
