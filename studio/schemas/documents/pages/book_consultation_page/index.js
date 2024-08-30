import { createSlugField, fields, createSlug } from "sanity-pills";
import Tabs from "sanity-plugin-tabs";

export default {
  name: "book_consultation_page",
  title: "Book Consultation Page",
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
      of: [{ type: "book_consultation" },{type:"book_consultation_hero_section"}],
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
