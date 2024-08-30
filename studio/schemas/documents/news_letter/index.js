import { fields } from "sanity-pills";
import { modes } from "../../constant/select-options";


export default{
  name:'news_letter',
  title:'News Letter',
  type:'document',
fields:[
  {
    name:'title',
    title:'Title',
    type:'string'
  },
  {
    name:'description',
    title:'Description',
    type:'text'
  },
  {
    name:'input_placeholder',
    title:'Input Placeholder',
    type:'string'
  },
  {
    name:'subscribe_button',
    title:'Subscribe Button',
    type:'string'
  },
{
  name:'background_image',
  title:'Background Image',
  type:'custom_image'
},
{
  name:'section_theme',
  title:'section Theme',
  type:'string',
  initialValue:'bg-white',
  options:{ list:modes}}

]}
