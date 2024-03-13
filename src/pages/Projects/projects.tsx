import { useEffect, useState } from "react";
import { connect, useDispatch } from "react-redux";

import Card from "../../components/Card";
import ProjectDrawer from "../../components/Drawer";

import { ActionTypes } from "../../app/actions";
import { GlobalState, ProjectData, ProjectProps } from "../../types";

import style from "./projects.module.css";

function Projects(props: ProjectProps) {
  const dispatch = useDispatch();

  const [drawerOpen, toggleDrawerOpen] = useState(false);
  const [activeProject, updateActiveProject] = useState<ProjectData>({});
  const [projectList, updateProjectList] = useState<ProjectData[]>([]);

  useEffect(() => {
    updateActiveProject(props.activeProject || {});
  }, [props.activeProject]);
  useEffect(
    () => updateProjectList(props.projectList || []),
    [props.projectList]
  );

  const openDrawer = (project: ProjectData) => {
    // setActiveProject(project);
    dispatch({ type: ActionTypes.ACTIVE_PROJECT, payload: project });
    toggleDrawerOpen(true);
  };

  return (
    <div className={`${style["project-page"]}`}>
      <div className={style["project-list"]}>
        {projectList.map((p) => (
          <Card
            title={p.title}
            description={p.description}
            techStack={p.techStack}
            images={p.images}
            onClick={openDrawer}
          />
        ))}
      </div>

      <ProjectDrawer
        open={drawerOpen}
        {...activeProject}
        onClose={() => toggleDrawerOpen(false)}
      />
    </div>
  );
}

function mapStateToProps(state: GlobalState) {
  const { activeProject, projectList } = state;

  return { activeProject, projectList };
}

export default connect(mapStateToProps)(Projects);
