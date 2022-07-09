import React, { useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { FiMail } from "react-icons/fi";
import {
  SiCodeforces,
  SiGithub,
  SiGitlab,
  SiHackerrank,
  SiLeetcode,
  SiLinkedin,
} from "react-icons/si";
import { Tooltip as TooltipTippy } from "react-tippy";

import Accent from "../Accent";
import UnstyledLink from "../links/UnstyledLink";

const mail = "ahmadhi.prananta@ui.ac.id";

const socials = [
  {
    label: "GitHub",
    link: "https://github.com/Recedivies",
    icon: SiGithub,
  },
  {
    label: "GitLab",
    link: "https://gitlab.com/Recedivies",
    icon: SiGitlab,
  },
  {
    label: "Linkedin",
    link: "https://www.linkedin.com/in/ahmadhi",
    icon: SiLinkedin,
  },
  {
    label: "HackerRank",
    link: "https://www.hackerrank.com/Recedivies",
    icon: SiHackerrank,
  },
  {
    label: "LeetCode",
    link: "https://leetcode.com/ahmadhiprananta/",
    icon: SiLeetcode,
  },
  {
    label: "Codeforces",
    link: "https://codeforces.com/profile/FlashNewbiePP",
    icon: SiCodeforces,
  },
] as const;

const Footer = () => {
  const [copyClipboard, setCopyClipboard] = useState<string>(
    "Click the mail logo to copy",
  );

  return (
    <footer className="mt-4 pb-2">
      <main className="layout flex flex-col items-center border-t pt-6 dark:border-gray-600">
        <div className="mt-2 flex space-x-4">
          <div className="flex items-center justify-center">
            <TooltipTippy
              trigger="mouseenter"
              hideOnClick={false}
              interactive
              html={
                <div className="inline-block rounded-md border bg-white p-2 text-gray-600 shadow-md dark:border-primary-500 dark:bg-dark dark:text-gray-200">
                  {copyClipboard}
                  <Accent className="inline-block font-medium">{mail}</Accent>
                </div>
              }
            >
              <CopyToClipboard
                text={mail}
                onCopy={() => {
                  setCopyClipboard("Copied to clipboard : ");
                  setTimeout(() => {
                    setCopyClipboard("Click the mail logo to copy");
                  }, 1500);
                }}
              >
                <button
                  aria-label="Mail button"
                  className="rounded-sm align-middle focus:outline-none focus-visible:ring focus-visible:ring-primary-200"
                >
                  <FiMail className="my-auto h-7 w-7 align-middle text-gray-600 hover:text-primary-300 dark:text-gray-300 dark:hover:text-primary-200" />
                </button>
              </CopyToClipboard>
            </TooltipTippy>
          </div>
          {socials.map((social) => {
            return (
              <div key={social.link}>
                <UnstyledLink
                  aria-label={social.label}
                  className="inline-flex items-center justify-center rounded-sm focus:outline-none focus-visible:ring focus-visible:ring-primary-300"
                  href={social.link}
                >
                  <social.icon className="my-auto h-6 w-6 align-middle text-gray-600 transition-colors hover:text-primary-300 dark:text-gray-300 dark:hover:text-primary-200" />
                </UnstyledLink>
              </div>
            );
          })}
        </div>
        <Accent className="mt-8 text-sm text-gray-600 dark:text-gray-300">
          © {new Date().getFullYear()} Ahmadhi - All Rights Reserved
        </Accent>
      </main>
    </footer>
  );
};

export default Footer;
