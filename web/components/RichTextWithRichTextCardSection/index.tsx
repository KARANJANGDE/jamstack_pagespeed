import clsx from "clsx";
import { RichTextWithRichTextCardSectionType } from "@/lib/sanity/types/page";
import dynamic from "next/dynamic";
const RichText = dynamic(() => import("../RichText"));

const RichTextWithRichTextCardSection: React.FC<
  RichTextWithRichTextCardSectionType
> = (block) => {
  const { definition_card_array, definition_rich_text, section_theme } =
    block || {};
  return (
    <div className={clsx("px-0 py-8 md:py-16", section_theme ?? "bg-white")}>
      <div className="container">
        <div
          className="
                  [&>h2]:font-medium [&>h2]:leading-[1.5em] [&>h2]:text-dark-blue [&>h2]:text-[28px] sm:[&>h2]:text-[42px] emd:[&>h2]:text-[52px] xl:[&>h2]:text-[60px] [&>h2]:mb-[0.25em] [&>h2]:font-DM
                  [&>h3]:font-medium [&>h3]:leading-[1.5em] [&>h3]:text-dark-blue [&>h3]:text-[3.75em] [&>h3]:mb-1
                  [&>h4]:font-medium [&>h4]:leading-[1.5em] [&>h4]:text-dark-blue [&>h4]:text-[3.75em] [&>h4]:mb-1
                  [&>h5]:font-medium [&>h5]:leading-[1.5em] [&>h5]:text-dark-blue [&>h5]:text-[3.75em] [&>h5]:mb-1
                  [&>h6]:font-medium [&>h6]:leading-[1.5em] [&>h6]:text-dark-blue [&>h6]:text-[3.75em] [&>h6]:mb-1
                  [&>p]:text-sm sm:[&>p]:text-base xl:[&>p]:text-lg [&>p]:font-normal [&>p]:leading-[1.75em] [&>p]:tracking-wide [&>p]:text-dark-blue [&>p]:mb-6 [&>p]:p-0 [&>h2>strong>:nth-child(1)]:text-Cerise-red [&>h2>strong>:nth-child(2)]:text-[#3bafde] [&>p]:font-Inter  [&>p]:opacity-70
                  [&>h2>strong>:nth-child(3)]:text-[#95f9ed] [&>h2>strong>span]:uppercase [&>img]:my-12 [&>img]:max-w-full md:[&>img]:max-w-[80%] [&>img]:mx-auto
                  "
        >
          {definition_rich_text && <RichText block={definition_rich_text} />}
          <div className="mt-8 md:mt-16">
            <ul
              className=" max-w-full md:max-w-[90%] lg:max-w-[80%] block md:grid grid-cols-[1fr_1fr_1fr] gap-2.5 mx-auto my-0
                      [&>*:nth-child(1)]:bg-[#00f5c4] [&>*:nth-child(2)]:bg-pumpkin-color [&>*:nth-child(3)]:bg-carissma-color
                      "
            >
              {definition_card_array?.map((item, index) => {
                return (
                  <li
                    key={index}
                    className="flex-[0_0_30%] min-h-auto  md:min-h-[13.5em] mx-0 my-0 px-6 py-[1.125em] rounded-[1em_1em_0_0] mb-4 md:mb-0
                                  last:max-w-full last:text-center last:bg-dark-pink last:min-h-[auto] last:col-[1/span_3] last:mt-0 last:mx-[0em] last:my-0 last:px-6 last:py-6 last:rounded-[0_0_0.625em_0.625em] [&>h5]:text-[18px] md:[&>h5]:text-[20px] [&>h5]:text-center [&>h5]:mb-[0.5em] [&>h5]:text-dark-blue [&>p]:text-center [&>p]:text-[13px]  [&>p]:pb-4 [&>p]:text-[#000000b3] [&>p]:font-medium [&>p]:font-Inter
                                  last:[&>h2]:!text-white-color last:[&>h2]:font-bold last:[&>h2]:tracking-wider last:[&>h2]:!m-0
                                  last:[&>h3]:!text-white-color last:[&>h3]:font-bold last:[&>h3]:tracking-wider last:[&>h3]:!m-0
                                  last:[&>h4]:!text-white-color last:[&>h4]:font-bold last:[&>h4]:tracking-wider last:[&>h4]:!m-0
                                  last:[&>h5]:!text-white-color last:[&>h5]:font-bold last:[&>h5]:tracking-wider last:[&>h5]:!m-0 [&>h5]:font-DM last:[&>h5]:!text-[26px] md:last:[&>h5]:!text-[34px]
                                  last:[&>h6]:!text-white-color last:[&>h6]:font-bold last:[&>h6]:tracking-wider last:[&>h6]:!m-0
                                  "
                  >
                    {item && <RichText block={item} key={index} />}
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
export default RichTextWithRichTextCardSection;
