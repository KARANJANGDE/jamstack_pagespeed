import { createSlugField, fields, noDuplicateRefs } from "sanity-pills";
export default {
  name: "comparision_template",
  title: "Comparision Template",
  type: "document",
  fields: fields({
    name: { required: true },
    fields: {
      type: "array",
      of: [{ type: "comparision_field" }],
    },
  }),
};
