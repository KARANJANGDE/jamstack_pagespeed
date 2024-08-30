import { fields } from "sanity-pills";
import { modes } from "../../../../../constant/select-options";
export default{
    name:'development_process',
    title:'Development Process',
    type:'object',
    fields:fields({
        process_image:{type:'custom_image'},
        lable:{},
        section_theme:{initialValue:'bg-white',options:{ list:modes}},
    }),
    preview: {
        prepare:()=>{
            return{
          title:"Development Process"}
        }
      }
       
}