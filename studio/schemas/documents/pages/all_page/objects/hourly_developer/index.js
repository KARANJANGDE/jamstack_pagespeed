import { fields } from "sanity-pills";
import { modes } from "../../../../../constant/select-options";
export default{
    name:'hourly_developer',
    title:'Hourly Developer Section',
    type:'object',
    fields:fields({

        title_Subtitle:{type: "title",},
        column_image:{ type:'custom_image'},
        price_section:{ type:'title_description',},
        price:{ type:'string'},
        disc:{type:'text'},
        contact_us_button:{type:'button',},
        background_image:{type:'custom_image'},
        section_theme:{initialValue:'bg-white',options:{ list:modes}},
    }),
    preview: {
        prepare:()=>{
            return{
          title:"Hourly Developer Section"}
        }
      }
}