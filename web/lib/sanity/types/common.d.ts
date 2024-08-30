import { SECTION_THEME } from "@/lib/constants/site.colors";
import { PortableTextBlock, Slug } from "sanity";

export interface IconProps {
  className?: string;
}
export type LabelLink = {
  _type: "label_link";
  label?: string;
  link?: string;
};
export type RichText = {
  _type: "rich_text";
  custom_rich_text: PortableTextBlock[];
};
export type Button = {
  _type: "button";
  link: string;
  label: string;
};
export type ExtraTextType = {
  _type: "extra_text_link";
  link: LabelLink;
  text: string;
};
export type TitleSubtitleType = {
  _type?: "title";
  title: string;
  sub_title?: string;
  caption?: string;
};
export type Category = {
  _type: "category";
  slug?: Slug;
  title?: string;
};
export type TitleImageType = {
  _type: "course_section";
  title_subtitle: TitleSubtitleType;
  section_theme?: SECTION_THEME;
  course_img?: CustomImageType[];
};
export type CustomImageType = {
  _type: "customImage";
  caption?: string;
  alt?: string;
  link?: string;
  image?: ImageType;
};
export type ImageType = {
  _type: "image";
  asset?: {
    _type?: "SanityImageAsset";
    _id?: string;
    path?: string;
    url?: string;
    altText?: string;
    metadata?: {
      _type?: "SanityImageMetadata";
      dimensions?: {
        _type?: "SanityImageDimensions";
        height?: number;
        width?: number;
      };
    };
  };
};
export type Staff = {
  _type: "staff";
  staff_name?: string;
  staff_post?: string;
  staff_image?: CustomImageType;
  staff_content?: RichText;
};
export type QuestionAnswer = {
  _type: "question_and_answer";
  answer: RichText;
  question?: string;
  answerString?: string;
  section_theme?: SECTION_THEME;
};
export type TitleDescriptionType = {
  _type: "title_description";
  description?: string;
  title?: string;
};