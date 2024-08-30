
import { fields } from "sanity-pills";
export default{
    name:'all_customer_reviews',
    title:'All Customer Reviews',
    type:'object',
    fields:fields({
      review:{type:'rich_text'},
      customer_image:{type:'custom_image'},
      rating:{type:'rating',options:{ stars: 5}},
    }),
    preview:{
        prepare:()=>{
            return{
          title:"All Customer Reviews"}
        }
      }
}