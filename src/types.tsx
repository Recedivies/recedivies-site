import type { LinkProps } from "next/link";
import { ReactNode } from "react";

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

export type AnimatePageProps = {
  children: ReactNode;
};

export const defaultMeta = {
  title: "Ahmadhi Prananta Hastiputra",
  siteName: process.env.NEXT_PUBLIC_HOSTNAME || "recedivies.vercel.app",
  description: "My online portfolio and blog website.",
  url: process.env.NEXT_PUBLIC_HOSTNAME
    ? `https://${process.env.NEXT_PUBLIC_HOSTNAME}`
    : "https://recedivies.vercel.app",
  image: "/vercel.svg",
  type: "website",
  robots: "follow, index",
  googlebot: "follow, index",
};

export type SeoProps = {
  readonly date?: string;
  readonly templateTitle?: string;
} & Partial<typeof defaultMeta>;
