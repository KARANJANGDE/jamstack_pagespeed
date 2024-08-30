import React from "react";
import { fields } from "sanity-pills";
const TitleStyle = ({ children }) => (
  <h2 style={{ background: "gray" }}>{children}</h2>
);
export default {
  name: "rich_text",
  title: "Rich Text",
  type: "object",
  fields: fields({
    custom_rich_text: {
      type: "array",
      of: [
        {
          type: "block",
          styles: [
            { title: "Normal", value: "normal" },
            { title: "Heading1", value: "h1" },
            { title: "Heading2", value: "h2" },
            { title: "Heading3", value: "h3" },
            { title: "Heading4", value: "h4" },
            { title: "Heading5", value: "h5" },
            { title: "Heading6", value: "h6" },
            { title: "Quote", value: "blockquote" },
            {
              title: "Section Heading",
              value: "section-heading",
              blockEditor: {
                render: TitleStyle,
              },
            },
          ],
          marks: {
            annotations: [
              { name: "color", title: "Color", type: "color" },
              {
                name: "link",
                type: "object",
                title: "External link",
                fields: [
                  {
                    name: "href",
                    type: "string",
                    title: "URL",
                  },
                ],
              },
            ],
          },
        },
        { type: "image" },
        { type: "title_content" },
        { type: "button" },
        { type: "custom_image" },
        { type: "title" },
        { type: "more_conversation_section" },
        { type: "title_description_side_image_Section" },
        { type: "image_title_description_array_section" },
        { type: "table" },
        { type: "read_blog_together" },
      ],
    },
  }),
};
