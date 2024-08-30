import { fields } from "sanity-pills";
export default{
    name:'image_title_array',
    title:'image Title Array',
    type:'object',
    fields:fields({
        our_process_image:{type:"custom_image"},
        title:{}
    }),
    preview: {
        prepare:()=>{
            return{
          title:'image Title Array'}
        }
      }  
}