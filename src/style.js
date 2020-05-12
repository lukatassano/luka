import styled from "styled-components";

export const Body = styled.body`
  position: relative;
  animation: expand 0.8s ease forwards;
  transition: all 0.8s ease;

  -webkit-font-smoothing: antialiased;
  display: flex;
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.9)),
    url("https://wallpaperaccess.com/full/1657858.jpg");
  width: 100%;
  height: 100vh;
  align-items: center;
  justify-content: center;
`;

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  height: 100%;
  z-index: -10;
  background-color: var(--contrast-color);
`;

export const Logo = styled.div`
  position: absolute;
  animation: slideIn 1.5s;

  #logo {
    animation: fill ease 1.5s forwards 2.5s;
  }

  #logo path:nth-child(1) {
    stroke-dasharray: 1901;
    stroke-dashoffset: 1901;

    animation: line-anim 11s ease forwards 0.8s;
  }

  @keyframes line-anim {
    to {
      stroke-dashoffset: 0;
    }
  }

  @keyframes fill {
    from {
      fill: transparent;
    }
    to {
      fill: white;
    }
  }
`;

export const Button = styled.button`
  animation: slideUp 1.5s;
  cursor: pointer;
  margin: 300px 10px 0 10px;
  position: relative;
  background: none;
  color: aqua;
  font-weight: lighter;
  text-transform: uppercase;
  text-decoration: none;
  border: 0.1em solid aqua;
  padding: 1em 2em;
  &::before {
    content: "";
    display: block;
    position: absolute;
    width: 10%;
    background: #222;
    height: 0.3em;
    right: 20%;
    top: -0.21em;
    transform: skewX(-45deg);
    -webkit-transition: all 0.45s cubic-bezier(0.86, 0, 0.07, 1);
    transition: all 0.45s cubic-bezier(0.86, 0, 0.07, 1);
  }
  &::after {
    content: "";
    display: block;
    position: absolute;
    width: 10%;
    background: #222;
    height: 0.3em;
    left: 20%;
    bottom: -0.25em;
    transform: skewX(45deg);
    -webkit-transition: all 0.45 cubic-bezier(0.86, 0, 0.07, 1);
    transition: all 0.45s cubic-bezier(0.86, 0, 0.07, 1);
  }
  &:hover {
    &::before {
      right: 80%;
    }
    &::after {
      left: 80%;
    }
  }

  @keyframes slideIn {
    0% {
      transform: translateX(500px) scale(0.2);
    }
    100% {
      transform: translateX(0px) scale(1);
    }
  }

  @keyframes slideUp {
    0% {
      transform: translateY(300px);
    }
    100% {
      transform: translateY(0px);
    }
  }

  @keyframes expand {
    0% {
      transform: translateX(1400px);
    }
    100% {
      transform: translateX(0px);
    }
  }
`;
