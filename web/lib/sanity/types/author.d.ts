import { SECTION_THEME } from "@/lib/constants/site.colors";
import { Button, CustomImageType, ImageSource, LabelLink } from "./common";

export interface Author {
  _type:"author_section"
  author_Post?: string;
  author_Image?: CustomImageType;
  company?: LabelLink;
  author_Name?: string;
  section_theme?: SECTION_THEME;
}
