import clsx from "clsx";
import { default as NextLink, LinkProps } from "next/link";
import React, { PropsWithChildren } from "react";

export const Link: React.FC<
  PropsWithChildren<
    Omit<LinkProps & React.RefAttributes<HTMLAnchorElement>, "to" | "href"> & {
      to: string | null | undefined;
      target?: React.HTMLAttributeAnchorTarget;
      className?: string;
      activeClassName?: string;
    }
  >
> = ({
  to,
  target,
  children,
  className,
  activeClassName,
  prefetch,
  ...props
}) => {
  if (!to) {
    return <span {...props}>{children}</span>;
  }
  return (
    <NextLink
      href={to}
      target={target}
      {...props}
      prefetch={prefetch ?? false}
      className={clsx(className)}
    >
      {children}
    </NextLink>
  );
};
export default Link;
