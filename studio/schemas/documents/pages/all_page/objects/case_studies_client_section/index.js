import { fields } from "sanity-pills";
import { modes } from "../../../../../constant/select-options";
export default{
    name:'case_studies_client_section',
    title:'Case Studies Client Section',
    type:'object',
    fields:fields({
        title_subtitle:{type:'title'},
        section_theme:{initialValue:'bg-white',options:{ list:modes}},
    }),
    preview: {
        prepare:()=>{
            return{
          title:"Case Studies Client Section"}
        }
      }
       
   
}