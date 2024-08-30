import { SECTION_THEME } from "@/lib/constants/site.colors";
import { CustomImageType, RichText } from "./common";
export interface Client {
  _type: "client";
  clientName?: string;
  section_theme?: SECTION_THEME;
  clientImage?: CustomImageType;
  clientLocation?: string;
}
export interface Testimonial {
  _type: "testimonial";
  title?: string;
  disable?: boolean;
  client?: Client;
  description?: RichText;
}
