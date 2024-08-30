import { SECTION_THEME } from "@/lib/constants/site.colors";
import { SanityDocument } from "sanity";
import { CustomImageType, RichText } from "./common";
import { AllFrameworkTypes, FrameworkTypeWithTemplate } from "./page";


export interface Framework extends SanityDocument {
  _type: "framework";
  _id: string;
  slug: string;
  name: string;
  content_summary: string[];
  image: CustomImageType;
  richtext: RichText;
  frameworks:AllFrameworkTypes[]
  type:FrameworkTypeWithTemplate
}
