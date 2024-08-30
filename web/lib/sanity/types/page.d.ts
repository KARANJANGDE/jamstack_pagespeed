  import {
  CustomImageType,
  ImageType,
  RichText,
  TitleSubtitleType,
} from "./common.d";
import { SanityDocument } from "next-sanity";
import { Slug } from "sanity";
import {
  SECTION_THEME,
  SECTION_BACKGROUND_CLASSES,
  FRAMEWORK_SECTION_VARIANTS,
  BACKGROUND,
} from "@/lib/constants/site.colors";
import {
  Button,
  Category,
  QuestionAnswer,
  Staff,
  TitleDescriptionType,
  TitleImageType,
  TitleSubtitleType,
} from "./common";
import { Header, Footer, Seo, SeoType } from "./settings";
import { Author } from "./author";
import { Testimonial } from "./testimonials";
import { Framework } from "./framework";

export interface BlogsType {
  _type?: "blog_detail_page";
  _id: string;
  banner_title?: string;
  banner_desc?: string;
  hero_image?: CustomImageType;
  slug: Slug;
  category?: Category[];
}
export interface Review {
  _type: "all_customer_reviews";
  rating?: number;
  review?: RichText;
  customer_image?: CustomImageType;
}
export interface PackageDetails {
  _type: "comparision_field";
  name?: string;
  isDivider?: boolean;
  type?: string;
  string?: string;
  slider_value?: number;
  boolean_value?: boolean;
  button?: Button;
  string_with_boolean?: StringWithBoolean;
  string_with_icon?: StringWithIcon;
  string_with_tooltip?: StringWithTooltip;
}
export interface FrameworkTypes {
  _type: "framework_type";
  slug: Slug;
  name: string;
  seo_postfix?:string
  content: RichText;
}
export interface ComparisionTemplate {
  _type: "comparision_template";
  fields: PackageDetails[];
}
export interface FrameworkTypeWithTemplate {
  _type: "framework_type_with_template";
  type: FrameworkTypes;
  template: ComparisionTemplate;
}
export interface AllFrameworkTypes {
  _type: "framework";
  name: string;
  image: CustomImageType;
  type: FrameworkTypeWithTemplate;
  slug: Slug;
}
export interface CompareFrameworkSection {
  _type: "compare_frameworks_section";
  content: RichText;
  section_theme?: SECTION_THEME;
  button_label_compare?: string;
  type: FrameworkTypes;
  title_subtitle?: TitleSubtitleType;
  frameworks: AllFrameworkTypes[];
}
export interface PlanServicesTemplate {
  _type: "plan_services_template";
  title: string;
  plan_services: string[];
}
export interface StringWithBoolean {
  _type: "string_with_boolean";
  name?: string;
  boolean: boolean;
}
export interface StringWithIcon {
  _type: "string_with_icon";
  name?: string;
  image?: ImageType;
}
export interface StringWithTooltip {
  _type: "string_with_tooltip";
  name?: string;
  tooltip_name?: RichText;
  tooltip_image?: ImageType;
}

export interface PricingPackage {
  _type: "package";
  package_title?: string;
  package_price_postfix?: string;
  package_price_value?: string;
  package_duration?: string;
  package_price_currency?: string;
  label?: string;
  popularity?: boolean;
  package_price_summary?: string;
  package_total_price?: string;
  package_details: PackageDetails[];
}
export interface PlanType {
  _type: "plan";
  packages: PricingPackage[];
  plan_services_template: PlanServicesTemplate;
  label: string;
  plan_name: string;
  discount: string;
}
export interface PricingType {
  _type: "pricing";
  plan_discuss: Button;
  plan_navigation: string;
  plans: PlanType[];
}
export interface TitleBlog {
  _type: "title_blog";
  content?: RichText;
  image?: CustomImageType;
  section_theme?: string;
  title?: string;
}
export interface IconTitleArray {
  _type: "icon_title_array";
  icon_title: string;
  icon_image: CustomImageType;
}
export interface ImageTitleArray {
  _type: "image_title_array";
  title: string;
  our_process_image: CustomImageType;
}
export interface FrameworkType {
  _type: "framework_type";
  name;
  frameworks: Pick<AllFrameworkTypes, "_type" | "image" | "name">[];
}
export interface MediaIcon {
  _type: "development_process";
  process_image?: CustomImageType;
  section_theme?: SECTION_THEME;
  lable?: string;
}
export interface ProjectOverView {
  _type: "project_overview";
  title?: string;
  description?: RichText;
}
export interface HeroSectionPreviewImage {
  _type: "hero_section_case_study_d_page";
  image: CustomImageType;
  section_title?: string;
  title?: string;
  description?: string;
}
export interface CaseStudyPreviewType {
  _type: "case_study_detail_page";
  project_overview: ProjectOverView;
  project_year: string;
  slug: Slug;
  heroSectionPreviewImage: HeroSectionPreviewImage;
}
export interface TitleContent {
  _type: "title_content";
  content?: RichText;
  title?: string;
}
export interface OfficeAddress {
  _type: "office_address";
  addressTitle?: TitleSubtitleType;
  directions?: LabelLink;
  section_theme?: SECTION_THEME;
  addressDescription?: RichText;
}
export interface TitleDescriptionImageType {
  _type: "title_description_image";
  section_image?: CustomImageType;
  section_description?: RichText;
}
export interface IconTitleArray {
  _type: "icon_title_array";
  icon_title?: string;
  icon_image?: CustomImageType;
  icon_subtitle?: RichText;
}
export interface ContactForm {
  _type: "contact_forms";
  Name?: string;
  phone_number?: string;
  email_placeholder?: string;
  message_placeholder?: string;
  companyName_placeholder?: string;
  section_theme?: SECTION_THEME;
  title_subtitle?: TitleSubtitleType;
  email?: string;
  phone_number_placeholder?: string;
  name_placeholder?: string;
  companyName?: string;
  message?: string;
}
export interface ImageContentArray {
  _type: "image_content";
  card_rich_text?: RichText;
  section_image?: CustomImageType;
}
export interface Page extends SanityDocument {
  slug: string;
  seo:SeoType
  header?: Header;
  footer?: Footer;
  section?: SectionType[];
}
export interface CaseStudyBestWorkCardType {
  _type: "case_study_detail_page";
  slug: Slug;
  feature_images: CustomImageType[];
  heroSectionPreview: HeroSectionPreviewImage;
}
export interface MostRecentBlog {
  _type: "blog_detail_page";
  _id?: string;
  slug?: Slug;
  category?: Category;
  publish_date?: string;
  banner_title?: string;
  banner_desc?: string;
  author?: Author;
}
export interface FeaturedPost {
  _type: "blog_detail_page";
  hero_image?: CustomImageType;
  publish_date?: string;
  author?: Author;
  banner_title?: string;
  banner_desc?: string;
  slug?: Slug;
}
export type SectionType =
  | HomeheroSectionType
  | PriceSectionType
  | SectionCourseTitleSectionType
  | CustomerReviewsSectionType
  | CaseStudySectionType
  | FeaturedCaseStudySectionType
  | TitleImageArraySectionType
  | TestimonialsSectionType
  | BlogtitleSectionType
  | ComparisionFrameworksSectionType
  | RichTextWithRichTextCardSectionType
  | ReviewsSectionType
  | ImageTitleDescriptionArraySectionType
  | TitleSubtitleImageSectionType
  | OurProcessSectionType
  | RichTextIconSideImageSectionType
  | FAndQSectionType
  | BookConsultationType
  | CasestudyBestworkSectionFields
  | TechStackSectionType
  | BlogHeroSectionType
  | JamstackDevelopmentType
  | CaseStudiesClientSectionType
  | TitleDescriptionSideImageSectionType
  | BlogCategorySectionType
  | CaseStudiesClientSectionType
  | BlogFeaturedPostSectionType
  | ChooseJamstackySectionType
  | NesLetterSectionType
  | ErrorImageType
  | DeveloperProfileType
  | HeroSectionCaseStudyPageType
  | OurBlogSectionType
  | ContactHeroSectionType
  | ContactInformationSectionType
  | ContactMapSectionType
  | ContactMessageSectionType
  | ImageContentTitleSection
  | ContactReviewSectionType
  | ThankYouImageType
  | HeroSectionPrivacyPolicyType
  | TitleContentArrayType
  | JoinOurNewsLetterType
  | TextImageBlockType
  | TextImageBlocksType
  | OverviewSectionType
  | BookConsultationHeroSectionType
  | ContactFormSectionType
  | PricingSectionType;

export interface HomeheroSectionType {
  _type: "home_hero_section";
  title: string;
  background_classname: SECTION_BACKGROUND_CLASSES;
  jamstack_developer_button: Button;
  hero_image?: CustomImageType;
  start_project_button: Button;
  section_theme?: SECTION_THEME;
  hero_description: string;
  hero_title: string;
  title_image: CustomImageType;
  bottom_description?: string;
}
export interface FeaturedCaseStudySectionType {
  _type: "featurd_case_study";
  core_web_title: string;
  title_subtitle: TitleSubtitleType;
  case_study_image?: CustomImageType;
  process_image?: CustomImageType;
  section_theme?: SECTION_THEME;
  case_study_blog?: RichText;
}
export interface SectionCourseTitleSectionType {
  _type: "section_course_title";
  title_subtitle?: TitleSubtitleType;
  bookConsultationButton?: Button;
  titleImage?: TitleImageType[];
  section_theme?: SECTION_THEME;
}
export interface CaseStudySectionType {
  _type: "case_study";
  section_theme?: SECTION_THEME;
  title_subtitle?: TitleSubtitleType;
  description: string;
  section_title: string;
  read_full_case_study_button: Button;
  case_study_img?: CustomImageType;
  author?: Author;
}
export interface TestimonialsSectionType {
  _type: "testimonials_section";
  TestimonialsTitle?: string;
  section_theme?: SECTION_THEME;
  testimonials_section?: string;
  TestimonialsDescription?: string;
  testimonials: Testimonial[];
}
export interface BlogtitleSectionType {
  _type: "blog_title_section";
  blog_button?: Button;
  section_theme?: SECTION_THEME;
  title_subtitle?: TitleSubtitleType;
  blogs: BlogsType[];
}
export interface TitleImageArraySectionType {
  _type: "title_image_array_section";
  title_subtitle?: TitleSubtitleType;
  imagevariant?: string;
  image_array?: CustomImageType[];
  section_theme?: SECTION_THEME;
}
export interface CustomerReviewsSectionType {
  _type: "customer_reviews";
  title: string;
  section_image: CustomImageType;
  reviews: Review[];
}
export interface ComparisionFrameworksSectionType {
  _type: "comparision_frameworks";
  compare_framework_section: CompareFrameworkSection[];
  is_show?: boolean;
  title_subtitle?: TitleSubtitleType;
  variant: FRAMEWORK_SECTION_VARIANTS;
}
export interface PriceSectionType {
  _type: "price_section";
  title_subtitle: TitleSubtitleType;
  section_theme: string;
  pricing_section: PricingType;
}
export interface HeroSectionCaseStudyPageType {
  _type: "hero_section_case_study_d_page";
  background_classname?: SECTION_BACKGROUND_CLASSES;
  section_theme?: SECTION_THEME;
  button?: Button[];
  image?: CustomImageType[];
  description?: string;
  title?: string;
  section_title?: string;
}
export interface RichTextWithRichTextCardSectionType {
  _type: "rich_text_with_rich_text_card_section";
  definition_card_array?: RichText[];
  definition_rich_text?: RichText;
  section_theme?: SECTION_THEME;
}
export interface ImageTitleDescriptionArraySectionType {
  _type: "image_title_description_array_section";
  background?: BACKGROUND;
  variant?: FRAMEWORK_SECTION_VARIANTS;
  title_subtitle?: TitleSubtitleType;
  title_blogs: TitleBlog[];
  section_theme?: string;
}
export interface TitleSubtitleImageSectionType {
  _type: "title_subtitle_image_section";
  title_subtitle?: TitleSubtitleType;
  content: RichText;
  img?: CustomImageType;
  section_theme?: SECTION_THEME;
}
export interface ReviewsSectionType {
  _type: "reviews_section";
  title?: string;
  reviews_image?: CustomImageType;
  book_free_consultation_button?: Button;
  section_theme?: SECTION_THEME;
  text_with_image?: RichText;
  description_rich_text?: RichText;
}
export interface RichTextIconSideImageSectionType {
  _type: "rich_text_icon_sideImage_section";
  title_subtitle?: TitleSubtitleType;
  section_description?: RichText;
  section_theme?: SECTION_THEME;
  section_image?: CustomImageType;
  icon_lable_array?: IconTitleArray[];
}
export interface OurProcessSectionType {
  _type: "our_process_section";
  section_theme?: SECTION_THEME;
  title_subtitle?: TitleSubtitleType;
  image_title_array?: ImageTitleArray[];
  title?: string;
  variant?: string;
}
export interface BookConsultationType {
  _type: "book_consultation";
  variant?: FRAMEWORK_SECTION_VARIANTS;
  content?: RichText;
  section_image?: CustomImageType;
  section_theme?: SECTION_THEME;
  staff?: Staff;
}
export interface FAndQSectionType {
  _type: "f_and_q_section";
  section_theme?: SECTION_THEME;
  variant?: FRAMEWORK_SECTION_VARIANTS;
  title?: string;
  question_and_answer?: QuestionAnswer[];
}
export interface TechStackSectionType {
  _type: "tech_stack_section";
  title_subtitle?: TitleSubtitleType;
  section_theme?: string;
  frameworkTypes: FrameworkType[];
}
export interface JamstackDevelopmentType {
  _type: "jamstack_development";
  image?: CustomImageType[];
  title_description?: TitleDescriptionType[];
  title_subtitle?: TitleSubtitleType;
  section_theme: SECTION_THEME;
}
export interface TitleDescriptionSideImageSectionType {
  _type?: "title_description_side_image_Section";
  variant?: FRAMEWORK_SECTION_VARIANTS;
  title_subtitle?: TitleSubtitleType;
  desc?: RichText;
  side_image?: CustomImageType;
  section_theme?: SECTION_THEME;
  background?: BACKGROUND;
}
export interface ChooseJamstackySectionType {
  _type: "choose_jamstacky_section";
  name?: string;
  title_subtitle?: TitleSubtitleType;
  media_icon?: MediaIcon[];
  section_theme?: SECTION_THEME;
}
export interface CaseStudiesClientSectionType {
  _type: "case_studies_client_section";
  title_subtitle: TitleSubtitleType;
  section_theme: SECTION_THEME;
  caseStudies: CaseStudyPreviewType[];
}
export interface ErrorImageType {
  _type: "error_image";
  sub_title?: string;
  error_image?: CustomImageType;
  title?: string;
  section_theme?: SECTION_THEME;
}
export interface ThankYouImageType {
  _type: "thank_you_image";
  thank_you_image?: CustomImageType;
}
export interface HeroSectionPrivacyPolicyType {
  _type: "hero_section_privacy_policy";
  date?: string;
  title?: string;
}
export interface TitleContentArrayType {
  _type: "title_content_array";
  text_section?: TitleContent[];
}
export interface DeveloperProfileType {
  _type: "developer_profile";
  title?: string;
  email_placeholder?: string;
  hire_jamstack_development_button?: Button;
  how_can_we_help_placeholder?: string;
  content?: RichText;
  select_type_button?: string[];
  select_type_of_project?: string;
  image?: CustomImageType;
  section_theme?: SECTION_THEME;
  name_placeholder?: string;
}
export interface ContactHeroSectionType {
  _type: "contact_hero_section";
  section_theme?: SECTION_THEME;
  title_subtitle?: TitleSubtitleType;
  section_description?: RichText;
}
export interface ContactInformationSectionType {
  _type: "contact_information_section";
  officeAddress?: OfficeAddress;
  contactUsCard?: TitleDescriptionImageType[];
  email?: LabelLink;
  officeTime?: TitleContent;
  section_theme?: SECTION_THEME;
  phoneNumber?: string;
}
export interface ContactMessageSectionType {
  _type: "contact_message_section";
  section_description?: RichText;
  imageTitleSubtitleArray?: IconTitleArray[];
  section_theme?: SECTION_THEME;
  sevicesTitle?: string;
  sevicesDescription?: RichText;
  title_subtitle?: TitleSubtitleType;
  ServicesButtonArray?: string[];
  ContactMessageMainImage?: CustomImageType;
  contactForm?: ContactForm;
}
export interface ContactMapSectionType {
  _type: "contact_map_section";
  section_theme?: SECTION_THEME;
  title_subtitle?: TitleSubtitleType;
  mapImage?: string;
}
export interface ContactReviewSectionType {
  _type: "contact_review_section";
  section_theme?: SECTION_THEME;
  title_subtitle?: TitleSubtitleType;
  image_content_array?: ImageContentArray[];
}
export interface CasestudyBestworkSectionFields {
  _type: "casestudy_bestwork_section";
  title_subtitle: TitleSubtitleType;
  section_theme: SECTION_THEME;
  caseStudies: CaseStudyBestWorkCardType[];
}
export interface TextImageBlockType {
  _type: "text_image_block";
  section_title?: TitleSubtitleType;
  variant?: FRAMEWORK_SECTION_VARIANTS;
  justify_content?: boolean;
  content: RichText;
  image?: CustomImageType;
}
export interface TextImageBlocksType {
  _type: "text_image_blocks";
  section_title?: TitleSubtitleType;
  blocks: TextImageBlockType[];
}
export interface OverviewSectionType {
  _type: "overview_section";
  feature_image?: CustomImageType[];
  section_title?: TitleDescriptionType;
  technology_icon?: CustomImageType[];
  title_subtitle?: TitleSubtitleType;
  Description?: string;
}
export interface BookConsultationHeroSectionType {
  _type: "book_consultation_hero_section";
  variant?: FRAMEWORK_SECTION_VARIANTS;
  title_subtitle?: TitleSubtitleType;
  content?: RichText;
  background_classname?: SECTION_BACKGROUND_CLASSES;
  section_theme?: SECTION_THEME;
}
export interface BlogHeroSectionType {
  _type: "blog_hero_section";
  background_classname?: string;
  hero_image?: CustomImageType;
  title?: string;
  section_theme?: string;
  most_recent_blog?: MostRecentBlog;
}
export interface BlogCategorySectionType {
  _type: "blog_category";
  Category?: string;
}
export interface BlogFeaturedPostSectionType {
  _type: "feature_blog_section";
  all_posts_section?: string;
  featured_post_title?: string;
  featured_post?: FeaturedPost;
  all_Posts?: FeaturedPost[];
  section_theme: SECTION_THEME;
}
export interface OurBlogSectionType {
  _type?: "our_blog_section";
  title_subtitle?: TitleSubtitleType;
  view_blog_button?: Button;
  section_theme?: SECTION_THEME;
}
export interface NesLetterSectionType {
  _type: "news_letter";
  _id: string;
  section_theme?: SECTION_THEME;
  subscribe_button: string;
  input_placeholder: string;
  description: string;
  title: string;
  background_image: CustomImageType;
}
export interface JoinOurNewsLetterType {
  _type: "join_our_news_letter";
  input_placeholder?: string;
  title_description?: TitleDescriptionType;
  send_button?: Button;
}
export interface ImageContentTitleSection {
  _type: "title_blog";
  image: CustomImageType;
  section_theme?: SECTION_THEME;
  title?: string;
  content?: RichText;
}
/**
 * @type test
 */




/**
 * @type phase two type
*/

export interface ContactFormSectionType {
  _type: "contactpage";
  EmailAddress: string;
  CompanyName: string;
  email: string;
  FirstName: string;
  LastName: string;
  PhoneNumber: string;
  StreetAddress: string;
  City: string;
  State: string;
  Country: string;
  Zipcode: string;
  block: ContactFormSectionType;
}

export interface PricingPageInnerSectionType {
  _type: "home";
  packages: PricingPackage[];
  plans: PricingPlan[];
  package_details: PackageDetails[];
  pricing_section: PricingSectionItem;
  plan_services_template: PlanServicesTemplate;
}

export interface PricingSectionType {
  _type: "pricingPage";
  slug?: string;
  footer?: Footer;
  header: Header;
  _id: string;
  plans: PricingPlan[];
  section?: SectionType[] | undefined;
  seo: Seo;
  plan_coupon_code: PlanCouponCode;
}
export interface PlanCouponCode {
  coupon_label: string;
  coupon_title: string;
  coupon_placeholder: string;
}
