import { ContactReviewSectionType } from "@/lib/sanity/types/page";
import dynamic from "next/dynamic";
const RichText = dynamic(() => import("../RichText"));
const TitleSubtitle = dynamic(() => import("../TitleSubtitle"));
const CustomImage = dynamic(() => import("../CustomImage"));

const ContactReviewSection: React.FC<ContactReviewSectionType> = (block) => {
  const { title_subtitle, image_content_array } = block || {};
  return (
    <div className="contact-clientreview-section mt-32 mb-20 hidden md:block">
      <div className="container">
        <div className="contact-clientreview-inner">
          <div className="contact-clientreview-title w-full text-center mb-6 [&>div>h5]:text-base [&>div>h5]:font-bold  [&>div>h5]:tracking-[0.1875em] [&>div>h5]:uppercase [&>div>h5]:text-dark-pink [&>div>h5]:text-center [&>div]:max-w-full">
            {title_subtitle && <TitleSubtitle block={title_subtitle} />}
          </div>

          <div className="contact-clientreview-content bg-[url(/contact-us-map-bg.png)] bg-no-repeat bg-clientMap bg-clientMapPos min-h-[40em] relative">
            <ul className="flex  [&>*:first-child]:top-[20%] [&>*:first-child]:left-[44%]  [&>*:nth-child(2)]:top-[14%] [&>*:nth-child(2)]:left-[70%] [&>*:nth-child(3)]:top-[54%] [&>*:nth-child(3)]:left-[78%] [&>*:nth-child(4)]:top-[75%] [&>*:nth-child(4)]:left-[83%] [&>*:nth-child(5)]:top-[12%] [&>*:nth-child(5)]:left-[19%] [&>*:nth-child(6)]:top-[46%] [&>*:nth-child(6)]:left-[16%] [&>*:nth-child(7)]:top-[79%] [&>*:nth-child(7)]:left-[22%]   [&>*:nth-child(1)]:z-[4] [&>*:nth-child(2)]:z-[3] [&>*:nth-child(3)]:z-[2] [&>*:nth-child(4)]:z-[1] [&>*:nth-child(5)]:z-[3] [&>*:nth-child(6)]:z-[2] [&>*:nth-child(7)]:z-[1] ">
              {image_content_array?.map((item, index) => {
                const { section_image, card_rich_text } = item || {};
                return (
                  <li key={index} className="absolute group">
                    <div className="client-profile drop-shadow-3xl max-w-[4em] rounded-full mx-auto z-[3] relative ">
                      {section_image && <CustomImage block={section_image} />}
                    </div>

                    <div className="client-review  z-[1] group:hover group-hover:flex hidden p-4 w-auto min-w-[15em] absolute left-[-5.45em] top-[3em] justify-center mx-auto shadow-client-box rounded-[1em]   bg-white-color   ">
                      <div className="client-reviewinfo text-center relative [&>h4]:text-[1.25em] [&>h4]:font-bold [&>h4]:text-dark-blue [&>h4]:mb-2 [&>p]:text-sm [&>p]:font-light [&>p]:text-[#3c405f] before:content-[''] before:bg-[url(/client-coma-image.png)] before:bg-no-repeat before:bg-clientComa before:w-[1em] before:h-[1em] before:absolute before:left-0 before:top-0">
                        {card_rich_text && <RichText block={card_rich_text} />}
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactReviewSection;
