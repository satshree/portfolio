import { GlobalState, ProjectData } from "../types";
import { ActiveProjectAction, ActionTypes, ProjectListAction } from "./actions";
import projects from "./projects";

const initialActiveProjectState: ProjectData = {
  title: "",
  description: "",
  techStack: [],
  images: [],
};

const initialProjectListState: ProjectData[] = projects;

const initialState: GlobalState = {
  activeProject: initialActiveProjectState,
  projectList: initialProjectListState,
};

const projectReducer = (
  state: GlobalState = initialState,
  action: ActiveProjectAction | ProjectListAction
) => {
  switch (action.type) {
    case ActionTypes.ACTIVE_PROJECT:
      return { ...state, activeProject: action.payload };
    case ActionTypes.PROJECT_LIST:
      return { ...state, projectList: action.payload };
    default:
      return state;
  }
};

export default projectReducer;
