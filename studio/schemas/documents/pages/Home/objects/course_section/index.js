import { fields } from "sanity-pills";
import { modes } from "../../../../../constant/select-options";
export default {
    name: "course_section",
    title: "Course Section",
    type: "object",
    fields: fields({
        title_subtitle:{type:'title'},
        course_img: {
            type: "array",
            of: [{type: "custom_image"}]
        },
        section_theme:{initialValue:'bg-white',options:{ list:modes}},
    }),

    preview: {
        prepare:()=>{
            return{
          title:"Course Section"}
        }
      }
    
}