import type { LinkProps } from "next/link";
import Link from "next/link";

export type UnstyledLinkProps = {
  readonly href: string;
  readonly children: React.ReactNode;
  readonly openNewTab?: boolean;
  readonly className?: string;
  readonly nextLinkProps?: Omit<LinkProps, "href">;
} & React.ComponentPropsWithoutRef<"a">;

const UnstyledLink = ({
  children,
  href,
  openNewTab,
  className,
  nextLinkProps,
  ...rest
}: UnstyledLinkProps) => {
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
