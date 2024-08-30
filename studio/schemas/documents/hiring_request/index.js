import { fields } from "sanity-pills";
import { modes } from "../../constant/select-options";
export default {
  name: "hiring_request",
  title: "Hiring Request",
  type: "document",
  fields: fields({
    name: { readOnly: true },
    email: { readOnly: true },
    project_type: { readOnly: true },
    message: { type: "text", readOnly: true },
  }),
  preview: {
    select: {
      title: "name",
    },
  },
};
