import { fields } from "sanity-pills";
import { modes } from "../../../../../../constant/select-options";

export default {
  name: "office_address",
  title: "Office Address",
  type: "object",
  fields: fields({
    addressTitle: { type: "title" },
    addressDescription:{type: "rich_text"},
    directions: { type: "label_link" },
    section_theme: { initialValue: "bg-white", options: { list: modes } },
  }),
  preview: {
    prepare: () => {
      return {
        title: "Office Address",
      };
    },
  },
};