import type { NextPage } from "next";

import Accent from "../components/Accent";
import Layout from "../components/layout/Layout";
import { clsxm } from "../components/links/clsxm";

export type Project = {
  image?: string;
  title?: string;
  content: string;
  demo?: string;
  github?: string;
  type?: string;
  slug: string;
};

const projects: Project[] = [
  {
    title: "test",
    content: "testtt",
    slug: "test",
    type: "test",
    github: "test",
    demo: "test",
    image: "test",
  },
];

const Projects: NextPage = () => {
  return (
    <Layout>
      <main>
        <section className={clsxm("flex flex-col justify-center")}>
          <article className="layout space-y-10 py-8">
            <h1 className="text-3xl md:text-5xl 2xl:text-6xl">
              <Accent>Projects</Accent>
            </h1>
            <div>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum
            </div>
          </article>
        </section>
      </main>
    </Layout>
  );
};

export default Projects;
