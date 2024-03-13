import { useEffect, useState } from "react";
import { CardProps, ProjectData } from "../../types";

import style from "./card.module.css";

import img from "../../assets/system.svg";

function Card(props: CardProps) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [techStack, setTechStack] = useState<string[]>([]);

  useEffect(() => setTitle(props.title || ""), [props.title]);
  useEffect(() => setDescription(props.description || ""), [props.description]);
  useEffect(() => setTechStack(props.techStack || []), [props.techStack]);

  const projectData: ProjectData = {
    title,
    description,
    techStack,
    images: props.images || [img],
  };

  const clickEvent = (project: ProjectData) => {
    if (props.onClick) props.onClick(project);
  };

  return (
    <div className={style.card} onClick={() => clickEvent(projectData)}>
      <img
        className={style["title-img"]}
        src={props.images && props.images.length > 0 ? props.images[0] : img}
        alt="title image"
      />
      <div className={style.title}>{title}</div>
      <div className={style.description}>{`${description.substring(
        0,
        20
      )}...`}</div>
      <div className={style["tech-stack"]}>
        {techStack.map((t) => (
          <div className={style.tech}>{t}</div>
        ))}
      </div>
    </div>
  );
}

export default Card;
