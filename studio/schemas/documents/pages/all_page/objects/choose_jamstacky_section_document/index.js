import { fields } from "sanity-pills";
import { modes } from "../../../../../constant/select-options";
export default{
    name:'choose_jamstacky_section_document',
    title:'Why Choose Jamstacky Section Document',
    type:'reference',to:{type:'choose_jamstacky_section'},
    section_theme:{initialValue:'bg-white',fieldset:'main',options:{ list:modes}},
    preview: {
        prepare:()=>{
            return{
          title:"Why Choose Jamstacky Section Document"}
        }
      }
   
}