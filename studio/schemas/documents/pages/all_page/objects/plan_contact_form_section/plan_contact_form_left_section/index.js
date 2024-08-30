import { fields } from "sanity-pills";

export default{
    name:'plan_contact_form_left_section',
    title:'Plan Contact Form Left Section',
    type:'object',
    fields:fields({
        title:{},
        main_title:{},
        description:{},
        testimonials_card:{type:'array',of:[{type:'description_author_array'}]}
    }),
    preview: {
        prepare:()=>{
            return{
          title:"Plan Contact Form Left Section"}
        }
      }
        
}