import { fields } from "sanity-pills";
export default{
    name:'title_description',
    title:'Title',
    type:'object',
    fields:fields({
        title:{},
        description:{ type:'text'}
    })
       
}