import { fields } from "sanity-pills";
import { modes, variant } from "../../../../../constant/select-options";
export default {
  name: "f_and_q_section",
  title: "F&Q Section",
  type: "object",
  fields: fields({
    title: {},
    question_and_answer: {
      type: "array",
      of: [{ type: "question_and_answer" }],
    },
    section_theme: { initialValue: "bg-white", options: { list: modes } },
    variant :{initialValue : 'primary',options: {list: variant}}
  }),
  preview: {
    prepare: () => {
      return {
        title: "F&Q Section",
      };
    },
  },
};
