import { fields } from "sanity-pills"
import { modes } from "../../../../../../constant/select-options"
export default{
    name:'hire_team',
    title:'Hire Team',
    type:'object',
    fields:fields({
        title:{},
        hire_team_description:{type:'rich_text'},
        hire_team_image:{type:'custom_image'},
        section_theme:{initialValue:'bg-white',options:{ list:modes}},
    }),
    preview: {
        prepare:()=>{
            return{
          title:"Hire Team"}
        }
      }

    
   
}