import { ProjectData } from "../types";

export enum ActionTypes {
  ACTIVE_PROJECT = "ACTIVE_PROJECT",
  PROJECT_LIST = "PROJECT_LIST",
}

export interface ActiveProjectAction {
  type: ActionTypes.ACTIVE_PROJECT;
  payload: ProjectData;
}

export interface ProjectListAction {
  type: ActionTypes.PROJECT_LIST;
  payload: ProjectData[];
}

export const setActiveProject = (
  project: ProjectData
): ActiveProjectAction => ({
  type: ActionTypes.ACTIVE_PROJECT,
  payload: project,
});

export const setProjectList = (
  projectList: ProjectData[]
): ProjectListAction => ({
  type: ActionTypes.PROJECT_LIST,
  payload: projectList,
});
