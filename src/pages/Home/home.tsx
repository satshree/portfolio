import { Flex, Image } from "@chakra-ui/react";

import img from "../../assets/coding.svg";
import style from "./home.module.css";

function Home() {
  return (
    <div
      className={`center ${style["home-page"]}`}
      style={{ flexDirection: "column" }}
    >
      <Flex alignItems="center">
        <Image src={img} alt="coding" boxSize="350px" />
        <div className={style.details}>
          <div className={style["main-title"]}>Satshree Shrestha</div>
          <div className={style.title}>Full Stack Developer</div>
          <br />
          <div>Django, Spring Boot, React.js, Next.js</div>
        </div>
      </Flex>
    </div>
  );
}

export default Home;
