import { fields } from "sanity-pills";
import { modes } from "../../../../../constant/select-options";
export default{
    name:'jamstack_development',
    title:'Jamstack Development Section',
    type:'object',
    fields:fields({
      title_subtitle: { type: "title" },
        image: { type: "array", of: [{ type: "custom_image" }] },
        title_description:{type:'array',of:[{type:'title_description'}]},
        section_theme:{initialValue:'bg-white',options:{ list:modes}},
    }),
    preview: {
        prepare:()=>{
            return{
          title:"Jamstack Development Section"}
        }
      }
       
}