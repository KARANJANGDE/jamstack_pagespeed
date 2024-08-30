import { SanityDocument } from "sanity";
import { ProjectOverView, SectionType } from "./page";
import { Footer, Header, SeoType } from "./settings";
import { CustomImageType } from "./common";

export interface CaseStudy extends SanityDocument {
  _type: "case_study_detail_page";
  project_overview?: ProjectOverView;
  header?: Header;
  feature_images?: CustomImageType[];
  project_year?: string;
  slug: string;
  seo: SeoType;
  footer?: Footer;
  section?: SectionType[];
}
export interface CaseStudyListing extends SanityDocument {
  _type: "case_study_page";
  slug: string;
  seo: SeoType;
  header?: Header;
  footer?: Footer;
  section?: SectionType[];
}
