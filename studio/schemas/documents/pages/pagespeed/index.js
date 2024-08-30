import { createSlugField, fields, createSlug } from "sanity-pills";
import Tabs from "sanity-plugin-tabs";

export default {
  name: "pagespeed",
  title: "Page Speed",
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
      name:'description',
      title:'Description',
      type: "rich_text",
      fieldset: "main"
    },
    {
      name:'placeholder',
      title:'Placeholder',
      type:'string',
      fieldset: "main"
    },
    {
      name:'button_label',
      title:'Button Label',
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
