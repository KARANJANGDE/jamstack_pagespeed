import { fields } from "sanity-pills";
import { modes } from "../../../../../constant/select-options";

export default {
  name: "contact_review_section",
  title: "Contact Review Section",
  type: "object",
  fields: fields({
    title_subtitle: { type: "title" },
    image_content_array: { type: "array", of: [{ type: "image_content" }] },
    section_theme: { initialValue: "bg-white", options: { list: modes } },
  }),
  preview: {
    prepare: () => {
      return {
        title: "Contact Review Section",
      };
    },
  },
};