import { handleSanityRequestError } from "@/lib/sanity/utils";
import { groq } from "next-sanity";
import { footer, header, seo } from "../helperQueries";
import {
  joinOurNewsLetterSectionFields,
  titleDescriptionSideImageSectionFields,
} from "../helper/sectionFields";
const groqQuery = groq`*[_type == "comparision_details_page" && defined(slug.current)]{
_id,
_type,
"slug": slug.current,
${header},
${footer},
${seo},
sidebar[]->{
_type,
label,
content[]{
(_type == "title_description_side_image_Section")=>{
${titleDescriptionSideImageSectionFields}
},
(_type == "join_our_news_letter")=>{
${joinOurNewsLetterSectionFields}
},
},
},
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
