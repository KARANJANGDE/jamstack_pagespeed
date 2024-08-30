import { fields } from "sanity-pills";
import { list } from "../../constant/select-options";
export default {
  name: "link",
  title: "Link",
  type: "object",
  fields: fields({
   title:{},
   URL:{},
   linkTarget :{initialValue: 'default',options: {list: list}}
  }),
};