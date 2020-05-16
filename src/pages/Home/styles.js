import styled from "styled-components";

export const Logo = styled.div`
  display: flex;
  position: absolute;
  animation: slideIn 1.5s;
  height: 50%;
  width: 60%;
  align-items: center;
  justify-content: center;

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

export const Buttons = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 50%;
  margin-top: 300px;
  align-items: center;
  justify-content: center;
  animation: slideUp 1.5s;
`;

export const Button = styled.button`
  cursor: pointer;
  position: relative;
  outline: none;
  background: none;
  color: aqua;
  font-weight: lighter;
  text-transform: uppercase;
  text-decoration: none;
  border: 0.2em solid aqua;
  padding: 1em 2em;
  margin-top: 30px;
  margin-right: 10px;
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
