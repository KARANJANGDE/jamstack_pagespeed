import { createSlugField, fields, createSlug } from "sanity-pills";
import Tabs from "sanity-plugin-tabs";
import { modes } from "../../../constant/select-options";
export default {
  name: "comparision_main_page",
  title: "Comparision Main Page",
  type: "document",
  inputComponent: Tabs,
  fieldsets: [
    { name: "main", title: "Main" },
    { name: "seo", title: "SEO" },
  ],
  fields: fields({
    title: {
      fieldset: "main",
    },
    header: { type: "reference", to: [{ type: "header" }], fieldset: "main" },
    sections: {
      type: "array",
      of: [
        { type: "title_description_side_image_Section" },
        { type: "news_letter_section_document" },
        {type:"title_blog"},
        {type:'comparision_frameworks'},
      ],
      fieldset: "main",
    },
    footer: { type: "reference", to: [{ type: "footer" }], fieldset: "main" },
    slug: {
      type: "slug",
      options: {
        source: "title",
        slugify: createSlug,
      },
      required: true,
      fieldset: "main",
    },
    seo: { type: "seo", fieldset: "seo" },
  }),
};
