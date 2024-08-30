import { fields } from "sanity-pills";
import { background_classname, modes } from "../../../../../constant/select-options";
export default{
    name:'hero_section_privacy_policy',
    title:'Hero Section Privacy Policy',
    type:'object',
    fields:fields({
        title:{},
        date:{},
        section_theme:{initialValue:'bg-white',options:{ list:modes}},
        background_classname:{initialValue:'white',options:{list:background_classname}}
    }),
    preview: {
        prepare:()=>{
            return{
          title:"Hero Section Privacy Policy"}
        }
      }
}