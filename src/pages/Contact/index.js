import React from "react";
import { FaFacebook, FaLinkedin, FaGithub } from "react-icons/fa";

import { Container } from "./styles";

function Contact() {
  return (
    <Container id="contact">
      <div>
        <h1>Contato</h1>
        <div className="icons">
          <a href="https://www.facebook.com/luka.tassano/">
            <FaFacebook size={50} color="#fff" />
          </a>
          <a href="https://github.com/lukatassano">
            <FaGithub size={50} color="#fff" />
          </a>
          <a href="https://www.linkedin.com/in/luka-avila-tassano-06aa52160/">
            <FaLinkedin size={50} color="#fff" />
          </a>
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

export default Contact;
