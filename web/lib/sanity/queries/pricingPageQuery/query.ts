import { handleSanityRequestError } from "@/lib/sanity/utils";
import { groq } from "next-sanity";
import { footerFields } from "../helper/footerFields";
import { headerFields } from "../helper/headerFields";
import { bookConsultationFields, pricingPageInnerSectionFields } from "../helper/sectionFields";

const groqQuery = groq`*[_type == 'pricingPage']{
  _id,
  _type,
  header -> {
  ${headerFields}
  },
  plans []-> {
    ${pricingPageInnerSectionFields}
  },
  plan_coupon_code,
  "section": section[]{
        _type,
        sectionColor,
        (_type == "book_consultation") => {
            ${bookConsultationFields},
        },
        image_array[]{
      image{
      asset->{
      url
    },
    },
    },
  },
  footer -> {
  ${footerFields}   
  },    
  seo, 
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