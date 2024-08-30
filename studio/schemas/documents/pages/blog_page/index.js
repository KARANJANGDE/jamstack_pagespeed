
import Tabs from "sanity-plugin-tabs";

export default {
  name: "blog_page",
  title: "Blog Page",
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
            { type: "blog_hero_section" },
            { type: "feature_blog_section" },
            { type: "title_description_side_image_Section" },
            { type: "our_blog_section" },
            { type: "news_letter_section_document" },
            { type: "blog_category"}
          ],
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
