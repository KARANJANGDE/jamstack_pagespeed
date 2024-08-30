import { fields } from "sanity-pills";
import { modes } from "../../../../../../constant/select-options";

export default {
  name: "contact_forms",
  title: "Contact Forms",
  type: "object",
  fields: fields({
    title_subtitle: { type: "title" },
    companyName: {},
    companyName_placeholder: {},
    Name: {},
    name_placeholder: { },
    email: {},
    email_placeholder: {  },
    phone_number: {},
    phone_number_placeholder: {},
    message: {},
    message_placeholder: { type: "text" },
    section_theme: { initialValue: "bg-white", options: { list: modes } },
  }),
  preview: {
    prepare: () => {
      return {
        title: "Contact Forms",
      };
    },
  },
};
