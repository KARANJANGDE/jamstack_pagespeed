import { fields } from "sanity-pills";
import { modes } from "../../../../../constant/select-options";
export default{
    name:'news_letter_section_document',
    title:'News Letter Section Document',
    type:'reference',to:{type:'news_letter'},
    section_theme:{initialValue:'bg-white',options:{ list:modes}},
    preview: {
        prepare:()=>{
            return{
          title:'News Letter Section Document'}
        }
      }
   
}