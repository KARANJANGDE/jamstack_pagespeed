import clsx from "clsx";
import dynamic from "next/dynamic";
import React, { useState } from "react";
const TestimonialPopupForm = dynamic(() => import("./TestimonialPopupForm"));

const TestimonialPopup = () => {
  const [isOpen, setIsOpen] = useState(false);

  function closeFunction() {
    setIsOpen(false);
  }
  function openFunction() {
    setIsOpen(true);
  }
  return (
    <div
      className={clsx(
        "hover:[&>a]:text-dark-blue",
        isOpen ? "offer-pop-open" : "offer-pop-close"
      )}
    >
      <button
        onClick={openFunction}
        className={clsx(
          "text-xs md:text-sm xl:text-base  bottom-0 bg-dark-pink hover:bg-btn-hover-pink text-white-color !hover:text-dark-blue  left-[2em] esm:left-[3em] sm:left-[7em] pt-[0.8em] sm:pt-[1.1em] px-4 sm:px-8 pb-2 sm:pb-[0.9em] uppercase font-semibold cursor-pointer rounded-t-[6px] fixed z-[999]  transition ease-in-out duration-500 offer-btn",
          isOpen ? "bottom-[-4em] transition ease-in-out duration-500" : ""
        )}
      >
        Limited Time Offer
      </button>

      <div
        className={clsx(
          " left-[2em] esm:left-[3em] sm:left-[4.8em] w-[18em] esm:w-[20em] em:w-[23em] pt-[1.9em] px-[1.2em] em:px-8 pb-[1.7em] bg-white-color rounded-t-[6px] border-t-[4px] border-t-dark-pink shadow-timeOfferbox fixed  transition ease-in-out duration-500 z-10 offer-pop-form",
          isOpen ? "" : ""
        )}
      >
        <div
          className="absolute top-[-0.7em] sm:-top-[1em] right-[1.1em] text-white-color bg-dark-pink w-[1.5em] sm:w-[2em] h-[1.5em] sm:h-[2em] text-center text-[1.4em] font-semibold rounded-full cursor-pointer flex justify-center items-center"
          onClick={closeFunction}
        >
          x
        </div>
        <div>
          <div>
            <h2 className="text-[1.375em] md:text-[1.8em] mb-2 text-black font-bold leading-tight">
              Want to explore more ?
            </h2>
            <p className="text-sm md:text-base text-[#7d7d7d] mb-4 font-normal leading-tight">
              Take an exclusive{" "}
              <span className="text-dark-pink font-medium">15% off</span> off on
              all the services.{" "}
            </p>
          </div>
          {isOpen && <TestimonialPopupForm />}
        </div>
      </div>
    </div>
  );
};

export default TestimonialPopup;
