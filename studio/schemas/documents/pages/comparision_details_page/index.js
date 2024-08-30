import { HiInformationCircle } from "react-icons/hi";
import Tabs from "sanity-plugin-tabs";

export default {
  name: "comparision_details_page",
  title: "Comparision Details Page",
  type: "document",
  inputComponent: Tabs,
  fieldsets: [
    { name: "main", title: "Main" },
    { name: "seo", title: "SEO" },
  ],

  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      fieldset: "main",
    },
    {
      name: "header",
      title: "Header",
      type: "reference",
      to: [{ type: "header" }],
      fieldset: "main",
    },

    {
      name: "sidebar",
      type: "array",
      of: [
        {
          type: "reference",
          to: [{ type: "section" }],
        },
      ],
      fieldset: "main",
    },
    {
      name: "footer",
      title: "Footer",
      type: "reference",
      to: [{ type: "footer" }],
      fieldset: "main",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 200, // will be ignored if slugify is set
        slugify: (input) =>
          input.toLowerCase().replace(/\s+/g, "-").slice(0, 200),
      },
      fieldset: "main",
    },
    {
      name: "seo",
      title: "SEO",
      type: "seo",
      fieldset: "seo",
    },
  ],
};
