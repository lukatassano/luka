import React from "react";
import { IoIosArrowDown } from "react-icons/io";

import planta from "../../assets/logo.png";

import { Container, Works, Button } from "./styles";

function Work() {
  return (
    <Container id="work">
      <Works>
        <div>
          <a href="https://github.com/lukatassano/ecoleta-mobile">
            <nav className="display">
              <div className="project">
                <img
                  id="aircnc"
                  src="https://github.com/lukatassano/ecoleta-mobile/blob/master/src/assets/logo.png?raw=true"
                />
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
              </div>
            </nav>
          </a>

          <a href="https://github.com/lukatassano/GoNative">
            <nav>
              <div className="project">
                <h1>GoNative</h1>
              </div>
            </nav>
          </a>

          <a href="https://github.com/lukatassano/githubStars">
            <nav>
              <div className="project">
                <h1>GithubStars</h1>
              </div>
            </nav>
          </a>

          <a className="block">
            <nav>
              <div className="planta">
                <img src={planta} />
                <h1>Incompleto</h1>
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

export default Work;
