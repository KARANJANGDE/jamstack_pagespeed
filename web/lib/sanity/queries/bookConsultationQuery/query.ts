import { handleSanityRequestError } from "@/lib/sanity/utils";
import { groq } from "next-sanity";

import {
  bookConsultationFields,
  bookConsultationHeroSectionFields,
} from "../helper/sectionFields";
import { footer, header, seo } from "../helperQueries";
const groqQuery = groq`*[_type == 'book_consultation_page' && defined(slug.current)]{
    _type,
    _id,
    "slug": slug.current,
    ${header},
    ${footer},
    ${seo},
    "section": sections[]{
    (_type == "book_consultation_hero_section") => {
    ${bookConsultationHeroSectionFields},
    },
    (_type == "book_consultation") => {
    ${bookConsultationFields},
    },
    }
}`;

const handleError = (error: Error, mockData: unknown = undefined) =>
  handleSanityRequestError({
    error,
    mockData,
  });

export const query = {
  groqQuery,
  handleError,
};
