import React from "react";
import { IoIosArrowDown } from "react-icons/io";

import planta from "../../assets/logo.png";

import { Container, Works, Button } from "./styles";

function Projects() {
  return (
    <Container id="projects">
      <Works>
        <div>
          <a href="https://github.com/lukatassano/ecoleta-mobile">
            <nav className="display">
              <div className="project">
                <img
                  id="aircnc"
                  src="https://github.com/lukatassano/ecoleta-mobile/blob/master/src/assets/logo.png?raw=true"
                />
                <ul>
                  <h3>Tecnologias</h3>
                  <li>&emsp;Node.js</li>
                  <li>&emsp;ReactJS</li>
                  <li>&emsp;React Native</li>
                </ul>
              </div>
            </nav>
          </a>
          <a href="https://github.com/lukatassano/bethehero">
            <nav className="display">
              <div className="project">
                <img
                  id="aircnc"
                  src="https://github.com/lukatassano/beTheHero/raw/master/assets/logo.svg?sanitize=true"
                />
                <ul>
                  <h3>Tecnologias</h3>
                  <li>&emsp;Node.js</li>
                  <li>&emsp;ReactJS</li>
                  <li>&emsp;React Native</li>
                </ul>
              </div>
            </nav>
          </a>

          <a href="https://github.com/lukatassano/aircnc">
            <nav>
              <div className="project">
                <img
                  id="aircnc"
                  src="https://github.com/lukatassano/AirCnC/raw/master/mobile/src/assets/logo@3x.png"
                />
                <ul>
                  <h3>Tecnologias</h3>
                  <li>&emsp;Node.js</li>
                  <li>&emsp;ReactJS</li>
                  <li>&emsp;React Native</li>
                </ul>
              </div>
            </nav>
          </a>

          <a href="https://github.com/lukatassano/rocketshoes-mobile">
            <nav>
              <div className="project">
                <img
                  id="rocketshoes"
                  src="https://github.com/lukatassano/rocketshoes/raw/master/images/rocketshoesLogo.svg?sanitize=true"
                />
                <ul>
                  <h3>Tecnologias</h3>
                  <li>&emsp;ReactJS</li>
                  <li>&emsp;React Native</li>
                </ul>
              </div>
            </nav>
          </a>

          <a href="https://github.com/lukatassano/GoNative">
            <nav>
              <div className="project">
                <h1>GoNative</h1>
                <ul>
                  <h3>Tecnologias</h3>
                  <li>&emsp;React Native</li>
                </ul>
              </div>
            </nav>
          </a>

          <a href="https://github.com/lukatassano/githubStars">
            <nav>
              <div className="project">
                <h1>GithubStars</h1>
                <ul>
                  <h3>Tecnologias</h3>
                  <li>&emsp;React Native</li>
                </ul>
              </div>
            </nav>
          </a>

          <a className="block">
            <nav>
              <div className="planta">
                <img src={planta} />
                <h1>Incompleto</h1>
                <ul>
                  <h3>Tecnologias</h3>
                  <li>&emsp;React Native</li>
                  <li>&emsp;ArduinoIDE (linguagem C)</li>
                  <li>&emsp;MQTT</li>
                </ul>
              </div>
            </nav>
          </a>
        </div>
      </Works>
      <Button href="#home">
        <a href="#contact">
          <IoIosArrowDown className="img" color="#fff" size={50} />
        </a>
      </Button>
    </Container>
  );
}

export default Projects;
