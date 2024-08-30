import { fields } from "sanity-pills";
export default {
  name: "message_send_request",
  title: "Message Send Request",
  type: "document",
  fields: fields({
    companyName: { readOnly: true },
    name: { readOnly: true },
    email: { readOnly: true },
    phone_number: { readOnly: true },
    project_type: { readOnly: true },
    message: { type: "text", readOnly: true },
  }),
  preview: {
    select: {
      title: "name",
    },
  },
};
