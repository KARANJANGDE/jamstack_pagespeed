import { variant } from "../../../../../constant/select-options";


export default{
  name:'comparision_frameworks',
  title:'Comparision Frameworks',
  type:'object',
  fields:[
    {
      name:'title_subtitle',
      title:'Title Subtitle',
      type:'title'
    },
    {
      name:'compare_framework_section',
      title:'Compare Framework Section',
      type:'array',
      of:[{type:'reference',to:[{type:'compare_frameworks_section'}]}]
    },
    {
      name: "is_show",
      type: "isShow",
      type: "boolean",
    },
    {
      name:"variant",
      type:"string",
      initialValue : 'primary',
      options: {list: variant}
    }
  ]
}