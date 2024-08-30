import { fields } from "sanity-pills";
import { modes } from "../../../../../constant/select-options";

export default {
  name: "contact_message_section",
  title: "Contact Message Section",
  type: "object",
  fields: fields({
    title_subtitle: { type: "title" },
    section_description: { type: "rich_text" },
    sevicesTitle:{},
    ServicesButtonArray:{type:'array',of:[{type:'string'}]},
    contactForm:{type:"contact_forms"},
    sevicesDescription: { type: "rich_text" },
    ContactMessageMainImage: { type: "custom_image" },
    imageTitleSubtitleArray:{ type: "array", of: [{ type: "icon_title_array" }] },
    section_theme: { initialValue: "bg-white", options: { list: modes } },
  }),
  preview: {
    prepare: () => {
      return {
        title: "Contact Message Section",
      };
    },
  },
};