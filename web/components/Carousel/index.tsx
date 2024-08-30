import { Fragment, memo, PropsWithChildren } from "react";
import dynamic from "next/dynamic";
import clsx from "clsx";
import type { ResponsiveType, CarouselProps } from "react-multi-carousel";
const MultiCarousel = dynamic(() => import("react-multi-carousel"));
const Carousel: React.FC<
  PropsWithChildren<
    {
      responsive?: ResponsiveType;
      arrows?: boolean;
      autoPlay?: boolean;
      infinite?: boolean;
      className?: string;
    } & Partial<CarouselProps>
  >
> = memo(
  ({
    responsive,
    arrows = true,
    autoPlay = true,
    infinite = true,
    className = "",
    children,
    ...props
  }) => {
    const default_responsive = {
      superLargeDesktop: {
        breakpoint: { max: 4000, min: 3000 },
        items: 5,
      },
      desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3,
      },
      tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2,
      },
      mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
      },
    };
    return (
      <Fragment>
        <MultiCarousel
          responsive={responsive ?? default_responsive}
          arrows={arrows}
          autoPlay={autoPlay}
          infinite={infinite}
          className={clsx(className, "")}
          {...props}
        >
          {children}
        </MultiCarousel>
      </Fragment>
    );
  }
);

Carousel.displayName = "Carousel"; // Set the displayName property

export default Carousel;
