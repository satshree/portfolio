import {
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { DrawerProps } from "../../types";

import img from "../../assets/system.svg";

import style from "./drawer.module.css";

function ProjectDrawer(props: DrawerProps) {
  const [isOpen, setOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [techStack, setTechStack] = useState<string[]>([]);
  const [images, setImages] = useState<string[]>([]);

  useEffect(() => setOpen(props.open), [props.open]);
  useEffect(() => setTitle(props.title || ""), [props.title]);
  useEffect(() => setDescription(props.description || ""), [props.description]);
  useEffect(() => setTechStack(props.techStack || []), [props.techStack]);
  useEffect(() => setImages(props.images || [img]), [props.images]);

  const onClose = () => {
    if (props.onClose) props.onClose();
  };

  return (
    <Drawer size="xl" isOpen={isOpen} placement="right" onClose={onClose}>
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton />
        <DrawerHeader>{title}</DrawerHeader>

        <DrawerBody>
          <div className={style["img-box"]}>
            <img className={style.img} src={images[0]} alt="project image" />
          </div>
          <div className={style.description}>{description}</div>
          <div className={style["tech-stack"]}>
            This project is made with
            <ul className={style["tech-list"]}>
              {techStack.map((t) => (
                <li className={style.tech}>{t}</li>
              ))}
            </ul>
          </div>
        </DrawerBody>

        <DrawerFooter>
          <Button variant="outline" size="sm" mr={3} onClick={onClose}>
            Close
          </Button>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}

export default ProjectDrawer;
