export default {
    name: "meta_attribute",
    title: "Meta Attribute",
    type: "object",
    fields: [
      {
        name: "attribute_key",
        title: "Key",
        type: "string",
      },
      {
        name: "attribute_type",
        title: "type",
        type: "string",
        options: {
          list: ["string" , "image"],
        },
        initialValue: "string",
      },
      {
        name: "attribute_value_image",
        title: "Value",
        type: "custom_image",
        hidden: ({ parent }) =>
          !parent?.attribute_type?.toString()?.includes("image"),
      },
      {
        name: "attribute_value_string",
        title: "Value",
        type: "string",
        hidden: ({ parent }) =>
          !parent?.attribute_type?.toString()?.includes("string"),
      },
    ],
    preview: {
      select: {
        title: "attribute_key",
      },
      prepare({ title }) {
        return {
          title: title,
        };
      },
    },
  };
  