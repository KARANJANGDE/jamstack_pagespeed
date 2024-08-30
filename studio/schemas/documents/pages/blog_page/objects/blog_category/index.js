
import {HiInformationCircle} from 'react-icons/hi'

export default {
  name: "blog_category",
  title: "Blog Category",
  type: "document",
  fields: [
  {
    title:"category",
    name:"Category",
    type:"string",
  },
  {
    name: "noteAutoList3",
    type: "note",
    options: {
      icon: HiInformationCircle,
      headline: "Auto List",
      message: `Articles's will be included automatically`,
    },
  },
]
};