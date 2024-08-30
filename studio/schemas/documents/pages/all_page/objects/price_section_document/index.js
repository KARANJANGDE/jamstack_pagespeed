import { modes } from "../../../../../constant/select-options";

export default {
  name: "price_section_document",
  title: "price_section",
  type: "reference",
  to: { type: "price_section" },
  section_theme: { initialValue: "bg-white", options: { list: modes } },
  preview: {
    prepare: () => {
      return {
        title: "price_section Document",
      };
    },
  },
};
