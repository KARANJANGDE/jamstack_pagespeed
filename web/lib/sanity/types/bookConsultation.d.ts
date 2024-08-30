import { SectionType } from "./page";
import { Footer, Header, SeoType } from "./settings";

export interface BookConsultationListing extends SanityDocument {
  _type: "book_consultation_page";
  _id: string;
  slug: string;
  header?: Header;
  footer?: Footer;
  seo: SeoType;
  section?: SectionType[];
}
