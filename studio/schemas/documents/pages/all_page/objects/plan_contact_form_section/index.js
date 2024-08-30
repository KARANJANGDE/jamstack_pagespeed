import { fields } from "sanity-pills";

export default{
    name:'plan_contact_form_section',
    title:'Plan Contact Form Section',
    type:'object',
    fields:fields({
        title:{},
        
    }),
    preview: {
        prepare:()=>{
            return{
          title:"Plan Contact Form Section"}
        }
      }
        
}