import Button from '@/components/Button';
import LabelLink from '@/components/LabelLink';
import Logo from '@/components/Logo';
import clsx from 'clsx';
import React, { useEffect, useState } from 'react'
import { Header as HeaderType } from "@/lib/sanity/types";
const HeaderMobile : React.FC<HeaderType>= ({ button, nav_links, background_classname}) => {
    const [openNav, setOpenNav] = useState(false);

    useEffect(() => {
      if (openNav) {
        document.body.classList.add("bg-drop");
      } else if (document.body.classList.contains("bg-drop")) {
        document.body.classList.remove("bg-drop");
      }
    }, [openNav]);
  return (
    <div
    className={`block lg:hidden  ${
      openNav
        ? "  [&>span>div:nth-child(2)]:none  [&>span]:fixed [&>span]:right-[2.8em] [&>span]:top-[2.3em] md:[&>span]:top-[4.5em] [&>span]:z-90  [&>span>div]:bg-dark-pink [&>div]:block"
        : "dark-gradient"
    }`}
  >
    <span
      className="shadow-none p-[0] relative z-10 cursor-pointer"
      onClick={() => {
        setOpenNav(!openNav);
      }}
    >
      <div
        className={clsx(
          "w-[2em] h-[0.20625em]  my-[0.475em] rounded-[0.5em] transition",
          background_classname === "dark-gradient"
            ? "bg-white-color"
            : " bg-dark-pink"
        )}
      />
      <div
        className={clsx(
          "w-[2em] h-[0.20625em]  my-[0.475em] rounded-[0.5em] transition",
          background_classname === "dark-gradient"
            ? "bg-white-color"
            : " bg-dark-pink"
        )}
      />
      <div
        className={clsx(
          "w-[2em] h-[0.20625em]  my-[0.475em] rounded-[0.5em] transition",
          background_classname === "dark-gradient"
            ? "bg-white-color"
            : " bg-dark-pink"
        )}
      />
    </span>
    <div
      className={clsx(
        "fixed left-0 right-0 top-0  rounded-[0.625em]  z-10 pt-[5em] pb-[1.5em] px-[2em] mt-[1.5em] md:mt-[3em] mb-[1.5em] mx-[1em]",
        openNav
          ? "bg-Cerise-red lg:bg-[transparent] opacity-100 visible  transition-opacity ease-in-out duration-300 bg-drop"
          : "bg-[green] opacity-0 invisible transition-opacity ease-in-out duration-300 bg-drop"
      )}
    >
      <span
        className="shadow-none p-0 absolute z-10 right-[1.5em] top-[1em] md:top-[1.5em] cursor-pointer"
        onClick={() => {
          setOpenNav(!openNav);
        }}
      >
        <div className="w-[2em] h-[0.20625em] bg-white-color my-[0.475em] rounded-[0.5em] transition transform rotate-45 translate-x-[0.4em] translate-y-[0.875em] ease-in-out duration-300" />
        <div className="w-[2em] h-[0.20625em] bg-white-color my-[0.475em] rounded-[0.5em] transition opacity-0" />
        <div className="w-[2em] h-[0.20625em] bg-white-color my-[0.475em] rounded-[0.5em] transition transform -rotate-45 translate-x-[0.3em] translate-y-[-0.5em]  ease-in-out duration-300" />
      </span>
      <ul className="block lg:hidden ">
        {nav_links?.map((item, index) => {
          return (
            <li
              key={index}
              className="m-0 py-2 [&>a]:text-[1.5em] [&>a]:font-normal [&>a]:text-white-color [&>a]:tracking-[0.025em] [&>a]:hover:text-white-color font-DM"
            >
              {item && <LabelLink block={item} />}
            </li>
          );
        })}
      </ul>
      <div
        className="my-4 [&>a]:bg-dark-blue [&>a]:py-[0.75em] [&>a]:pl-[1.3em] [&>a]:pr-6 [&>a]:text-[15.75px] [&>a]:text-white-color [&>a]:rounded-[3.5em] [&>a]:hover:text-white-color [&>a]:font-DM [&>span]:py-3 [&>span]:px-[1.5em] [&>span]:bg-dark-blue [&>span]:rounded-[3.5em] [&>span]:text-white-color [&>span]:text-base [&>span]:cursor-pointer mt-8"
        id="drift-open-chat-mobile"
      >
        <Button block={{ ...button }} />
      </div>
      <div className="text-end [&>a>img]:max-w-[10em] mt-8">
        <Logo dark />
      </div>
    </div>
  </div>
  )
}

export default HeaderMobile