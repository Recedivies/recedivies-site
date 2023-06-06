import type { NextPage } from "next";
import {
  SiGo,
  SiLeetcode,
  SiNextdotjs,
  SiPostgresql,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";

import Accent from "../components/Accent";
import AnimatePage from "../components/AnimatePage";
import ProjectCard from "../components/ProjectCard";
import Seo from "../components/Seo";
import Layout from "../components/layout/Layout";
import { clsxm } from "../lib/clsxm";
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
  {
    title: "Dados",
    content:
      "Dados is a review site which allows anyone to assign ratings to professors and campuses of Indonesian institutions.",
    slug: "api_backend",
    type: "api",
    github: "dados-id/dados-be/tree/staging",
    demo: "",
    image: "dados.png",
    stacks: [
      {
        id: "go",
        icon: SiGo,
        name: "Go",
      },
      {
        id: "postgres",
        icon: SiPostgresql,
        name: "Postgresql",
      },
    ],
  },
  {
    title: "LeetCode Solutions",
    content:
      "My LeetCode solution to various problem topics. This website offers several explanations" +
      " for each problem in multiple programming languages.",
    slug: "leetcode_solutions",
    type: "documentation",
    github: "Recedivies/leetcode",
    demo: "https://recedivies.github.io/leetcode/",
    image: "recedivies-leetcode.png",
    stacks: [
      {
        id: "leetcode",
        icon: SiLeetcode,
        name: "LeetCode",
      },
    ],
  },
  {
    title: "Rece-LB",
    content:
      "Building HTTP load balancer and reverse proxy from scratch written in Go",
    slug: "load_balancer",
    type: "exploration",
    github: "Recedivies/rece-lb",
    demo: "",
    image: "load-balancer.png",
    stacks: [
      {
        id: "go",
        icon: SiGo,
        name: "Go",
      },
    ],
  },
];

const Projects: NextPage = () => {
  return (
    <Layout>
      <Seo templateTitle="Projects" description="List of my projects" />
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
