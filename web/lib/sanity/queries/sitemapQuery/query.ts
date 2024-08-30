import { groq } from "next-sanity";
import { handleSanityRequestError } from "../../utils";
const normalPage = /* groq */ `*[_type in ["case_study_page","pagespeed","blog_detail_page","book_consultation_page","pricingPage","blog_page","all_page","comparision_details_page","comparision_main_page","case_study_detail_page", "blog", "category"] && defined(slug.current) && ! (slug.current in ["comparision-details", "404"])]{

 (_type == "case_study_page") => {
    "slug" : slug.current
  },
 (_type == "comparision_main_page") => {
    "slug" : slug.current
  },
 (_type == "blog_page") => {
    "slug" : slug.current
  },
  (_type == "comparision_details_page") => {
    "slug" : slug.current
  },
  (_type == "all_page") => {
    "slug" : slug.current
  },
  (_type == "pagespeed") => {
    "slug" : slug.current
  },
  (_type == "pricingPage") => {
    "slug" : slug.current
  },
 (_type == "book_consultation_page") => {
    "slug" : slug.current
  },
  (_type == "case_study_detail_page") => {
    "slug" : "case-studies/" + slug.current
  },
  (_type == "blog_detail_page") => {
    "slug" : "blog/" + slug.current
  },
  (_type == "category") => {
    "slug" : "post-categories/" + slug.current
  },
  _updatedAt
}`;
const comparisionPages = /* groq */ `array::unique(
  *[_type=="framework" && defined(slug.current)]{
         "possibleFrameworks" : *[_type=="framework" && type.type._ref==^.type.type._ref && slug.current != ^.slug.current]{
                        "slug" : "comparision/" + array::join(string::split(array::join([^.slug.current, slug.current], '-vs-'), "/")[@ != "frameworks"], ""),
                         _updatedAt
}[]
}[].possibleFrameworks[]

)`;
const groqQuery = groq`${normalPage} + ${comparisionPages}`;

const handleError = (error: Error, mockData: unknown = undefined) =>
  handleSanityRequestError({
    error,
    mockData,
  });

export const query = {
  groqQuery,
  handleError,
};
