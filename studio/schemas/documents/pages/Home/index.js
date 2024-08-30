
import Tabs from "sanity-plugin-tabs";
import { modes } from "../../../constant/select-options";

export default {
  name: "home",
  title: "Home",
  type: "document",
  inputComponent: Tabs,
  fieldsets: [
    { name: "main", title: "Main" },
    { name: "seo", title: "SEO" },
  ],

  fields:[
    {
      name:'title',
      title:'Title',
      type:'string',
      fieldset: "main"
    },
    {
      name:'header',
      title:'Header',
      type: "reference", to: [{ type: "header" }],
      fieldset: "main"
    },
    {
      name:'section',
      title:'Section',
      type: "array",
      of: [
        { type: "home_hero_section" },
        { type: "featurd_case_study" },
        { type: "section_course_title" },
        // { type: "course_section" },
        { type: "price_section_document" },
        { type: "case_study" },
        { type: "blog_title_section" },
        { type: "testimonials_section" },
        {type:'comparision_frameworks'},
        {type:"title_image_array_section"},
        {type:"customer_reviews"},
      ],
      fieldset: "main"
    },
    {
      name:'section_theme',
      title:'Section Theme',
      initialValue:'bg-white',
      type:'string',
      fieldset: "main",
      options:{ list:modes}
    },
    {
      name:'footer',
      title:'Footer',
      type: "reference", to: [{ type: "footer" }],
      fieldset: "main"
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 200, // will be ignored if slugify is set
        slugify: input => input
          .toLowerCase()
          .replace(/\s+/g, '-')
          .slice(0, 200)
      },
      fieldset: 'main'
  },
    {
      name:'seo',
      title:'SEO',
      type:'seo',
      fieldset: "seo"
    },
  ]
};
