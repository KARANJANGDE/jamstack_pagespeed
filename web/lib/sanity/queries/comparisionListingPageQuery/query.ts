import { handleSanityRequestError } from "@/lib/sanity/utils";
import { groq } from "next-sanity";

import {
  comparisionFrameworksSectionFields,
  newaLetterSectionFields,
  titleBlogSectionFields,
  titleDescriptionSideImageSectionFields,
} from "../helper/sectionFields";
import { footer, header, seo } from "../helperQueries";
const groqQuery = groq`*[_type == "comparision_main_page" && defined(slug.current)]{
  _id,
  _type,
  "slug": slug.current,
  ${header},
  ${footer},
  ${seo},
  "section":sections[]{
    (_type == "title_description_side_image_Section")=>{
      ${titleDescriptionSideImageSectionFields}
    },
    (_type == "title_blog")=>{
      ${titleBlogSectionFields}
    },
    (_type == "comparision_frameworks") => {
      ${comparisionFrameworksSectionFields}
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
