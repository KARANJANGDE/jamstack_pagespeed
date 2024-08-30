import { fields } from "sanity-pills";
export default {
  name: "extra_text_link",
  title: "Extra Text Link",
  type: "object",
  fields: fields({
    text: {
      type: "string",
    },
    link: {
      type: "label_link",
    },
  }),
};
