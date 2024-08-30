// First, we must import the schema creator
import createSchema from "part:@sanity/base/schema-creator";

// Then import schema types from any plugins that might expose them
import schemaTypes from "all:part:@sanity/base/schema-type";
import framework from "./documents/framework/index";
import frameworkTypes from "./documents/framework-types";
import comparisionTemplate from "./documents/comparision-template";
import comparision_field from "./objects/comparision_field";
import stringWithBoolean from "./objects/string-with-boolean";
import stringWithIcon from "./objects/string-with-icon";
import button from "../component/button";
import frameworkTypeWithTemplate from "./objects/framework-type-with-template";
import custom_image from "../component/custom_image";
import header from "./documents/header";
import label_link from "./objects/label_link";
import footer from "./documents/footer";

import extra_text_link from "./objects/extra_text_link";
import Home from "./documents/pages/Home";
import BlogDetailPage from "./documents/pages/BlogDetailPage";
import author_section from "./documents/author_section";
import hireDedicatedPage from "./documents/pages/HireDedicatedPage";

import title_blogs from "./documents/pages/all_page/objects/image_title_description_array_section/title_blogs";
import title_content from "../component/title_content";
import price_section from "./documents/price_section";
import title from "../component/title";
import title_description from "../component/title/title_description";
import hire_team from "./documents/pages/all_page/objects/hiring_model_section/hire_team";
import technology_section from "./documents/pages/all_page/objects/technology_section";
import more_conversation_section from "./documents/pages/all_page/objects/more_conversation_section";
import hourly_developer from "./documents/pages/all_page/objects/hourly_developer";
import choose_jamstacky_section from "./documents/choose_jamstacky_section";
import hiring_model_section from "./documents/pages/all_page/objects/hiring_model_section";
import f_and_q_section from "./documents/pages/all_page/objects/f_and_q_section";
import qestion_and_answer from "./documents/pages/all_page/objects/qestion_and_answer";
import course_section from "./documents/pages/Home/objects/course_section";
import section_course_title from "./documents/pages/Home/objects/section_course_title";
import case_study from "./documents/pages/Home/objects/case_study";
import testimonials_section from "./documents/pages/Home/objects/testimonials_section";
import blog_title_section from "./documents/pages/Home/objects/blog_title_section";
import featurd_case_study from "./documents/pages/Home/objects/featurd_case_study";
import case_study_page from "./documents/pages/CaseStudyPage";
import casestudy_bestwork_section from "./documents/pages/CaseStudyPage/objects/casestudy_bestwork_section";
import developer_profile from "./documents/pages/all_page/objects/developer_profile";
import Four_O_Four_page from "./documents/pages/Four_O_Four_page";
import error_image from "./documents/pages/all_page/objects/error_image";
import thank_you_image from "./documents/pages/all_page/objects/thank_you_image";
import thank_you_page from "./documents/pages/thank_you_page";
import case_study_detail_page from "./documents/pages/case_study_detail_page";
import hero_section_case_study_d_page from "./documents/pages/case_study_detail_page/objects/hero_section_case_study_d_page";
import content from "./documents/pages/case_study_detail_page/objects/build_section/content";
import hero_section_privacy_policy from "./documents/pages/all_page/objects/hero_section_privacy_policy";
import privacy_policy from "./documents/pages/privacy_policy";

import rich_text from "../component/rich_text";
import EstimatePage from "./documents/pages/EstimatePage";
import all_page from "./documents/pages/all_page";
import title_content_array from "./documents/pages/all_page/objects/title_content_array";
import title_description_side_image_section from "./documents/pages/all_page/objects/title_description_side_image_section";
import blog_page from "./documents/pages/blog_page";
import blog_hero_Section from "./documents/pages/blog_page/objects/blog_hero_Section";

import our_blog_Section from "./documents/pages/blog_page/objects/our_blog_Section";
import rich_text_with_rich_text_card_section from "./documents/pages/all_page/objects/rich_text_with_rich_text_card_section";
import image_title_description_array_section from "./documents/pages/all_page/objects/image_title_description_array_section";
import reviews_section from "./documents/pages/all_page/objects/reviews_section";
import title_subtitle_image_section from "./documents/pages/all_page/objects/title_subtitle_image_section";
import choose_jamstacky_section_document from "./documents/pages/all_page/objects/choose_jamstacky_section_document";
import our_process_section from "./documents/pages/all_page/objects/our_process_section";
import image_title_array from "./documents/pages/all_page/objects/our_process_section/image_title_array";
import development_process from "./documents/pages/all_page/objects/development_process";
import jamstack_development_section from "./documents/pages/all_page/objects/jamstack_development_section";
import home_hero_section from "./documents/pages/Home/objects/home_hero_section";
import description_author_array from "./documents/pages/Home/objects/testimonials_section/description_author_array";
import footer_banner from "./documents/footer/footer_banner";
import news_letter from "./documents/news_letter";
import news_letter_section_document from "./documents/pages/all_page/objects/news_letter_section_document";
import price_section_document from "./documents/pages/all_page/objects/price_section_document";
import custom_table from "../component/custom_table";
import comparison_tools_section from "./documents/pages/all_page/objects/comparison_tools_section";
import seo from "./objects/seo";
import text_image_block from "./objects/common/text_image_block";
import text_image_blocks from "./objects/common/text_image_blocks";
import feature_blog_section from "./documents/pages/blog_page/objects/feature_blog_section";
import compare_frameworks_section from "./documents/pages/all_page/objects/compare_frameworks_section";
import pagespeed from "./documents/pages/pagespeed";
import metaAttribute from "./objects/seo/meta-attribute";
import metaTag from "./objects/seo/meta-tag";
import hiring_request from "./documents/hiring_request";

import blog_detail_side_content from "./documents/blog_detail_side_content";
import JoinOurNewsletter from "./documents/blog_detail_side_content/JoinOurNewsletter";
import TitleLogo from "./documents/blog_detail_side_content/TitleLogo";

import contact_form from "./documents/pages/all_page/objects/contact_us_section/contact_form";
import contact_information from "./documents/pages/all_page/objects/contact_us_section/contact_information";
import contact_us_section from "./documents/pages/all_page/objects/contact_us_section";
import hover_image_link_array from "./documents/pages/all_page/objects/contact_us_section/contact_information/hover_image_link_array";
import image_link_array from "./documents/pages/all_page/objects/contact_us_section/contact_information/image_link_array";
import carousel_responsive from "./documents/pages/all_page/objects/carousel_responsive";
import read_blog_together from "../component/read_blog_together";
import message_send_request from "./documents/message_send_request";
import category from "./documents/category";
import plan from "./documents/plan";
import _package from "./documents/package";
import pricing from "./objects/pricing";
import blog_category from "./documents/pages/blog_page/objects/blog_category";
import comparision_frameworks from "./documents/pages/all_page/objects/comparision_frameworks";
import pricingPage from "./documents/pages/pricing";
import plan_services_template from "./documents/plan/plan_services_template";
import book_consultation_page from "./documents/pages/book_consultation_page";
import plan_coupon from "./documents/pages/pricing/plan_coupon";
import overview_section from "./documents/pages/case_study_detail_page/objects/overview_section";
import testimonial from "./documents/testimonial";

import client from "./documents/client";
import icon_title_array from "../component/icon_title_array";
import rich_text_icon_sideImage_section from "./documents/pages/all_page/objects/rich_text_icon_sideImage_section";
import company_vision_section from "./documents/pages/all_page/objects/company_vision_section";
import image_content from "../component/image_content";
import comparision_details_page from "./documents/pages/comparision_details_page";
import title_description_image from "../component/title_description_image";
import title_image_array_Section from "./documents/pages/all_page/objects/title_image_array_Section";


import section from "./documents/section";
import staff from "../component/staff";
import book_consultation from "./documents/pages/all_page/objects/book_consultation";
import comparision_main_page from "./documents/pages/comparision_main_page"
import tech_stack_section from "./documents/pages/all_page/objects/tech_stack_section";
import project_overview from "./documents/pages/all_page/objects/project_overview";
import coustomer_reviews from "./documents/pages/customer_reviews";
import book_consultation_hero_section from "./documents/pages/all_page/objects/book_consultation_hero_section";
import case_studies_client_section from "./documents/pages/all_page/objects/case_studies_client_section";
import all_customer_reviews from "./documents/pages/customer_reviews/all_customer_reviews";
import string_with_tooltip from "./objects/string_with_tooltip";
import contact_hero_section from "./documents/pages/all_page/objects/contact_hero_section";
import office_address from "./documents/pages/all_page/objects/contact_information_section/office_address";
import contact_information_section from "./documents/pages/all_page/objects/contact_information_section";
import link from "./objects/link";
import contact_map_section from "./documents/pages/all_page/objects/contact_map_section";
import contact_message_section from "./documents/pages/all_page/objects/contact_message_section";
import contact_review_section from "./documents/pages/all_page/objects/contact_review_section";
import contact_forms from "./documents/pages/all_page/objects/contact_message_section/contact_forms";
import setting from "./documents/setting";
import testimonial_request from "./documents/testimonial_request";
// Then we give our schema to the builder and provide the result to Sanity

export default createSchema({
  // We name our schema
  name: "default",
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    /* Your types here! */
    framework,
    frameworkTypes,
    comparisionTemplate,
    comparision_field,
    stringWithBoolean,
    stringWithIcon,
    string_with_tooltip,
    button,
    frameworkTypeWithTemplate,
    custom_image,
    header,
    label_link,
    setting,
    footer,
    footer_banner,
    extra_text_link,
    Home,
    BlogDetailPage,
    author_section,
    hireDedicatedPage,
    title_blogs,
    title_content,
    course_section,
    section_course_title,
    price_section,
    title,
    title_description,
    hire_team,
    image_title_description_array_section,
    jamstack_development_section,
    technology_section,
    more_conversation_section,
    hourly_developer,
    news_letter,
    choose_jamstacky_section,
    hiring_model_section,
    f_and_q_section,
    qestion_and_answer,
    case_study,
    testimonials_section,
    blog_title_section,
    featurd_case_study,
    case_study_page,
    casestudy_bestwork_section,
    EstimatePage,
    developer_profile,
    Four_O_Four_page,
    error_image,
    thank_you_page,
    thank_you_image,
    case_study_detail_page,
    hero_section_case_study_d_page,
    content,
    privacy_policy,
    hero_section_privacy_policy,

    rich_text,
    all_page,
    title_content_array,
    title_description_side_image_section,
    blog_page,
    blog_hero_Section,
    feature_blog_section,
    our_blog_Section,
    rich_text_with_rich_text_card_section,
    reviews_section,
    title_subtitle_image_section,
    choose_jamstacky_section_document,
    our_process_section,
    image_title_array,
    development_process,
    home_hero_section,
    news_letter_section_document,
    price_section_document,
    custom_table,
    comparison_tools_section,
    seo,
    text_image_block,
    text_image_blocks,
    compare_frameworks_section,
    pagespeed,
    metaAttribute,
    metaTag,
    hiring_request,
    testimonial_request,
    blog_detail_side_content,
    JoinOurNewsletter,
    TitleLogo,
    contact_form,
    contact_information,
    contact_us_section,
    image_link_array,
    hover_image_link_array,
    carousel_responsive,
    read_blog_together,
    message_send_request,
    category,
    plan,
    _package,
    pricing,
    blog_category,
    comparision_frameworks,
    pricingPage,
    plan_services_template,
    book_consultation_page,
    plan_coupon,
    overview_section,

    testimonial,
    client,
    icon_title_array,
    rich_text_icon_sideImage_section,
    company_vision_section,
    image_content,
    comparision_details_page,
    title_description_image,
    title_image_array_Section,
    tech_stack_section,
    project_overview,
    case_studies_client_section,
    section,
    staff,
    book_consultation,
    comparision_main_page,
    coustomer_reviews,
    all_customer_reviews,
    book_consultation_hero_section,
    contact_hero_section,
    office_address,
    contact_information_section,
    link,
    contact_map_section,
    contact_message_section,
    contact_review_section,
    contact_forms
  ]),
});
