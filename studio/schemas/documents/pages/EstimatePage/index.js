import { createSlugField, fields,createSlug } from "sanity-pills";
import Tabs from "sanity-plugin-tabs";
export default {
  name: "estimatePage",
  title: "Estimate Page",
  type: "document",
  inputComponent: Tabs,
  fieldsets: [
    { name: "main", title: "Main" },
    { name: "seo", title: "SEO" },
  ],
  fields: fields({
    title: { fieldset: "main" },
    header: { type: "reference", to: [{ type: "header" }], fieldset: "main" },
    developer_profile: {
      type: "array",
      of: [{ type: "developer_profile" }],
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
