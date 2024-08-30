import { fields } from "sanity-pills";
export default {
    name: "custom_table",
    title: "Custom Table ",
    type: "object",
    fields:fields ({
        custom_table:{
           
                type:'table',
        },}
    ),
    preview: {
        prepare:()=>{
            return{
          title:"Custom Table"}
        }
      }
}