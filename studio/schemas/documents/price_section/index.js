import { fields } from "sanity-pills";
import Tabs from "sanity-plugin-tabs";

import { modes } from "../../constant/select-options";
export default {
  name: "price_section",
  title: "Price Section",
  type: "document",
  inputComponent: Tabs,
  fieldsets: [
    { name: "main", title: "Main" },
    { name: "seo", title: "SEO" },
  ],
  fields: fields({
    title_subtitle: { type: "title", fieldset: "main" },
    content:{type:"rich_text", fieldset: "main"},
    pricing_section: { type: 'pricing', fieldset: "main" },
    section_theme: { initialValue:'bg-white',fieldset:'main',options:{ list:modes} },
  }),
  preview: {
    prepare: () => {
      return {
        title: "Price Section",
      };
    },
  },
};
