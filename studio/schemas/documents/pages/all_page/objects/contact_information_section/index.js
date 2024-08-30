import { fields } from "sanity-pills";
import { modes } from "../../../../../constant/select-options";

export default {
  name: "contact_information_section",
  title: "Contact Information Section",
  type: "object",
  fields: fields({
    title_subtitle: { type: "title" },
    email: { type: 'label_link' },
    phoneNumber: {},
    officeAddress: { type: "office_address" },
    officeTime: { type: "title_content" },
    contactUsCard: { type: "array", of: [{ type: "title_description_image" }] },
    section_theme: { initialValue: "bg-white", options: { list: modes } },
  }),
  preview: {
    prepare: () => {
      return {
        title: "Contact Information Section",
      };
    },
  },
};