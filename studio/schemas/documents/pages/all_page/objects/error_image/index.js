import { fields } from "sanity-pills";
import { modes } from "../../../../../constant/select-options";
export default{
    name: "error_image",
    title: "Error Image",
    type: "object",
    fields: fields({
        title:{},
        sub_title:{},
        error_image:{type:'custom_image'},
    
        section_theme:{initialValue:'bg-white',options:{ list:modes}},
    }),
    preview: {
        prepare:()=>{
            return{
          title:"404 Page"}
        }
      }
}