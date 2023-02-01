import type { NextPage } from "next";

import Accent from "../components/Accent";
import AnimatePage from "../components/AnimatePage";
import Seo from "../components/Seo";
import TechStack from "../components/TechStack";
import Layout from "../components/layout/Layout";
import { clsxm } from "../lib/clsxm";

const About: NextPage = () => {
  return (
    <Layout>
      <Seo templateTitle="About" />
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
                I am a student at University of Indonesia studying Computer
                Science. I have a strong interest in Backend Development and
                have been working on various projects to improve my skills in
                that area. I have experience in programming languages such as
                Golang, Java, and Python and I am always eager to learn new
                technologies. I have worked on different projects such as
                building RESTful APIs, working with databases, and implementing
                security features, and optimizing the performance of the
                systems. I have improved my problem-solving abilities by daily
                practices solving problems on LeetCode. I am passionate about
                solving complex problems and creating efficient and effective
                solutions.{" "}
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
