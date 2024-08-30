import { fields } from "sanity-pills";
export default {
  name: "join_our_news_letter",
  title: "Join Our News Letter",
  type: "object",
  fields: fields({
    title_description: { type: "title_description" },
    input_placeholder: {},
    send_button: { type: "button" },
  }),
  preview: {
    prepare: () => {
      return {
        title: "Join Our News Letter",
      };
    },
  },
};
