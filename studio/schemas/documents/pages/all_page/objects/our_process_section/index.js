import { fields } from "sanity-pills";
import { modes, variant } from "../../../../../constant/select-options";
export default{
    name:'our_process_section',
    title:'Our Process Section',
    type:'object',
    fields:fields({
        title_subtitle:{type:'title'},
        progress_bar: { type: "boolean" },
        image_title_array:{type: "array",
        of: [{ type:'image_title_array' }],},
        section_theme:{initialValue:'bg-white',options:{ list:modes}},
        variant :{initialValue : 'primary',options: {list: variant}}
    }),
    preview: {
        prepare:()=>{
            return{
          title:"Our Process Section"}
        }
      }
        
}