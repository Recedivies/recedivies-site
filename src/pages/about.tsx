import type { NextPage } from "next";

import Accent from "../components/Accent";
import Layout from "../components/layout/Layout";
import { clsxm } from "../components/links/clsxm";

const About: NextPage = () => {
  return (
    <Layout>
      <main>
        <section className={clsxm("my-16 flex flex-col justify-center")}>
          <article className="layout">
            <h1 className="text-3xl md:text-5xl 2xl:text-6xl">
              <Accent>Hello! I{"'"}m Ahmadhi</Accent>
            </h1>
            <p
              className={clsxm(
                "mt-4 max-w-4xl md:mt-6",
                "md:text-lg 2xl:text-xl",
              )}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum
            </p>
          </article>
        </section>
      </main>
    </Layout>
  );
};

export default About;
