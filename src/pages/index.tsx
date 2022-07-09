import type { NextPage } from "next";

import Accent from "../components/Accent";
import AnimatePage from "../components/AnimatePage";
import Seo from "../components/Seo";
import Layout from "../components/layout/Layout";
import UnstyledLink from "../components/links/UnstyledLink";
import { clsxm } from "../lib/clsxm";

const Home: NextPage = () => {
  return (
    <Layout>
      <Seo />
      <AnimatePage>
        <main>
          <section className={clsxm("flex flex-col justify-center")}>
            <article className="layout">
              <h1 className="text-4xl font-bold md:text-6xl 2xl:text-7xl">
                <Accent>Hello there </Accent>
                <span>👋</span>
              </h1>
              <p
                className={clsxm(
                  "my-4 max-w-4xl md:mt-6",
                  "md:text-lg 2xl:text-xl",
                )}
              >
                I am very passionate in learning programming and software
                engineering. I focus primarily on backend development. I have
                worked on several projects on the backend side. I like doing
                competitive programming and loves to participate in various
                programming contests.
              </p>
              <UnstyledLink href="/about" aria-label="About Page">
                <button className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800">
                  <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                    Learn More About Me
                  </span>
                </button>
              </UnstyledLink>
            </article>
          </section>
        </main>
      </AnimatePage>
    </Layout>
  );
};

export default Home;
