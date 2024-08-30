import clsx from "clsx";
import { PropsWithChildren } from "react";

import { Button } from "@/lib/sanity/types";
import dynamic from "next/dynamic";
const Link = dynamic(() => import("../Link"));

const Button: React.FC<
  PropsWithChildren<
    { block?: Button } & React.DetailedHTMLProps<
      React.ButtonHTMLAttributes<HTMLButtonElement>,
      HTMLButtonElement
    >
  >
> = ({ block, className = "", ...props }) => {
  const { label, link } = block || {};
  return block ? (
    <Link
      to={link || ""}
      aria-label={label}
      className={clsx(
        "text-[1.125em] font-bold leading-[1.25em] text-white-color bg-dark-pink hover:bg-dark-blue inline-block cursor-pointer px-[1.3em] py-36 lg:px-6 lg:py-4 rounded-[3.5em] font-DM  text-center",
        className
      )}
    >
      {label}
    </Link>
  ) : (
    <button
      {...props}
      aria-label={label || ""}
      className={clsx(
        "text-[1.125em] font-bold leading-[1.25em] text-white-color bg-dark-pink inline-block cursor-pointer px-[0.8em] em:px-4 py-3 md:py-[0.9em] lg:px-6 lg:py-4 rounded-[3.5em] font-DM",
        className
      )}
    >
      {props.children}
    </button>
  );
};

export default Button;
