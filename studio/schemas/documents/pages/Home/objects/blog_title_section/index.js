import { fields } from "sanity-pills";
import { modes } from "../../../../../constant/select-options";
export default {
    name: "blog_title_section",
    title: "Blog Title Section",
    type: "object",
    fields: fields({
      title_subtitle:{type:'title'},
        blog_button:{type:'button'},
        section_theme:{initialValue:'bg-white',options:{ list:modes}},
    }
    ),
    preview: {
        prepare:()=>{
            return{
          title:"Blog Title Section"}
        }
      }
} 
