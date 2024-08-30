import { createSlug, createSlugField, fields } from "sanity-pills";
import { modes } from "../../../../../constant/select-options";
export default {
  name: "our_blog_section",
  title: "Our Blog Section",
  type: "object",
  fields: fields({
   title_subtitle:{type:'title'},
    view_blog_button:{type:"button"},
    section_theme:{initialValue:'bg-white',options:{ list:modes}},
  }),
  preview: {
    prepare:()=>{
        return{
      title:"Our Blog Section"}
    }
  }
};