 import Tabs from "sanity-plugin-tabs";
// export default {
//   name: "customer_reviews",
//   title: "Customer Reviews",
//   type: "object",
//   inputComponent: Tabs,
//   fieldsets: [
//     { name: "main", title: "Main" },
//     { name: "seo", title: "SEO" },
//     { name: "sidebar", title: "Sidebar" },
//   ],
//   fields: [
//     {
//       name: "title",
//       title: "Title",
//       type: "string",
//       fieldset: "main",
//     },
//     {
//       name: "image",
//       title: "Image",
//       type: "custom_image",
//       fieldset: "main",
//     },
//     {
//       name: "reviews",
//       title: "Reviews",
//       type: "array",
//       of: [{type:'object',to:[{type:'all_customer_reviews'}]}
//     ],
//       fieldset: "main",
//     },
//     {
//       name: "contant",
//       title: "Contant",
//       type: "array",
//       of: [
//         {
//           type: "section",
//         },
//       ],
//       fieldset: "sidebar",
//     },
//   ],
// };

import { fields } from "sanity-pills";
export default{
    name:'customer_reviews',
    title:'Customer Reviews',
    type:'object',
    fields:fields({
      title:{},
      reviews:{type:'array',of:[{type:'all_customer_reviews'}]},
      section_image:{type:'custom_image'},
    }),
    preview:{
        prepare:()=>{
            return{
          title:"Customer Reviews"}
        }
      }
}
