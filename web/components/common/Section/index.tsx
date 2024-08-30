import { Category } from "@/lib/sanity/types";
import { BlogsType, SectionType } from "@/lib/sanity/types/page";
import dynamic from "next/dynamic";
import React from "react";
import Hero from "@/components/HomeHeroSection";
import Casestudy from "@/components/Casestudy";
import BlogHeroSection from "@/components/BlogHeroSection";
import ContactHeroSection from "@/components/ContactHeroSection";
import HeroSection from "@/components/HeroSection";
import TitleDescriptionSideImageSection from "@/components/TitleDescriptionSideImageSection";
import BookConsultationHeroSection from "@/components/BookConsultationHeroSection";
import PrivacyPolicyHeroSection from "@/components/PrivacyPolicyHeroSection";
const PriceSection = dynamic(() => import("@/components/PriceSection"));
// const CustomerReviewsArraySection = dynamic(
//   () => import("@/components/CustomerReviewsArraySection")
// );
const EstimateProjectFormSection = dynamic(
  () => import("@/components/Estimate-project")
);
const ThankyouMessageSection = dynamic(
  () => import("@/components/ThankyouMessageSection")
);
const ComparisionFrameworks = dynamic(
  () => import("@/components/CompareFrameworks")
);
const Technology = dynamic(() => import("@/components/Technology-work"));
const EdgeCasestudy = dynamic(() => import("@/components/Edge-casestudy"));
const TitleImageArraySection = dynamic(
  () => import("@/components/TitleImageArraySection")
);
const Testimonials = dynamic(() => import("@/components/Testimonial"));
const Homeblogs = dynamic(() => import("@/components/Homeblog"));
const ImageTitleDescriptionArraySection = dynamic(
  () => import("@/components/ImageTitleDescriptionArraySection")
);
const RichTextWithRichTextCardSection = dynamic(
  () => import("@/components/RichTextWithRichTextCardSection")
);
const TitleSubtitleImageSection = dynamic(
  () => import("@/components/TitleSubtitleImageSection")
);
const ReviewsSection = dynamic(() => import("@/components/ReviewsSection"));
const OurProcessSection = dynamic(
  () => import("@/components/OurProcessSection")
);
const RichTextIconSideImageSection = dynamic(
  () => import("@/components/RichTextIconSideImageSection")
);
const FAQSection = dynamic(() => import("@/components/FAQSection"));
const BookConsultationSection = dynamic(
  () => import("@/components/BookConsultationSection")
);
const TechStackSection = dynamic(() => import("@/components/TechStackSection"));
const ImageSideBySideTitleDescriptionArraySection = dynamic(
  () => import("@/components/ImageSideBySideTitleDescriptionArraySection")
);
const BlogCategorySection = dynamic(() => import("@/components/BlogCategory"));
const CaseStudiesClientSection = dynamic(
  () => import("@/components/CaseStudiesClientSection")
);
const ChooseJamstackySection = dynamic(
  () => import("@/components/ChooseJamstackySection")
);
const CaseStudyBestWorkSection = dynamic(
  () => import("@/components/CaseStudyBestWorkSection")
);

const BlogFeaturedPostSection = dynamic(
  () => import("@/components/BlogFeaturedPostSection")
);

const AllBlogs = dynamic(() => import("@/components/AllBlogSection"));
const NewsLetterSection = dynamic(
  () => import("@/components/NewsLetterSection")
);
const Four0fourSection = dynamic(() => import("@/components/Four_0_four_Page"));

const ContactInformationSection = dynamic(
  () => import("@/components/ContactInformationSection")
);
const ContactMapSection = dynamic(
  () => import("@/components/ContactMapSection")
);
const ContactMessageSection = dynamic(
  () => import("@/components/ContactMessageSection")
);
const ImageContentTitleSection = dynamic(
  () => import("@/components/ImageContentTitleSection")
);
const ContactReviewSection = dynamic(
  () => import("@/components/ContactReviewSection")
);

const TitleContentArraySection = dynamic(
  () => import("@/components/TitleContentArraySection")
);
const TitleImageBlock = dynamic(() => import("@/components/TitleImageBlock"));
const TitleImageBlocks = dynamic(() => import("@/components/TitleImageBlocks"));
const OverviewSection = dynamic(() => import("@/components/OverviewSection"));
interface SectionProps {
  data: SectionType;
  allBlogs?: BlogsType[];
  categories?: Category[];
}
const Section: React.FC<SectionProps> = ({
  data,
  allBlogs,
  categories,
  ...props
}) => {
  switch (data._type) {
    //home Page
    case "home_hero_section":
      return <Hero {...data} />;
    case "rich_text_with_rich_text_card_section":
      return <RichTextWithRichTextCardSection {...data} />;
    case "featurd_case_study":
      return <Casestudy {...data} />;
    case "section_course_title":
      return <Technology {...data} />;
    case "case_study":
      return <EdgeCasestudy {...data} />;
    case "testimonials_section":
      return <Testimonials {...data} />;
    case "blog_title_section":
      return <Homeblogs {...data} />;
    case "title_image_array_section":
      return <TitleImageArraySection {...data} />;
    // case "customer_reviews":
    //   return <CustomerReviewsArraySection {...data} />;
    case "price_section":
      return <PriceSection {...data} />;
    case "comparision_frameworks":
      return <ComparisionFrameworks {...data} />;

    //All Pages
    case "hero_section_case_study_d_page":
      return <HeroSection {...data} />;
    case "rich_text_with_rich_text_card_section":
      return <RichTextWithRichTextCardSection {...data} />;
    case "image_title_description_array_section":
      return <ImageTitleDescriptionArraySection block={data} />;
    case "title_subtitle_image_section":
      return <TitleSubtitleImageSection {...data} />;
    case "reviews_section":
      return <ReviewsSection {...data} />;
    case "rich_text_icon_sideImage_section":
      return <RichTextIconSideImageSection {...data} />;
    case "our_process_section":
      return <OurProcessSection {...data} />;
    case "book_consultation":
      return <BookConsultationSection {...data} />;
    case "f_and_q_section":
      return <FAQSection {...data} />;
    case "tech_stack_section":
      return <TechStackSection {...data} />;
    case "jamstack_development":
      return <ImageSideBySideTitleDescriptionArraySection {...data} />;
    case "title_description_side_image_Section":
      return <TitleDescriptionSideImageSection block={data} />;
    case "choose_jamstacky_section":
      return <ChooseJamstackySection {...data} />;
    case "case_studies_client_section":
      return <CaseStudiesClientSection {...data} />;
    case "error_image":
      return <Four0fourSection {...data} />;
    case "thank_you_image":
      return <ThankyouMessageSection {...data} />;
    case "hero_section_privacy_policy":
      return <PrivacyPolicyHeroSection {...data} />;
    case "title_content_array":
      return <TitleContentArraySection {...data} />;
    case "developer_profile":
      return <EstimateProjectFormSection {...data} />;
    case "contact_hero_section":
      return <ContactHeroSection {...data} />;
    case "contact_information_section":
      return <ContactInformationSection {...data} />;
    case "contact_message_section":
      return <ContactMessageSection {...data} />;
    case "contact_map_section":
      return <ContactMapSection {...data} />;
    case "contact_review_section":
      return <ContactReviewSection {...data} />;
    case "casestudy_bestwork_section":
      return <CaseStudyBestWorkSection {...data} />;
    case "text_image_block":
      return <TitleImageBlock block={data} />;
    case "text_image_blocks":
      return <TitleImageBlocks {...data} />;
    case "overview_section":
      return <OverviewSection {...data} />;
    case "book_consultation_hero_section":
      return <BookConsultationHeroSection {...data} />;
    case "blog_hero_section":
      return <BlogHeroSection {...data} />;
    case "blog_category":
      return <BlogCategorySection {...data} categories={categories} />;
    case "feature_blog_section":
      return <BlogFeaturedPostSection {...data} />;
    case "our_blog_section":
      return <AllBlogs {...data} allBlogs={allBlogs} />;
    case "news_letter":
      return <NewsLetterSection block={data} />;
    case "title_blog":
      return <ImageContentTitleSection {...data} />;
    default:
      return null;
  }
};

export default Section;
