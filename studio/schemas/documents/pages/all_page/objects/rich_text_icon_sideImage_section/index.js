import { fields } from "sanity-pills";
import { modes } from "../../../../../constant/select-options";

export default {
  name: "rich_text_icon_sideImage_section",
  title: "Rich Text Icon Side Image Section",
  type: "object",
  fields: fields({
    title_subtitle: { type: "title" },
    section_description: { type: "rich_text" },
    icon_lable_array: { type: "array", of: [{ type: "icon_title_array" }] },
    section_image: { type: "custom_image" },
    section_theme: { initialValue: "bg-white", options: { list: modes } },
  }),
  preview: {
    prepare: () => {
      return {
        title: "Rich Text Icon Side Image Section",
      };
    },
  },
};