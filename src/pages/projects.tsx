import type { NextPage } from "next";

import Accent from "../components/Accent";
import ProjectCard from "../components/ProjectCard";
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
    title: "Personal Website",
    content:
      "This is my personal website where I my put my information including activities, resume, and projects.",
    slug: "test",
    type: "website",
    github: "Recedivies/recedivies-site",
    demo: "https://recedivies.vercel.app/",
    image: "recedivies-site.png",
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
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              {projects.map((project) => (
                <ProjectCard project={project} key={project.slug} />
              ))}
            </div>
          </article>
        </section>
      </main>
    </Layout>
  );
};

export default Projects;
