import { fields } from "sanity-pills";
import { modes } from "../../../../../constant/select-options";

export default {
  name: "contact_map_section",
  title: "Contact Map Section",
  type: "object",
  fields: fields({
    title_subtitle: { type: "title" },
    mapImage: {},
    section_theme: { initialValue: "bg-white", options: { list: modes } },
  }),
  preview: {
    prepare: () => {
      return {
        title: "Contact Map Section",
      };
    },
  },
};