import { fields } from "sanity-pills";
import { modes } from "../../constant/select-options";
export default{
    name:'choose_jamstacky_section',
    title:'Why Choose Jamstacky Section',
    type:'document',
    fields:fields({
        title_subtitle:{type:'title'},
        media_icon:{type: "array",
        of: [{ type: "development_process" }],},
        name: { required: true },
        section_theme:{initialValue:'bg-white',options:{ list:modes}},
    }),
    preview: {
        prepare:()=>{
            return{
          title:"Why Choose Jamstacky Section"}
        }
      }
   
}