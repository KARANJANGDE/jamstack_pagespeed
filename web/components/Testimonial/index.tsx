import React, { Fragment } from "react";
import clsx from "clsx";

import dynamic from "next/dynamic";
import ButtonGroup from "../CarouselCustomsArrow";
import { TestimonialsSectionType } from "@/lib/sanity/types/page";
import { PortableText } from "@portabletext/react";

const CustomImage = dynamic(() => import("../CustomImage"));
const Carousel = dynamic(() => import("../Carousel"));

const Testimonials: React.FC<TestimonialsSectionType> = (block) => {
  const {
    TestimonialsDescription,
    TestimonialsTitle,
    section_theme,
    testimonials,
  } = block || {};

  return (
    <div
      className={clsx(
        "px-0 py-10 sm:py-20",
        section_theme ?? "bg-white"
      )}
    >
      <div className="container">
        <div className="bg-testimonial-gradient p-7 md:p-12 xl:p-20 font-DM">
          <div className="block md:flex justify-between">
            <div className="w-full md:w-2/5 pb-6 md:pb-[0] pr-0 md:pr-[5em] border-b-topaz-color md:border-b-[transparent] md:border-r-topaz-color border-b md:border-r border-solid">
              <h1 className="text-white-color text-[23.625px] xl:text-[30px]  mt-2 my-[0.7em] font-DM font-bold">
                {TestimonialsTitle}
              </h1>
              <p className="text-white-color text-base">
                {TestimonialsDescription}
              </p>
            </div>
            <div
              className=" w-full md:w-3/5 relative pl-0 md:pl-24 py-0 pt-4 md:pt-0 pr-4 md:pr-0
        "
            >
              {testimonials && (
                <Carousel
                  arrows={false}
                  renderButtonGroupOutside={true}
                  customButtonGroup={
                    <ButtonGroup next={true} previous={true} goToSlide={true} />
                  }
                  autoPlay={false}
                  responsive={{
                    global: { items: 1, breakpoint: { min: 0, max: 4000 } },
                  }}
                  infinite
                >
                  {testimonials &&
                    testimonials?.map((item, index) => {
                      const { client, description } = item || {};
                      const { clientImage, clientName, clientLocation } =
                        client || {};
                      return (
                        <Fragment key={index}>
                          <div className="min-h-[10em] [&>p]:text-white-color [&>p]:font-bold [&>p]:text-[15.75px] xl:[&>p]:text-[20px]">
                            {description && (
                              <PortableText value={description.custom_rich_text} />
                            )}
                          </div>
                          <div className="flex items-center mt-4 lg:mt-12 mb-12 em:mb-4">
                            {clientImage && (
                              <CustomImage
                                block={clientImage}
                                className="w-full max-w-[3em] max-h-[3em] object-cover rounded-full"
                              />
                            )}
                            <div className="pl-[0.875em]">
                              <h1 className="text-white-color font-DM text-lg md:text-[24px] font-bold">
                                {clientName}
                              </h1>
                              <p className="text-sm md:text-base text-white-color font-light pb-0">
                                {clientLocation}
                              </p>
                            </div>
                          </div>
                        </Fragment>
                      );
                    })}
                </Carousel>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Testimonials;
