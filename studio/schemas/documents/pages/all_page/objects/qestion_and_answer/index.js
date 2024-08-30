import { fields } from "sanity-pills";
import { modes } from "../../../../../constant/select-options";
export default{
    name:'question_and_answer',
    title:'Question And Answer',
    type:'object',
    fields:fields({
        question:{},
        answer:{type:'rich_text'}, 
        section_theme:{initialValue:'bg-white',options:{ list:modes}},
    }),
       
       
}