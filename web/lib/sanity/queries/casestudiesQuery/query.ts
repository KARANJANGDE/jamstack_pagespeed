import { handleSanityRequestError } from "@/lib/sanity/utils";
import { groq } from "next-sanity";
import {
  heroSectionCaseStudyDPAGEFields,
  overviewSectionFields,
  textImageBlockFields,
  textImageBlocksFields,
} from "../helper/sectionFields";
import { footer, header, seo } from "../helperQueries";
import { imageFields } from "../helper/imageFields";

const groqQuery = groq`*[_type == "case_study_detail_page" && slug.current == $slug]|order(_createdAt desc) {
  _type,
  _id,
  project_overview{
  _type,
  title,
  description{
  _type,
  custom_rich_text
  },
  },
  feature_images[]{
  ${imageFields}
  },
  project_year,
  "slug": slug.current,
  ${header},
  ${footer},
  ${seo},
  "section" : Section[]{
    (_type == "hero_section_case_study_d_page") => {
        ${heroSectionCaseStudyDPAGEFields}
    },
    (_type == "text_image_block") => {
        ${textImageBlockFields}
    },
    (_type == "text_image_blocks") => {
        ${textImageBlocksFields}
    },
    (_type == "overview_section") => {
        ${overviewSectionFields}
    },
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
