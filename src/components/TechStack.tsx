import {
  SiCplusplus,
  SiDjango,
  SiJava,
  SiJavascript,
  SiPostgresql,
  SiPython,
  SiReact,
  SiTypescript,
} from "react-icons/si";
import { Tooltip } from "react-tippy";

import { clsxm } from "./links/clsxm";

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
    id: "python",
    icon: SiPython,
    tooltip: (
      <>
        <a href="https://www.python.org/">Python</a>
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
    id: "typescript",
    icon: SiTypescript,
    tooltip: (
      <>
        <a href="https://www.typescriptlang.org/">TypeScript</a>
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
    id: "react",
    icon: SiReact,
    tooltip: (
      <>
        <a href="https://reactjs.org/">React</a>
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
];

export default TechStack;
