import { motion } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/router";

import { clsxm } from "../../lib/clsxm";
import Accent from "../Accent";
import UnstyledLink from "../links/UnstyledLink";

type Links = {
  href: string;
  label: string;
}[];

export const links: Links = [
  { href: "/projects", label: "Projects" },
  { href: "/about", label: "About" },
];

const Header = () => {
  const router = useRouter();

  const arrOfRoute = router.route.split("/");
  const baseRoute = "/" + arrOfRoute[1];

  return (
    <header
      className={clsxm(
        "sticky top-0 z-50 transition-shadow dark:bg-dark",
        "shadow-lg",
      )}
    >
      <div>
        <nav className={clsxm("layout flex items-center justify-between py-4")}>
          <span className="font-semibold text-xl tracking-tight">
            <Link href="/" passHref>
              <motion.a
                className="group relative z-50 whitespace-nowrap font-bold transition duration-300 hover:transition md:text-xl"
                animate={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -10 }}
              >
                <span className="opacity-100 transition duration-300 group-hover:opacity-0">
                  Ahmadhi Prananta
                </span>
                <Accent className="absolute left-0 bg-clip-text text-transparent opacity-0 transition duration-300 hover:bg-gradient-to-r group-hover:opacity-100">
                  @Recedivies
                </Accent>
              </motion.a>
            </Link>
          </span>

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
        </nav>
      </div>
    </header>
  );
};

export default Header;
