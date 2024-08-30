import { createSlugField, fields } from "sanity-pills";
import { variant } from "../../constant/select-options";

export default {
  name: "framework_type",
  title: "Type",
  type: "document",
  fields: fields({
    name: { required: true },
    content: { type: "rich_text" },
    variant :{initialValue : 'primary',options: {list: variant}},
    seo_postfix: { required: true },
    slug: createSlugField({ source: "name", prefix: "frameworks" }),
  }),
};