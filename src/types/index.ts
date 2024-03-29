import { PropsWithChildren } from "react";

export type BaseProps = PropsWithChildren;

export interface ProjectData {
  title?: string;
  description?: string;
  techStack?: string[];
  images?: string[];
  link?: string;
}

export type CardProps = PropsWithChildren &
  ProjectData & {
    onClick?: (project: ProjectData) => void;
  };

export type DrawerProps = PropsWithChildren &
  ProjectData & {
    open: true | false;
    onClose?: () => void;
  };

export type GlobalState = {
  activeProject?: ProjectData;
  projectList?: ProjectData[];
};

export type ProjectProps = PropsWithChildren & GlobalState;
