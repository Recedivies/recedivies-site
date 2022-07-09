import type { NextPage } from "next";

import Accent from "../components/Accent";
import AnimatePage from "../components/AnimatePage";
import TechStack from "../components/TechStack";
import Layout from "../components/layout/Layout";
import { clsxm } from "../components/links/clsxm";

const About: NextPage = () => {
  return (
    <Layout>
      <AnimatePage>
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
                I am very passionate in learning programming and software
                engineering. I have a good experience with backend development,
                using Nginx as a reverse proxy, using docker as a container in
                development and production environment. I also like to try
                frontend development too by making some React projects. I really
                liked using GitHub Action to do CI/CD stuff. In my free time, I
                like to explore all of tech and development stuff about software
                engineering.
              </p>
            </article>
          </section>
          <section className={clsxm("my-20 flex flex-col justify-center")}>
            <article className="layout">
              <h2 className="mb-8 text-2xl md:text-4xl 2xl:text-5xl">
                Tech Stack
              </h2>
              <TechStack />
            </article>
          </section>
        </main>
      </AnimatePage>
    </Layout>
  );
};

export default About;
