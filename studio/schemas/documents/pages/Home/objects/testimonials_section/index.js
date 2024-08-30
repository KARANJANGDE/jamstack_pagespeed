import { HiInformationCircle } from "react-icons/hi";
import { modes } from "../../../../../constant/select-options";
export default {
  name: "testimonials_section",
  title: "Testimonials Section",
  type: "object",
  fields: [
    { name: "testimonials_section", type: "string" },
    { name: "TestimonialsTitle", type: "string" },
    { name: "TestimonialsDescription", type: "string" },
    // {
    //   name: "TestimonialsDetail",
    //   type: "array",
    //   of: [{ type: "description_author_array" }],
    // },
    {
      name: "section_theme",
      type: "string",
      initialValue: "bg-white",
      options: { list: modes },
    },
    {
      name: "noteAutoList3",
      type: "note",
      options: {
        icon: HiInformationCircle,
        headline: "Auto List",
        message: `All Testimonials's will be included automatically`,
        tone: "primary",
      },
    },
  ],
  preview: {
    select: {
      title: "TestimonialsTitle",
      client: "client",
    },
    prepare : ({ title , client })=>{
      return {
        title,
      }
    }
  },
};
