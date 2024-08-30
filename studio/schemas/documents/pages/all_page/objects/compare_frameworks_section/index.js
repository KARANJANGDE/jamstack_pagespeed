
import { modes } from "../../../../../constant/select-options";


export default{
  name:'compare_frameworks_section',
  title:'Compare Frameworks Section',
  type:'document',
  fields:[
    {
      name:'title_subtitle',
      title:'Title Subtitle',
      type:'title'
    },
    {
        name:'content',
        title:'Content',
        type:'rich_text'
    },
    {
      name:'type',
      title:'Type',
      type:"reference" ,to : { type : "framework_type"}
    },
    {
      name:'button_label_compare',
      title:'Button Label Compare',
      type:'string'
    },
    {
      name:'section_theme',
      title:'Section Theme',
      type:'string',
      initialValue:'bg-white',
      options:{ list:modes}
    }
  ],
}
