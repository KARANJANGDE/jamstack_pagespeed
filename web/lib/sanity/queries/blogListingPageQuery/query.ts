import { handleSanityRequestError } from "@/lib/sanity/utils";
import { groq } from "next-sanity";
import {
  BlogCategorySectionField,
  blogHeroSectionField,
  featureBlogSectionField,
  newaLetterSectionFields,
  ourBlogSectionFields,
  titleDescriptionSideImageSectionFields,
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
  "allBlogs":*[_type=="blog_detail_page" && defined(slug.current)]{
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
    (_type == "feature_blog_section")=>{
      ${featureBlogSectionField}
    },
    (_type == "title_description_side_image_Section")=>{
      ${titleDescriptionSideImageSectionFields}
    },
    (_type == "our_blog_section")=>{
      ${ourBlogSectionFields}
    },
    (_type == "news_letter_section_document") =>@-> {
      ${newaLetterSectionFields}
    }
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
