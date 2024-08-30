import { fields } from "sanity-pills";
import { modes, variant } from "../../../../../constant/select-options";
export default {
  name: "title_description_side_image_Section",
  title: "Title Description Side Image Section",
  type: "object",
  fields: fields({
    title_subtitle: { type: "title" },
    desc:{type:'rich_text'},
    side_image:{type:"custom_image"},
    background:{options:{
      list:[{
        title:'white',
        value:'background-white'
      },
    {
      title:'purple',
      value:'background-purple'
    }]
    }},
    section_theme:{initialValue:'bg-white',options:{ list:modes}},
    variant :{initialValue : 'primary',options: {list: variant}}
  }),
  preview: {
    prepare:()=>{
        return{
      title:"Title Description Side Image Section"}
    }
  }
};