import { fields } from "sanity-pills";
import { modes } from "../../../../../constant/select-options";
export default{
    name:'more_conversation_section',
    title:'More Conversation Section',
    type:'object',
    fields:fields({

   
        title:{},
        description:{type:'text'},
        image:{type: 'custom_image'},

        section_theme:{initialValue:'bg-white',options:{ list:modes}},
    }),
    preview: {
        prepare:()=>{
            return{
          title:"More Conversation Section"}
        }
      }
        
}