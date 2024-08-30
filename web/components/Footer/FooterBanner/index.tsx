import CustomImage from "../../CustomImage";
import Button from "../../Button";
import LabelLink from "../../LabelLink";
import { FooterBanner } from "@/lib/sanity/types";
import { PortableText } from "@portabletext/react";

const FooterBanner: React.FC<{ block: FooterBanner }> = ({ block }) => {
  const { banner_title, button, content, extra_text, images } = block || {};
  const { link, text } = extra_text || {};

  return (
    <div>
      <div className="container">
        <div className="block md:flex  justify-between items-center max-w-[95%] em:max-w-full mx-auto font-DM ">
          <div className=" w-full max-w-full md:max-w-[65%] [&>h5]:text-center em:[&>h5]:text-left">
            <p className="leading-[1.25em] font-medium text-title-blue-shade mb-4 pb-0 text-[23px] xl:text-[24px] font-DM text-center em:text-left">
              {banner_title}
            </p>
            <div className="[&>p]:text-[15px] xl:[&>p]:text-[16px] [&>p]:leading-[150%] [&>p]:font-normal [&>p]:text-menu-title-text [&>p]:mb-4 [&>p]:p-0 [&>p]:text-center em:[&>p]:text-left">
              {content && <PortableText value={content.custom_rich_text} />}
            </div>
          </div>
          <div>
            <ul className="flex justify-center em:justify-start md:justify-center mb-4">
              {images?.map((item, index) => {
                return (
                  <li key={index}>
                    <div className="[&>img]:max-w-[9em]">
                      <CustomImage block={item} />
                    </div>
                  </li>
                );
              })}
            </ul>
            <div
              className="flex justify-center em:justify-start md:justify-center
            [&>a]:bg-dark-blue [&>a]:text-white [&>a]:text-[12.6px] xl:[&>a]:text-[18px] [&>a]:font-bold [&>a]:leading-[1.25em] [&>a]:cursor-pointer [&>a]:px-[1.625em] [&>a]:py-[1.125em] [&>a]:rounded-[3.5em]
            hover:[&>a]:bg-Cerise-red [&>a]:hover:text-white-color 
            "
            >
              {button && <Button block={button} />}
            </div>

            <div>
              <span
                className="flex justify-center em:justify-start md:justify-center text-[1em] leading-[1.25em] font-normal text-menu-title-text mt-4
                [&>a]:inline-flex  [&>a]:text-dark-pink hover:[&>a]:text-dark-blue  [&>a]:underline  [&>a]:pl-1
              "
              >
                {text} {link && <LabelLink block={link} />}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterBanner;
