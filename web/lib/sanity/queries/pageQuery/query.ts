import { handleSanityRequestError } from "@/lib/sanity/utils";
import { groq } from "next-sanity";
import {
  faqSectionFields,
  customerReviewsSectionFields,
  bookConsultationFields,
  heroSectionCaseStudyDPAGEFields,
  imageTitleDescriptionArraySectionField,
  ourProcessSectionFields,
  priceSectionFields,
  reviewsSectionFields,
  richTextIconSideImageSectionFields,
  richTextWithRichTextCardSectionFields,
  testimonialsSectionFields,
  titleSubTitleImageSectionFields,
  techStackSectionFields,
  jamstackDevelopmentFields,
  caseStudiesClientSectionFields,
  titleDescriptionSideImageSectionFields,
  chooseJamstackySectionField,
  errorImageFields,
  developerProfileField,
  contactHeroSectionFields,
  contactInformationSectionFields,
  contactMapSectionFields,
  contactMessageSectionFields,
  contactReviewSectionFields,
  thankYouImageFields,
  heroSectionPrivacyPolicyFields,
  titleContentArrayFields,
} from "../helper/sectionFields";
import { footer, header, seo } from "../helperQueries";

const groqQuery = groq`*[_type == "all_page" && slug.current==$slug]{
  _type,
  "slug": slug.current,
  ${header},
  ${footer},
  ${seo},
  section[]{
    (_type == "hero_section_case_study_d_page") => {
      ${heroSectionCaseStudyDPAGEFields}
    },
    (_type == "rich_text_with_rich_text_card_section") => {
      ${richTextWithRichTextCardSectionFields}
    },
    (_type == "image_title_description_array_section") => {
      ${imageTitleDescriptionArraySectionField}
    },
    (_type == "title_subtitle_image_section") => {
      ${titleSubTitleImageSectionFields}
    },
    (_type == "reviews_section") => {
      ${reviewsSectionFields}
    },
    (_type == "price_section_document") => @->{
      ${priceSectionFields}
    },
    (_type == "testimonials_section") => {
      ${testimonialsSectionFields}
    },
    (_type == "rich_text_icon_sideImage_section") => {
      ${richTextIconSideImageSectionFields}
    },
    (_type == "our_process_section")=>{
      ${ourProcessSectionFields}
    },
    (_type == "book_consultation")=>{
      ${bookConsultationFields}
    },
    (_type == "f_and_q_section")=>{
      ${faqSectionFields}
    },
    (_type == "tech_stack_section")=>{
      ${techStackSectionFields}
    },
    (_type == "jamstack_development")=>{
      ${jamstackDevelopmentFields}
    },
    (_type == "title_description_side_image_Section") => {
      ${titleDescriptionSideImageSectionFields}
    },
    (_type == "choose_jamstacky_section_document")=> @->{
      ${chooseJamstackySectionField}
    },
    (_type == "customer_reviews") => {
        ${customerReviewsSectionFields}
    },
    (_type == "case_studies_client_section") => {
      ${caseStudiesClientSectionFields}
    },
    (_type == "error_image") => {
      ${errorImageFields}
    },
    (_type == "thank_you_image") => {
      ${thankYouImageFields}
    },
    (_type == "hero_section_privacy_policy") => {
      ${heroSectionPrivacyPolicyFields}
    },
    (_type == "title_content_array") => {
      ${titleContentArrayFields}
    },
    (_type == "developer_profile") => {
      ${developerProfileField}
    },    
    (_type == "contact_hero_section") => {
      ${contactHeroSectionFields}
    },
    (_type == "contact_information_section") => {
      ${contactInformationSectionFields}
    },
    (_type == "contact_message_section") => {
      ${contactMessageSectionFields}
    },
    (_type == "contact_map_section") => {
      ${contactMapSectionFields}
    },
    (_type == "contact_review_section") => {
      ${contactReviewSectionFields}
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
