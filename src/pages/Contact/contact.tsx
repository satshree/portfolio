import style from "./contact.module.css";

import img from "../../assets/mail.svg";
import { Image } from "@chakra-ui/react";

function Contact() {
  return (
    <div
      className={`center ${style["contact-page"]}`}
      style={{ flexDirection: "column" }}
    >
      <Image src={img} alt="mail" boxSize="200px" />
      <br />
      <div>
        You can reach me at{" "}
        <a href="mailto:satshree.shr@gmail.com" style={{ fontStyle: "italic" }}>
          satshree.shr@gmail.com
        </a>
      </div>
      <br />
      <div>
        <a
          href="https://github.com/satshree"
          target="_blank"
          style={{ marginRight: "0.5rem" }}
        >
          GitHub
        </a>
        |
        <a
          href="https://www.linkedin.com/in/satshree/"
          target="_blank"
          style={{ marginLeft: "0.5rem" }}
        >
          LinkedIn
        </a>
      </div>
    </div>
  );
}

export default Contact;
