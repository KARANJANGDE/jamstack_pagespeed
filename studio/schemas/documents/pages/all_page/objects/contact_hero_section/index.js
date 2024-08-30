import { fields } from "sanity-pills";
import { modes } from "../../../../../constant/select-options";

export default {
  name: "contact_hero_section",
  title: "Contact Hero Section",
  type: "object",
  fields: fields({
    title_subtitle: { type: "title" },
    section_description: { type: "rich_text" },
    section_theme: { initialValue: "bg-white", options: { list: modes } },
  }),
  preview: {
    prepare: () => {
      return {
        title: "Contact Hero Section",
      };
    },
  },
};
