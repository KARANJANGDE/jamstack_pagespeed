import { createSlugField, fields } from "sanity-pills";

export default {
  name: "framework_type_with_template",
  title: "Type",
  type: "object",
  fields: fields({
    type: {
      type: "reference",
      to: [{ type: "framework_type" }],
      required: true,
    },
    template: {
      type: "reference",
      to: [{ type: "comparision_template" }],
      required: true,
    },
  }),
 
};
