import { motion } from "framer-motion";
import Link from "next/link";

import { clsxm } from "../links/clsxm";

type Links = {
  href: string;
  label: string;
}[];

export const links: Links = [
  { href: "/projects", label: "Projects" },
  { href: "/about", label: "About" },
];

const Header = () => {
  return (
    <div>
      <h1>Header</h1>
    </div>
  );
};

export default Header;
