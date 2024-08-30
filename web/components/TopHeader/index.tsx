import dynamic from "next/dynamic";
import React, { Fragment } from "react";
const LabelLink = dynamic(() => import("../LabelLink"));
import clsx from "clsx";
import { TopHeader as TopHeaderType } from "@/lib/sanity/types";
import Image from "next/image";
import Link from "../Link";

const TopHeader: React.FC<{ block: TopHeaderType }> = ({ block }) => {
  const { contact_link, top_link, top_label, contact_no } = block || {};

  return (
    <div className="bg-lily-White">
      <div className={clsx(`w-full `)} />
      <div className="container">
        <div className="hidden md:flex items-center justify-between px-0 py-2 font-DM">
          <div className="relative flex items-center ">
            <Link
              to={top_link}
              className="text-black-shade-color text-[0.875em] font-normal whitespace-nowrap max-w-[30em] overflow-hidden text-ellipsis hover:text-dark-pink after:content-[''] after:absolute after:right-[-2em] after:bg-[url('/top-header-icon.svg')] after:bg-no-repeat after:w-[15px] after:h-[15px] after:top-[0.2em]"
            >
              {top_label}
            </Link>
          </div>
          <div>
            <ul className=" [&>*:nth-child(2)]:border-l-[0.0625em] [&>*:nth-child(2)]:border-l-black-color [&>*:nth-child(2)]:border-solid [&>*:nth-child(3)]:pr-0 [&>*:nth-child(3)]:border-l-[0.0625em] [&>*:nth-child(3)]:border-l-black-color [&>*:nth-child(3)]:border-solid flex items-baseline [&>li>span]:text-[0.875em] [&>li>span]:font-normal [&>li]:m-0 [&>li]:px-[1em] [&>li]:py-0  [&>li>a]:font-normal  [&>li>a]:text-dark-blue">
              <li className="[&>a]:text-[12.25px]  xl:[&>a]:text-[14px] hover:[&>a]:text-dark-pink">
                {contact_link && <LabelLink block={contact_link} />}
              </li>
              <li className="">
                <Link
                  target="_blank"
                  to={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER}`}
                  className="relative top-1"
                >
                  <span className="text-[12.25px]  xl:text-[14px] hover:text-dark-pink flex justify-between items-centre">
                    {" "}
                    <Image
                      src="/whatsapp-fill 1.png"
                      alt="whats-app"
                      height={17}
                      width={17}
                      className="w-[15px] lg:w-[17px] mr-2"
                    />{" "}
                    Chat With Us{" "}
                  </span>
                  <span className="text-[12.25px]  xl:text-[14px] hover:text-dark-pink">
                    {/* {contact_no} */}
                  </span>
                </Link>
              </li>
              <li className="">
                <Link
                  target="_blank"
                  to={`https://telegram.me/${process.env.NEXT_PUBLIC_TELEGRAM_USERNAME}`}
                  className="relative top-1"
                >
                  <span className="text-[12.25px]  xl:text-[14px] hover:text-dark-pink flex justify-between items-centre">
                    {" "}
                    <Image
                      src="/telegram-fill 1.png"
                      alt="whats-app"
                      height={17}
                      width={17}
                      className="w-[15px] lg:w-[17px]  mr-2"
                    />{" "}
                    Telegram us
                  </span>
                  <span className="text-[12.25px]  xl:text-[14px] hover:text-dark-pink">
                    {/* {contact_no} */}
                  </span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopHeader;
