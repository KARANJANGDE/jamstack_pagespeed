import { createImageField, fields } from "sanity-pills";
export default {
  name: "string_with_icon",
  title: "String with Icon",
  type: "object",
  fields: fields({
    name: {},
    image: createImageField({}),
  }),
};
