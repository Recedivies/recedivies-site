import type { LinkProps } from "next/link";

export type AccentType = React.ComponentPropsWithoutRef<"span">;

export type Stacks = {
  id: string;
  icon: any;
  name: string;
};
export type Project = {
  image?: string;
  title?: string;
  content: string;
  demo?: string;
  github?: string;
  type?: string;
  slug: string;
  stacks?: Stacks[];
};

export type ProjectCardProp = {
  project: Project;
};

export type UnstyledLinkProps = {
  readonly href: string;
  readonly children: React.ReactNode;
  readonly openNewTab?: boolean;
  readonly className?: string;
  readonly nextLinkProps?: Omit<LinkProps, "href">;
} & React.ComponentPropsWithoutRef<"a">;
