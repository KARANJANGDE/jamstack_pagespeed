import { fields } from "sanity-pills";
export default {
  name: "title_description_image",
  title: "Title Description Image",
  type: "object",
  fields: fields({
    section_title: { type: "title"},
    section_description: { type: "rich_text" },
    section_image: { type: "custom_image" },
  }),
  preview: {
    prepare: () => {
      return {
        title: "Title Description Image",
      };
    },
  },
};