import type { NextPage } from "next";
import { SiNextdotjs, SiTailwindcss, SiTypescript } from "react-icons/si";

import Accent from "../components/Accent";
import AnimatePage from "../components/AnimatePage";
import ProjectCard from "../components/ProjectCard";
import Layout from "../components/layout/Layout";
import { clsxm } from "../components/links/clsxm";
import { Project } from "../types";

const projects: Project[] = [
  {
    title: "Personal Website",
    content:
      "This is my personal website where I my put my information including activities, resume, and projects.",
    slug: "personal_website",
    type: "website",
    github: "Recedivies/recedivies-site",
    demo: "https://recedivies.vercel.app/",
    image: "recedivies-site.png",
    stacks: [
      {
        id: "nextjs",
        icon: SiNextdotjs,
        name: "Next.js",
      },
      {
        id: "typescript",
        icon: SiTypescript,
        name: "TypeScript",
      },
      {
        id: "Tailwindcss",
        icon: SiTailwindcss,
        name: "Tailwind CSS",
      },
    ],
  },
];

const Projects: NextPage = () => {
  return (
    <Layout>
      <AnimatePage>
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
      </AnimatePage>
    </Layout>
  );
};

export default Projects;
