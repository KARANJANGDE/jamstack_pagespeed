import { createSlugField, fields,createSlug } from "sanity-pills";
import Tabs from "sanity-plugin-tabs";
import { modes } from "../../../constant/select-options";
export default {
  name: "case_study_page",
  title: "CaseStudyPage",
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
    Section: {
      type: "array",
      of: [
        { type: "hero_section_case_study_d_page" },
        { type: "casestudy_bestwork_section" },
        {type:"title_description_side_image_Section"}
      ],
      fieldset: "main",
    },
    section_theme:{initialValue:'bg-white',fieldset:'main',options:{ list:modes}},
    footer: { type: "reference", to: [{ type: "footer" }], fieldset: "main" },
    slug: {
      type: "slug",
      options: {
        source: "title",
        slugify: createSlug,
      },
      required: true,
      fieldset: 'main'
    },
    seo: { type: "seo", fieldset: "seo" },
  }),
};
