import Link from "next/link";

import { UnstyledLinkProps } from "../../types";

const UnstyledLink = ({
  children,
  href,
  openNewTab,
  className,
  nextLinkProps,
  ...rest
}: UnstyledLinkProps) => {
  const isNewTab =
    openNewTab ?? (href && !href.startsWith("/") && !href.startsWith("#"));

  if (!isNewTab) {
    return (
      <Link href={href} {...nextLinkProps}>
        <a {...rest} className={className}>
          {children}
        </a>
      </Link>
    );
  }

  return (
    <a
      target="_blank"
      rel="noopener noreferrer"
      href={href}
      {...rest}
      className={className}
    >
      {children}
    </a>
  );
};

export default UnstyledLink;
