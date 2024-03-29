import Image from "next/image";
import { AiFillGithub } from "react-icons/ai";
import { MdOpenInNew } from "react-icons/md";
import { useInView } from "react-intersection-observer";
import { Tooltip } from "react-tippy";

import { clsxm } from "../lib/clsxm";
import { ProjectCardProp } from "../types";

const ProjectCard = ({ project }: ProjectCardProp) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    rootMargin: "-10% 0px",
  });

  return (
    <div
      ref={ref}
      className={clsxm(
        "relative transform overflow-hidden rounded-lg bg-gray-300 transition duration-200 hover:-translate-y-1 hover:shadow-2xl dark:bg-gray-800",
        "opacity-0 transition duration-500 ease-out motion-reduce:opacity-100",
        "ring-primary-200 hover:ring",
        inView && "opacity-100",
      )}
    >
      {project.image && (
        <div className="relative h-60 overflow-hidden rounded-b-lg">
          <Image
            alt={project.title}
            src={`/images/projects/${project.image}`}
            layout="fill"
          />
        </div>
      )}
      <div className="px-4 pt-4 pb-16">
        {project.demo!.length > 0 ? (
          <a
            href={project.demo}
            target="_blank"
            className="text-xl font-semibold"
            rel="noopener noreferrer"
          >
            {project.title}
          </a>
        ) : (
          <div className="text-xl font-semibold">{project.title}</div>
        )}

        <p className="mb-1 text-lg">{project.content}</p>
        <div className="grid grid-cols-9">
          {project.stacks?.map((tech) => (
            <Tooltip
              key={tech.id}
              html={
                <div>
                  <p>{tech.name}</p>
                </div>
              }
            >
              <tech.icon
                key={tech.id}
                className={clsxm(
                  "h-8 w-8 md:h-8 md:w-10",
                  "text-gray-600 hover:text-primary-300 dark:text-gray-200 dark:hover:text-primary-300",
                  "transition-colors",
                )}
              />
            </Tooltip>
          ))}
        </div>
        <div className="absolute bottom-0 left-0 flex w-full items-center px-4 pb-4">
          {project.demo && (
            <a
              href={project.demo}
              className="mr-2 p-2"
              role="button"
              target="_blank"
              rel="noopener noreferrer"
              title="Open demo"
            >
              <MdOpenInNew className="h-6 w-6 align-middle text-gray-600 transition-colors hover:scale-105 hover:text-primary-300 dark:text-gray-300 dark:hover:text-primary-300" />
            </a>
          )}
          {project.github && (
            <a
              href={`https://github.com/${project.github}`}
              className="p-2 flex items-center font-semibold
              px-2 space-x-3 rounded-xl align-middle transition-colors hover:scale-105 hover:text-primary-300 dark:text-gray-300 dark:hover:text-primary-300"
              role="button"
              title="Open GitHub"
              target="_blank"
              rel="noopener noreferrer"
            >
              <AiFillGithub size={20} /> <span>Github</span>
            </a>
          )}
          <div className="flex-1"></div>
          {`#${project.type}`}
        </div>
      </div>
    </div>
  );
};
export default ProjectCard;
