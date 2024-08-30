import clsx from "clsx";
import { useState } from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";
import { FAndQSectionType } from "@/lib/sanity/types/page";
import dynamic from "next/dynamic";
import { FAQPageJsonLd } from "next-seo";
const RichText = dynamic(() => import("../RichText"));

const FAQSection: React.FC<FAndQSectionType> = ({
  question_and_answer,
  title,
  section_theme,
  variant,
}) => {
  const [currActiveIndex, setCurrActiveIndex] = useState<number[]>([]);

  return (
    <div
      className={clsx(
        "pb-8 md:pb-14 pt-4",
        section_theme ?? "bg-white",
        variant ?? "primary"
      )}
    >
      <FAQPageJsonLd
        mainEntity={(question_and_answer || [])?.map((i) => ({
          questionName: i.question,
          acceptedAnswerText: i.answerString || "",
        }))}
      />
      <div className="container">
        <h4 className="text-Cerise-red max-w-full sm:max-w-[70%] mx-auto mb-2 md:mb-[0.7em] xl:mb-6 text-center text-[20px] em:text-[22px] md:text-[26px] xl:text-[30px] font-medium font-DM">
          {title}
        </h4>
        <div className="max-w-[1054px] mx-auto">
          <ul className="block">
            {question_and_answer?.map((item, index) => {
              const { answer } = item || {};
              return (
                <li
                  key={index}
                  className="mx-[0] sm:mx-6 selection:bg-[transparent]"
                >
                  <Accordion
                    allowZeroExpanded={true}
                    allowMultipleExpanded={true}
                    className="mb-[1.25em]"
                  >
                    <AccordionItem>
                      <AccordionItemHeading
                        className={clsx(
                          "relative cursor-default sm:cursor-pointer border-b-[#222549] border-b-[1px] border-opacity-20",
                          {
                            "border-b-[transparent] border-b-[0px] border-opacity-0":
                              currActiveIndex.includes(index),
                          }
                        )}
                      >
                        <AccordionItemButton>
                          <h6
                            className={clsx(
                              "relative text-dark-blue text-[15.75px] xl:text-[18px] font-bold pr-[3rem] sm:pr-[4rem]  font-DM  after:bg-[url(/downArrow.svg)] after:absolute after:top-[50%] after:translate-y-[-50%] after:right-[4%] md:after:right-[2%] after:w-full after:h-[1.1em] after:z-10 after:bg-no-repeat after:bg-[100%] after:transition-all after:duration-[0.2s]  py-[0.85rem] ",
                              {
                                "after:!bg-[url(/upArrow.svg)] after:!rotate-0":
                                  currActiveIndex.includes(index),
                              }
                            )}
                            onClick={() =>
                              setCurrActiveIndex((state) => {
                                if (state.includes(index)) {
                                  return state.filter((i) => i != index);
                                } else {
                                  return [...state, index];
                                }
                              })
                            }
                          >
                            {item?.question}
                          </h6>
                        </AccordionItemButton>
                      </AccordionItemHeading>
                      <AccordionItemPanel
                        className={clsx(
                          "mt-3.5 [&>p]:text-sm xl:[&>p]:text-base [&>p]:text-dark-blue [&>p]:font-DM [&>p]:opacity-70 border-b-[#222549] border-b-[1px] border-opacity-20"
                        )}
                      >
                        {answer && <RichText block={answer} />}
                      </AccordionItemPanel>
                    </AccordionItem>
                  </Accordion>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};
export default FAQSection;
