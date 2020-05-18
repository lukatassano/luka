import React from "react";
import { Container } from "./styles";

function About() {
  return (
    <Container>
      <div id="about">
        <h1>SOBRE</h1>
        <div className="text">
          <p>
            Eu sou Luka Tassano, desenvolvedor e designer. Tenho uma experiência
            maior com front-end e mobile, mas possuo conhecimentos de back-end.
          </p>
        </div>

        <a href="#home">
          <div className="btn btn-one">
            <span>Home</span>
          </div>
        </a>
      </div>
    </Container>
  );
}

export default About;
