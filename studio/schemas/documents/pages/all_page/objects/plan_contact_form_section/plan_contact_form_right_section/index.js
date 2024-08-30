import { fields } from "sanity-pills";

export default{
    name:'plan_contact_form_right_section',
    title:'Plan Contact Form Right Section',
    type:'object',
    fields:fields({
        title:{},
        subtitle:{},
        email_address_title:{},
        email_address_field:{},
        password_title:{},
        password_field:{},
        first_name_title:{},
        first_name_field:{},
        phone_number_title:{},
        city_title:{},
        city_field:{},
        country_title:{},
        country_field:{type:'array',of:[{type:'string'}]},
        company_name_title:{},
        company_name_field:{},
        confirm_password_title:{},
        confirm_password_field:{},
        last_name_title:{},
        last_name_field:{},
        street_address_title:{},
        street_address_field:{},
        state_title:{},
        state_field:{type:'array',of:[{type:'string'}]},
        zipcode_title:{},
        zipcode_field:{},
        continue_button:{type:'button'}
    }),
    preview: {
        prepare:()=>{
            return{
          title:"Plan Contact Form Right Section"}
        }
      }
        
}