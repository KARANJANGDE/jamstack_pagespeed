import { Fragment } from "react";
import { ContactMapSectionType } from "@/lib/sanity/types/page";

const ContactMapSection: React.FC<ContactMapSectionType> = (block) => {
  const { mapImage } = block || {};
  return (
    <Fragment>
      <div className="contactmap-section md:my-20 my-20 ">
        <div className="container">
          <div className="contact-map [&>div>iframe]:w-full [&>div>iframe]:rounded-lg [&>div>iframe]:h-[20em] md:[&>div>iframe]:h-[30em]">
            {mapImage && <div dangerouslySetInnerHTML={{ __html: mapImage }} />}
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default ContactMapSection;
