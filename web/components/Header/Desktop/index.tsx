import Button from "@/components/Button";
import Logo from "@/components/Logo";
import clsx from "clsx";
import React from "react";
import { Header as HeaderType } from "@/lib/sanity/types";
import { checkLinkIsActive } from "@/lib/utils/link-utils";
import path from "path";
import Link from "@/components/Link";
const checkActiveLinkMapping: Record<string, (path: string) => boolean> = {
  blog: (path) =>
    !!path.split("/").find((i) => ["blog", "post-categories"].includes(i)),
    comparision: (path) =>
    !!path.split("/").find((i) => ["comparision"].includes(i)),
  "case-studies": (path) =>
    !!path.split("/").find((i) => ["case-studies"].includes(i)),
};
const HeaderDesktop: React.FC<HeaderType & { path: string }> = ({
  button,
  nav_links,
  background_classname,
  path,
}) => {
  return (
    <>
      <div className="cursor-pointer logo-section">
        <Logo dark={background_classname === "dark-gradient"} />
      </div>
      <div className={clsx(`flex justify-end navbar-section font-DM`)}>
        <ul className="items-center hidden lg:flex">
          {nav_links?.map((item, index) => {
            const { link, label } = item || {};
            return (
              <li key={index} className="mx-[1.2em] xl:mx-6 my-0">

                {link ? (
                  <Link
                    to={link}
                    aria-label={label}
                    activeClassName={clsx("text-dark-pink")}
                    className={clsx(
                      "text-[1.125em] leading-[1em] font-normal text-menu-title-text  hover:text-dark-pink",
                      background_classname === "dark-gradient"
                        ? "text-white-color"
                        : "",
                      checkLinkIsActive(link, path) ||
                        (checkActiveLinkMapping[link.replaceAll("/", "")] &&
                          checkActiveLinkMapping[link.replaceAll("/", "")](
                            path
                          ))
                        ? `!text-dark-pink`
                        : ""
                    )}
                  >
                    {item?.label}
                  </Link>
                ) : (
                  <span>{item?.label}</span>
                )}
              </li>
            );
          })}
        </ul>
        <div
          className={clsx(
            "hidden lg:block ml-4 xlg:ml-[2.0625em] [&>a]:bg-dark-blue  [&>a]:font-bold [&>a]:text-base xl:[&>a]:text-lg [&>a]:px-[1.2em] xl:[&>a]:px-6 [&>a]:py-[0.9em] [&>a]:rounded-[2em] hover:[&>a]:bg-dark-pink hover:[&>a]:text-white-color",
            background_classname === "dark-gradient"
              ? "[&>a]:bg-white-color [&>a]:text-dark-pink hover:[&>a]:bg-dark-blue"
              : "[&>a]:bg-dark-blue [&>a]:text-white-color"
          )}
          id="drift-open-chat"
        >
          <Button block={{ ...button, link: button?.link }} />
        </div>
      </div>
    </>
  );
};

export default HeaderDesktop;
