import { fields } from "sanity-pills";

export default {
  name: "client",
  title: "Client",
  type: "document",
  fields: fields({
    clientName: {},
    company: { type: "label_link" },
    clientImage: { type: "custom_image" },
    clientLocation: {},
    socialIcon: { type: "array", of: [{ type: "custom_image" }] },
  }),
  preview : {
    select :{
        title : "clientName"
    }
  }
};