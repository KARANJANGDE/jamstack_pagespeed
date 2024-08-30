import { SanityDocument } from "next-sanity";
import { Footer, Header, SeoType } from "./settings";
import {
  Button,
  Category,
  CustomImage,
  CustomImageType,
  RichText,
  TitleSubtitleType,
} from "./common";
import {
  BlogDetailPage,
  BlogsType,
  JoinOurNewsLetterType,
  NesLetterSectionType,
  SectionType,
} from "./page";
import { Author } from "./author";
import { Slug } from "sanity";
export interface AllBlogsData {
  _type: "category";
  _id: string;
  allBlogs: BlogsType[];
}
export interface ReadblogType {
  _type: "blog_detail_page";
  _id: string;
  banner_title: string;
  slug: Slug;
}
export interface BlogDetailPageType extends SanityDocument {
  _type: "blog_detail_page";
  _id: string;
  seo: SeoType;
  slug?: string;
  footer?: Footer;
  header: Header;
  author?: Author;
  banner_title?: string;
  banner_desc?: string;
  button: Button;
  hero_image: CustomImageType;
  content?: RichText;
  contant_card_title?: string;
  publish_date?: string;
  share_text?: string;
  blogSectionTitles?: string[];
  readblog?: ReadblogType[];
  join_our_news_letter?: JoinOurNewsLetterType;
  blog_detail_post_Card?: BlogsType[];
  recommended_blog?: TitleSubtitleType;
  news_letter_section?: NesLetterSectionType;
}
export interface BlogListing extends SanityDocument {
  _type: "blog_page";
  _id: string;
  slug?: string;
  seo: SeoType | null;
  footer?: Footer;
  header: Header;
  categories?: Category[]
  section: SectionType[];
  allBlogs?: BlogsType[];
}
export interface PostCategoriesListing extends SanityDocument {
  _type: "blog_page";
  _id: string;
  slug?: string;
  footer?: Footer;
  seo: SeoType | null;
  header: Header;
  categories?: Category[]
  section: SectionType[];
}