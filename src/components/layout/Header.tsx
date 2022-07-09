import { motion } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useCallback, useState } from "react";

import Accent from "../Accent";
import UnstyledLink from "../links/UnstyledLink";
import { clsxm } from "../links/clsxm";

type Links = {
  href: string;
  label: string;
}[];

export const links: Links = [
  { href: "/projects", label: "Projects" },
  { href: "/about", label: "About" },
];

const Dropdown = clsxm(
  `w-full flex-grow lg:flex lg:items-center lg:justify-end lg:w-auto`,
);

const NavLinks = () => (
  <a
    href="https://github.com/dimitrisnl/gatsby-boilerplate-tailwindcss-emotion"
    target="_blank"
    rel="noopener noreferrer"
    className="block mt-4 lg:inline-block lg:mt-0 text-blue-200 hover:text-white"
  >
    Github
  </a>
);

const Header = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const handleVisibility = useCallback(() => setIsOpen(!isOpen), [isOpen]);

  //#region  //*=========== Route Functionality ===========
  const router = useRouter();
  /** Ex: /projects/petrolida-2021 -> ['', 'projects', 'petrolida-2021'] */
  const arrOfRoute = router.route.split("/");
  const baseRoute = "/" + arrOfRoute[1];
  //#endregion  //*======== Route Functionality ===========

  return (
    <header
      className={clsxm("sticky top-0 z-50 transition-shadow", "shadow-lg")}
    >
      <div className="container flex items-center justify-between flex-wrap p-6">
        <div className="flex items-center flex-shrink-0 text-white mr-6">
          <span className="font-semibold text-xl tracking-tight">
            <Link href="/" passHref>
              <motion.a
                className="group relative z-50 whitespace-nowrap font-bold transition duration-300 hover:transition md:text-xl"
                animate={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -10 }}
              >
                <span className="opacity-100 transition duration-300 group-hover:opacity-0">
                  @Recedivies
                </span>
                <Accent className="absolute left-0 bg-clip-text text-transparent opacity-0 transition duration-300 hover:bg-gradient-to-r group-hover:opacity-100">
                  Ahmadhi Prananta
                </Accent>
              </motion.a>
            </Link>
          </span>
        </div>
        <ul className="flex items-center justify-between space-x-3 text-xs md:space-x-4 md:text-base">
          {links.map(({ href, label }) => (
            <li key={`${href}${label}`}>
              <UnstyledLink
                href={href}
                className={clsxm(
                  "rounded-sm py-2 transition-colors",
                  "font-medium text-black dark:text-light",
                  "group dark:hover:text-primary-300",
                  "focus:outline-none focus-visible:ring focus-visible:ring-primary-300",
                  href === baseRoute && "font-bold",
                )}
              >
                <span
                  className={clsxm(
                    "transition-colors",
                    "bg-primary-300/0 group-hover:bg-primary-300/20 dark:group-hover:bg-primary-300/0",
                    href === baseRoute &&
                      "bg-primary-300/50 dark:bg-gradient-to-tr dark:from-primary-300 dark:to-primary-400 dark:bg-clip-text dark:text-transparent",
                  )}
                >
                  {label}
                </span>
              </UnstyledLink>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default Header;
