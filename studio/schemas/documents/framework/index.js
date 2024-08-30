import {
  createImageField,
  createSlugField,
  fields,
  noDuplicateRefs,
} from "sanity-pills";
export default {
  name: "framework",
  title: "Framework",
  type: "document",
  fields: fields({
    name: { required: true },

    slug: createSlugField({ source: "name", prefix: "frameworks" }),
    image: { type: "custom_image" },
    content_summary: { type: "array", of: [{ type: "string" }] },
    

    type: {
      type: "framework_type_with_template",
      required: true,
    },
    sidebar: {type: "array",  of: [
      {
        type: "reference",
        to: [{ type: "section" }],
      },
    ],},
    content: { type: "content" },
    comparision_frameworks:{  type: 'comparision_frameworks' },
    
  }),
};
