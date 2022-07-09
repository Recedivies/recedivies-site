import Image from "next/image";
import { MdOpenInNew } from "react-icons/md";

import { Project } from "../pages/projects";
import { clsxm } from "./links/clsxm";

export type ProjectCardProp = {
  project: Project;
};

const ProjectCard = ({ project }: ProjectCardProp) => {};

export default ProjectCard;
