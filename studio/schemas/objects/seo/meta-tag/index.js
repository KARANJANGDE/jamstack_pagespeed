export default {
  name: "meta_tag",
  title: "Meta tag",
  type: "object",
  fields: [
    {
      name: "meta_attributes",
      title: "Meta Attributes",
      type: "array",
      of: [{ type: "meta_attribute" }],
    },
  ],
  preview: {
    select: {
      title: "attribute_name",
      meta_tags: "meta_attributes",
    },
    prepare({ meta_tags }) {
      return {
        title:
          meta_tags && meta_tags[0]?.attribute_value_string
            ? meta_tags[0]?.attribute_value_string
            : "Meta Tag",
      };
    },
  },
};
