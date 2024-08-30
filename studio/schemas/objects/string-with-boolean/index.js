import { fields } from "sanity-pills";
export default {
  name: "string_with_boolean",
  title: "String with Boolean",
  type: "object",
  fields: fields({
    name: {},
    boolean: { type: "boolean" },
  }),
};
