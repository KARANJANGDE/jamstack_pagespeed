import { PortableTextBlock } from "sanity";

import {
  Button,
  LabelLink,
  CustomImageType,
  ExtraTextType,
  RichText,
} from "./common";
import { SECTION_BACKGROUND_CLASSES } from "@/lib/constants/site.colors";
import {
  JoinOurNewsLetterType,
  SectionType,
  TitleDescriptionSideImageSectionType,
} from "./page";

export interface TopHeader {
  contact_link: LabelLink;
  top_link: string;
  top_label: string;
  contact_no: string;
}
export type ContentType =
  | JoinOurNewsLetterType
  | TitleDescriptionSideImageSectionType;

export interface SidebarType {
  _type: "section";
  label: string;
  content: ContentType[];
}

export interface Header {
  _type: "header";
  logo: CustomImageType;
  button: Button;
  nav_links: LabelLink[];
  background_classname?: SECTION_BACKGROUND_CLASSES;
  top_header: TopHeader;
}

export interface FooterBanner {
  _type: "footer_banner";
  images: CustomImageType[];
  banner_title: string;
  button: Button;
  content: RichText;
  extra_text: ExtraTextType;
}
export interface Footer {
  _type: "footer";
  footer_logo: CustomImageType;
  footer_links: LabelLink[];
  contact_link: LabelLink;
  footer_banner: FooterBanner;
}
export interface ComparisionListingType {
  _type: "comparision_main_page";
  slug: string;
  _id: string;
  seo: SeoType;
  header?: Header;
  footer?: Footer;
  section?: SectionType[];
}
export interface ComparisionDetailPageType {
  _type: "comparision_details_page";
  slug: string;
  _id: string;
  header?: Header;
  seo: SeoType | null;
  footer?: Footer;
  sidebar?: SidebarType[];
}

export type MetaAttributeType = {
  _type: "meta_attribute";
  attribute_key?: string;
  attribute_type?: string;
  attribute_value_string?: string;
  attribute_value_image?: CustomImageType;
};

export type OpenGraphType = {
  _type: "openGraph";
  title: string;
  description: string;
  image: CustomImageType;
};

export type Twitter = {
  _type: "twitter";
  handle?: string;
  site?: string;
  cardType?: string;
};

export type MetaTagType = {
  _type: "meta_tag";
  meta_attributes?: MetaAttributeType[];
};
export type SettingType = {
  _id:"setting"
  _type:"setting"
  name?:string
  description?:string
  telePhone?:string
  image?:CustomImageType
}
export type SeoType = {
  _type?: "seo";
  meta_description?: string;
  meta_image?: CustomImageType;
  meta_tags?: MetaTagType[];
  meta_title?: string;
  openGraph?: OpenGraphType;
  twitter?: Twitter;
  setting?: SettingType;
};
