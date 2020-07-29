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
            Apaixonado por programação e suas possibilidades de automatizar e
            facilitar processos, com ela consegui fazer:
            <br />
            <br />- Um pequeno assistente virtual para Windows
            <br />- Detector de gás e fumaça wifi
            <br />- Irrigador de plantas automatizado por horário com sensor de
            umidade controlado por aplicativo
            <br />
            <br />
            Nessa trajetória conheci linguagens como C, C#, Python, Java e
            Javascript com HTML e CSS onde estou me especializando hoje,
            estudando frameworks como Node.js, React e React Native para dominar
            o back-end, front-end e mobile. Sempre disposto a aprender algo
            novo, mais eficiente e/ou benéfico para o projeto. Flexível,
            comunicativo e sempre com muito foco no resultado
          </p>
        </div>

        <a href="#projects">
          <div className="btn btn-one">
            <IoIosArrowDown className="img" color="#fff" size={50} />
          </div>
        </a>
      </div>
    </Container>
  );
}

export default About;
