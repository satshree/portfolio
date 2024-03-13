import Card from "../../components/Card";
import { ProjectData } from "../../types";

import style from "./projects.module.css";

function Projects() {
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
    console.log(project);
    alert(`OPEN PROJECT ${project.title}`);
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
    </div>
  );
}

export default Projects;
