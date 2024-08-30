import { createSlugField, fields, createSlug } from "sanity-pills";
import  Tabs  from "sanity-plugin-tabs";

export default {
  name: "thank_you_page",
  title: "Thank You Page",
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
      name:'than_you_section',
      title:'Thank you Section',
      type: "thank_you_image",
      fieldset: "main"
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
