import { createSlugField, fields, createSlug } from "sanity-pills";
import Tabs from "sanity-plugin-tabs";

export default {
  name: "four_o_four_page",
  title: "404 Page",
  type: "document",
  inputComponent: Tabs,
  fieldsets: [
    { name: "main", title: "Main" },
    { name: "seo", title: "SEO" },
  ],
  fields: fields({
    title: { fieldset: "main" },
    header: { type: "reference", to: [{ type: "header" }], fieldset: "main" },
    error_section: { type: "error_image", fieldset: "main" },
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
