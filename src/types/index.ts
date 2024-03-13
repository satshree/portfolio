import { PropsWithChildren } from "react";

export type BaseProps = PropsWithChildren;

export interface ProjectData {
  title?: string;
  description?: string;
  techStack?: string[];
  images?: string[];
}

export type CardProps = PropsWithChildren &
  ProjectData & {
    onClick?: (project: ProjectData) => void;
  };
