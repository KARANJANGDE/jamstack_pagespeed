import { handleSanityRequestError } from "@/lib/sanity/utils";
import { groq } from "next-sanity";

import {
  caseStudySectionFields,
  featuredCaseStudySectionFields,
  titleImageArraySectionFields,
  testimonialsSectionFields,
  homeHeroSectionSectionFields,
  priceSectionFields,
  sectionCourseTitleSectionFields,
  comparisionFrameworksSectionFields,
  blogTitleSectionFields,
  customerReviewsSectionFields,
} from "../helper/sectionFields";
import { footer, header, seo } from "../helperQueries";
const groqQuery = groq`*[_type == "home" && defined(slug.current)]{
  _type,
  ${header},
  ${footer},
  ${seo},
  "slug": slug.current,
  section[]{
    (_type == "home_hero_section") => {
      ${homeHeroSectionSectionFields}
    },
    (_type == "featurd_case_study") => {
      ${featuredCaseStudySectionFields}
    },
    (_type == "section_course_title") => {
      ${sectionCourseTitleSectionFields}
    },
    (_type == "case_study") => {
      ${caseStudySectionFields}
    },
    (_type == "testimonials_section") => {
      ${testimonialsSectionFields}
    },
    (_type == "blog_title_section") => {
      ${blogTitleSectionFields}
    },
    (_type == "title_image_array_section") => {
      ${titleImageArraySectionFields}
    },
    (_type == "customer_reviews") => {
        ${customerReviewsSectionFields}
    },
    (_type == "comparision_frameworks") => {
      ${comparisionFrameworksSectionFields}
    },
    (_type == "price_section_document") => @->{
      ${priceSectionFields}
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
