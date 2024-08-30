import { handleSanityRequestError } from "@/lib/sanity/utils";
import { groq } from "next-sanity";

import {
  casestudyBestworkSectionFields,
  heroSectionCaseStudyDPAGEFields,
  titleDescriptionSideImageSectionFields,
} from "../helper/sectionFields";
import { footer, header, seo } from "../helperQueries";
const groqQuery = groq`*[_type == "case_study_page" && defined(slug.current)]|order(_createdAt desc){
  _type,
  "slug": slug.current,
  ${header},
  ${footer},
  ${seo},
  "section" : Section[]{
    (_type == "hero_section_case_study_d_page") => {
        ${heroSectionCaseStudyDPAGEFields}
    },
    (_type == "casestudy_bestwork_section") => {
      ${casestudyBestworkSectionFields}
    },
    (_type == "title_description_side_image_Section") => {
      ${titleDescriptionSideImageSectionFields}
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
