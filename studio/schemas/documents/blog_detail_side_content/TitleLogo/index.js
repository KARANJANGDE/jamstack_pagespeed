import { fields } from "sanity-pills";
export default {
  name: "title_logo_array",
  title: "Title Logo Array",
  type: "object",
  fields: fields({
    title: {},
    logo_array: {
      type: "array",
      of: [{ type: "custom_image" }],
    },
  }),
  preview: {
    prepare: () => {
      return {
        title: "Title Logo Array",
      };
    },
  },
};
