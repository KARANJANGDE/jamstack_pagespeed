import React, { Fragment } from "react";
import FooterBanner from "./FooterBanner";
import LabelLink from "../LabelLink";
import { Footer } from "@/lib/sanity/types";
import CustomImage from "../CustomImage";
const Link = dynamic(() => import("../Link"));
import dynamic from "next/dynamic";


const Footer: React.FC<{ block: Footer }> = ({ block }) => {
  if (!block) {
    return null;
  }
  const { footer_links, footer_logo, contact_link, footer_banner } =
    block || {};
  const currentYear = new Date().getFullYear();

  // const [isOpen, setIsOpen] = useState(false)

  return (
    <Fragment>
      <div
        className="bg-white shadow-[0px_-35px_65px_1px_rgba(0,0,0,0.1)] pt-[2.625em] pb-[1.5em] px-0"
        id="introcall-section"
      >
        {footer_banner && <FooterBanner block={footer_banner} />}
      </div>
      <div className="bg-dark-blue">
        <div className="container">
          <div className=" font-DM">
            <div className="flex justify-between items-center px-0 pt-[2.375em] pb-[2.375em]">
              <div className="flex items-center footer-left">
                <div className="max-w-[2.75em] w-full h-full">
                  {footer_logo && <CustomImage block={footer_logo} />}
                </div>
                <ul className="hidden lg:flex ml-[4.375em]">
                  {footer_links?.map((item, index) => {
                    return (
                      <li
                        key={index}
                        className="mx-6 my-0
                             [&>a]:text-[12.6px] xl:[&>a]:text-[16px] [&>a]:leading-[1.25em] [&>a]:font-normal hover:[&>a]:text-dark-pink [&>a]:text-white-color
                                "
                      >
                        {item && <LabelLink block={item} />}
                      </li>
                    );
                  })}
                </ul>
              </div>
              <div className="text-right flex-col sm:flex-row flex items-center space-x-4 md:space-x-0 md:flex md:flex-col">
                <p
                  className="text-[0.875em] leading-[1.25em] font-normal text-white-color p-0
                [&<a]:text-[13.78px] sm:[&<a]:text-[15.50px]  md:[&<a]:text-[12.40px]  xl:[&>a]:text-[15.75px] [&>a]:underline [&>a]:leading-[1.25em] [&>a]:font-normal [&>a]:text-white-color [&>a]:cursor-pointer  [&>a]:hover:text-dark-pink  hover:[&>a]:underline
                    "
                >
                  {contact_link && <LabelLink block={contact_link} />}
                </p>
                <p className="text-[11px] xl:text-[14px] font-normal text-white-color p-0 m-0 md:pt-[3px] max-sm:pt-[3px]">
                  jamstacky.com © {currentYear}
                </p>
              </div>
            </div>

            {/* fixedPopup  */}
            {/* <div className="hover:[&>a]:text-dark-blue">
              <button
                onClick={() => setIsOpen(true)}
                // to={"/"}
                className="text-xs md:text-sm xl:text-base fixed bottom-0 bg-dark-pink hover:bg-btn-hover-pink text-white-color !hover:text-dark-blue z-[999] left-[4em] sm:left-[7em] pt-[0.8em] sm:pt-[1.1em] px-[1em] sm:px-[2em] pb-[0.5em] sm:pb-[0.9em] uppercase font-semibold cursor-pointer rounded-t-[6px]"
              >
                Limited Time Offer
              </button>
              <Modal  className="left-[4.8em] w-[20em] pt-[1.9em] px-[2em] pb-[1.7em] bg-white-color rounded-t-[6px] border-t-[2px] border-t-dark-pink shadow-timeOfferbox fixed transition ease-in-out duration-300" isOpen={isOpen} onRequestClose={() => setIsOpen(false)}>

                <div className="relative -top-[1em] right-[1.1em] text-white-color bg-dark-pink w-[2em] h-[2em] text-center text-[1.4em] font-semibold rounded-full cursor-pointer flex justify-center items-center"
                  onClick={() => setIsOpen(false)}
                >
                  x
                </div>
                <div>
                  <div>
                    <h2 className="text-[1.8em] mb-2 text-black font-bold leading-tight">
                      Interested in exploring more?
                    </h2>
                    <p className="text-base text-[#7d7d7d] mb-4 font-normal leading-tight">
                      Receive an exclusive <span>10% off</span> and an extended
                      renewal period of <span>90 days</span> on your Sign-up.
                    </p>
                  </div>
                  <form className="w-full">
                    <div>
                      <div>
                        <div className="mb-4 [&>input]:rounded-lg">
                          <label className="hidden">name</label>
                          <input
                            type="text"
                            placeholder="Your Name"
                            className="py-[0.8em] px-[1.4375em] border-black-color border-[1px]  text-[#010101] placeholder:text-black-color"
                          />
                        </div>
                        <div className="mb-4 [&>input]:rounded-lg">
                          <label className="hidden">email</label>
                          <input
                            type="text"
                            placeholder="Email"
                            className="py-[0.8em] px-[1.4375em] border-black-color border-[1px] text-[#010101] placeholder:text-black-color"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="inline-block  mt-[1.25em] ">
                      <button className="w-auto bg-dark-pink rounded-lg cursor-pointer relative text-white-color text-sm font-medium py-3 px-6 hover:shadow-xl">
                        Get coupon code
                      </button>
                    </div>
                  </form>
                </div>

              </Modal >
            </div> */}
             {/* fixedPopup  */}
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Footer;
