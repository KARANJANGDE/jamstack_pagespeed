import { createSlugField, fields ,createSlug} from "sanity-pills";
import Tabs from "sanity-plugin-tabs";

export default {
  name: "hireDedicatedPage",
  title: "Hire Dedicated Page",
  type: "document",
  inputComponent: Tabs,
  fieldsets: [
    { name: "main", title: "Main" },
    { name: "seo", title: "SEO" },
  ],
  fields: fields({
    title: { fieldset: "main" },
    header: { type: "reference", to: [{ type: "header" }], fieldset: "main" },
    sections: {
      type: "array",
      of: [
        { type: "image_title_description_array_section" },
        { type: "jamstack_development" },
        { type: "technology_section" },
        { type: "price_section" },
        { type: "hourly_developer" },
        { type: "news_letter_section_document" },
        { type: "choose_jamstacky_section" },
        { type: "hiring_model_section" },
        { type: "f_and_q_section" },
        { type: "case_studies_client_section" },
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
      fieldset: 'main'
    },
    seo: { type: "seo", fieldset: "seo" },
  }),
};
