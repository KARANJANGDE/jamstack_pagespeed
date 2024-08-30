import { ContentType, SidebarType } from "@/lib/sanity/types";
import React from "react";
import SidebarTitleDescriptionSideImageSection from "./SidebarTitleDescriptionSideImageSection";
import SidebarJoinOurNewsLetter from "./SidebarJoinOurNewsLetter";

const SidebarSection: React.FC<{ block: SidebarType }> = ({ block }) => {
  
  if (!block?.content) {
    return null;
  }
  return (
    <div className="comaprison-sidebar-section">
      {block?.content.map((i, index) => {
        switch (i._type) {
          case "title_description_side_image_Section":
            return <SidebarTitleDescriptionSideImageSection key={index} block={i} />;
          case "join_our_news_letter":
            return <SidebarJoinOurNewsLetter block={i} key={index}/>;
          default:
            return null;
        }
      })}
    </div>
  );
};

export default SidebarSection;
