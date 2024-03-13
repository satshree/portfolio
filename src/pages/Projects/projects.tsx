import { useState } from "react";
import Card from "../../components/Card";
import ProjectDrawer from "../../components/Drawer";
import { ProjectData } from "../../types";

import style from "./projects.module.css";

function Projects() {
  const [drawerOpen, toggleDrawerOpen] = useState(false);
  const [activeProject, setActiveProject] = useState<ProjectData>({});

  const ProjectList = [
    {
      title: "Project",
      description: "loremipsumqwertyqwertyasdfasdf",
      techStack: ["Django", "Next.js", "Chakra UI"],
    },
    {
      title: "Project",
      description: "loremipsumqwertyqwertyasdfasdf",
      techStack: ["Django", "Next.js", "Chakra UI"],
    },
    {
      title: "Project",
      description: "loremipsumqwertyqwertyasdfasdf",
      techStack: ["Django", "Next.js", "Chakra UI"],
    },
  ];

  const openDrawer = (project: ProjectData) => {
    setActiveProject(project);
    toggleDrawerOpen(true);
  };

  return (
    <div className={`${style["project-page"]}`}>
      <div className={style["project-list"]}>
        {ProjectList.map((p) => (
          <Card
            title={p.title}
            description={p.description}
            techStack={p.techStack}
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

export default Projects;
