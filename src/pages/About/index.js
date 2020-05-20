import React from "react";
import { IoIosArrowDown } from "react-icons/io";

import { Container } from "./styles";

function About() {
  return (
    <Container>
      <div id="about">
        <h1>SOBRE</h1>
        <div className="text">
          <p>
            Eu sou Luka Tassano, desenvolvedor fullstack Javascript. Tenho
            experiência em Node, React e React Native.
          </p>
        </div>

        <a href="#work">
          <div className="btn btn-one">
            <IoIosArrowDown className="img" color="#fff" size={50} />
          </div>
        </a>
      </div>
    </Container>
  );
}

export default About;
