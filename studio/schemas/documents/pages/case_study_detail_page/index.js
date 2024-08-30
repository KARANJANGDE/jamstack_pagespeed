import { createSlug, createSlugField, fields } from "sanity-pills";
import Tabs from "sanity-plugin-tabs";
   
export default {
  name: "case_study_detail_page",
  title: "Case Study Detail Page",
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
      fieldset: "main",
    },
    {
      name:'header',
      title:'Header',
      type: "reference", to: [{ type: "header" }],
      fieldset: "main",
    },
    {
      name: "feature_images",
      title: "Feature Images",
      type: "array",
      of: [{ type: "custom_image" }],
      fieldset: "main",
    },
    {
      name: "project_year",
      title: "Project Year",
      type: "string",
      fieldset: "main",
    },
    {
      name: "project_overview",
      title: "Project Overview",
      type: "project_overview",
      fieldset: "main",
    },
    {
      name:'Section',
      title:'Section',
            type: "array",
            of: [
              { type: "hero_section_case_study_d_page" },
              { type : 'text_image_block'},
              { type : 'text_image_blocks'},
              // { type: "build_section" },
              {type:"overview_section"}
            ],
      fieldset: "main",
    },
    {
      name:'footer',
      title:'Footer',
      type: "reference", to: [{ type: "footer" }],
      fieldset: "main",
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
      fieldset: 'seo',
    },
  ]
};