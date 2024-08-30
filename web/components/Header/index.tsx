import React from "react";
import clsx from "clsx";
import { Header as HeaderType } from "@/lib/sanity/types";
import TopHeader from "../TopHeader";
import HeaderMobile from "./Mobile";
import HeaderDesktop from "./Desktop";

const Header: React.FC<{
  block: HeaderType;
  path: string;
}> = ({ block, path }) => {
  const { background_classname, top_header } = block || {};
  if (!block) {
    return null;
  }
  return (
    <>
      {top_header && <TopHeader block={top_header} />}
      <header
        className={clsx(
          "z-[1] absolute inset-x-0 bg-[transparent]",
          background_classname ?? "white"
        )}
      >
        <div className="container">
          <div className="main-menu flex justify-between items-baseline lg:items-center px-0 py-[1.9375em] 3xl:py-[2.9375em] ">
            <HeaderDesktop {...block} path={path} />
            <HeaderMobile {...block} />
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
