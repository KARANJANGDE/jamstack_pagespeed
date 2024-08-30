import { createImageField, fields } from "sanity-pills";
export default {
  name: "string_with_tooltip",
  title: "String with Tooltip",
  type: "object",
  fields: fields({
    name: {},
    tooltip_name: { type: "rich_text" },
    tooltip_image: createImageField({}),
  }),
};