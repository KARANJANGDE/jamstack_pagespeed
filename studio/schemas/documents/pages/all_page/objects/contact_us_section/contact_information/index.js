import { fields } from "sanity-pills";

export default {
  name: "contact_information",
  title: "Contact Information",
  type: "object",
  fields: fields({
    title: {},
    section_title: {},
    contact_image: { type: "array", of: [{ type: "image_link_array" }] },
    media_icon: { type: "array", of: [{ type: "hover_image_link_array" }] },
    side_image: { type: "custom_image" },
  }),
  preview: {
    prepare: () => {
      return {
        title: "Contact Information",
      };
    },
  },
};
