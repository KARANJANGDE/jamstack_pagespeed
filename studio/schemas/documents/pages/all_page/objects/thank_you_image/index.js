import { fields } from "sanity-pills";
import { modes } from "../../../../../constant/select-options";
export default{
    name: "thank_you_image",
    title: "Thank You Image",
    type: "object",
    fields: fields({
       
        thank_you_image:{type:'custom_image'},
        description:{type:'text'},
        section_theme:{initialValue:'bg-white',options:{ list:modes}},
    }),
    preview: {
        prepare:()=>{
            return{
          title:"Thank You Image"}
        }
      }
}