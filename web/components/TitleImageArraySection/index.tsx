import React, { Fragment } from "react";
import TitleSubtitle from "../TitleSubtitle";
import CustomImage from "../CustomImage";
import { TitleImageArraySectionType } from "@/lib/sanity/types/page";

const TitleImageArraySection: React.FC<TitleImageArraySectionType> = (
  block
) => {
  const { title_subtitle, image_array } = block || {};

  const repeatedImages = image_array
    ? [...image_array, image_array[0], image_array[1]]
    : [];

  return (
    <Fragment>
      <div className="overflow-y-hidden">
        {title_subtitle && <TitleSubtitle block={title_subtitle} />}
        <div className="bg-white-color carousel-container">
          <div
            className="carousel-track"
          >
            {repeatedImages.map((item, index) => {
              return (
                <div
                  className="carousel-card"
                  key={index}
                >
                  <CustomImage block={item} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default TitleImageArraySection;
