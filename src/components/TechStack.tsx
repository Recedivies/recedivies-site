import {
  SiCplusplus,
  SiDjango,
  SiDocker,
  SiGo,
  SiJava,
  SiJavascript,
  SiPostgresql,
  SiPython,
} from "react-icons/si";
import { Tooltip } from "react-tippy";

import { clsxm } from "../lib/clsxm";

const TechStack = () => {
  return (
    <div className="flex space-x-2 md:space-x-4">
      {stacks.map((tech) => (
        <Tooltip
          key={tech.id}
          html={
            <div>
              <p>{tech.tooltip}</p>
            </div>
          }
        >
          <tech.icon
            key={tech.id}
            className={clsxm(
              "h-8 w-8 md:h-10 md:w-10",
              "text-gray-600 hover:text-primary-300 dark:text-gray-200 dark:hover:text-primary-300",
              "transition-colors",
            )}
          />
        </Tooltip>
      ))}
    </div>
  );
};

const stacks = [
  {
    id: "golang",
    icon: SiGo,
    tooltip: (
      <>
        <a href="https://go.dev/">Go</a>
      </>
    ),
  },
  {
    id: "java",
    icon: SiJava,
    tooltip: (
      <>
        <a href="https://www.java.com/">Java</a>
      </>
    ),
  },
  {
    id: "python",
    icon: SiPython,
    tooltip: (
      <>
        <a href="https://www.python.org/">Python</a>
      </>
    ),
  },
  {
    id: "C++",
    icon: SiCplusplus,
    tooltip: (
      <>
        <a href="https://cplusplus.com/">C++</a>
      </>
    ),
  },
  {
    id: "javascript",
    icon: SiJavascript,
    tooltip: (
      <>
        <a href="https://www.javascript.com/">JavaScript</a>
      </>
    ),
  },
  {
    id: "django",
    icon: SiDjango,
    tooltip: (
      <>
        <a href="https://www.djangoproject.com/">Django</a>
      </>
    ),
  },
  {
    id: "postgresql",
    icon: SiPostgresql,
    tooltip: (
      <>
        <a href="https://www.postgresql.org/">Postgresql</a>
      </>
    ),
  },
  {
    id: "docker",
    icon: SiDocker,
    tooltip: (
      <>
        <a href="https://www.docker.com/">Docker</a>
      </>
    ),
  },
];

export default TechStack;
