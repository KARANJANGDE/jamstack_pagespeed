import dynamic from "next/dynamic";
const Link = dynamic(() => import("../Link"));
const Image = dynamic(() => import("../Image"));
import React from "react";

const Logo: React.FC<{ dark?: boolean }> = ({ dark }) => (
  <Link to={"/"} className="relative z-0">
    {dark ? (
      <Image
        src="/jamstacky-white.svg"
        alt={"Jamstacky"}
        height={10}
        width={10}
        className="logo-image white max-w-[13.75em]"
        priority
      />
    ) : (
      <Image
        src="/jamstacky.svg"
        alt={"Jamstacky"}
        height={20}
        width={20}
        className="logo-image black max-w-[13.75em]"
        priority
      />
    )}
  </Link>
);

export default Logo;
