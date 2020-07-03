import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  overflow: hidden;
  width: 100%;
  height: 100vh;
  align-items: center;
  justify-content: center;
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.9)),
    url("https://wallpaperaccess.com/full/1657858.jpg") bottom no-repeat fixed;

  scroll-snap-type: mandatory;
  scroll-snap-points-y: repeat(300px);
  scroll-snap-type: y mandatory;
  scroll-snap-align: center;
`;

export const Logo = styled.div`
  display: flex;
  position: absolute;
  animation: slideIn 1.5s;
  height: 50%;
  width: 60%;
  align-items: center;
  justify-content: center;

  svg {
    margin-bottom: 100px;
  }

  #logo {
    animation: fill ease 1.5s forwards 3s;
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
  width: 60%;
  margin-top: 300px;
  align-items: center;
  justify-content: center;
  animation: slideUp 1.5s;

  a {
    outline: none;
    text-decoration: none;
  }

  span {
    outline: none;
    text-transform: uppercase;
    color: #fff;
    font-family: roboto;
    font-weight: 100;
    font-size: 20px;
    text-decoration: none;
  }

  .btn {
    outline: none;
    margin: 10px 10px;
    line-height: 50px;
    height: 50px;
    text-align: center;
    width: 250px;
    cursor: pointer;
  }

  /* 
========================
      BUTTON ONE
========================
*/
  .btn-one {
    color: #fff;
    transition: all 0.3s;
    position: relative;
  }
  .btn-one span {
    transition: all 0.3s;
  }
  .btn-one::before {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    opacity: 0;
    transition: all 0.3s;
    border-top-width: 1px;
    border-bottom-width: 1px;
    border-top-style: solid;
    border-bottom-style: solid;
    border-top-color: rgba(255, 255, 255, 0.5);
    border-bottom-color: rgba(255, 255, 255, 0.5);
    transform: scale(0.1, 1);
  }
  .btn-one:hover span {
    letter-spacing: 2px;
  }
  .btn-one:hover::before {
    opacity: 1;
    transform: scale(1, 1);
  }
  .btn-one::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    transition: all 0.3s;
    background-color: rgba(255, 255, 255, 0.1);
  }
  .btn-one:hover::after {
    opacity: 0;
    transform: scale(0.1, 1);
  }
`;

export const Button = styled.button`
  cursor: pointer;
  position: relative;
  outline: none;
  background: none;
  color: white;
  font-weight: lighter;
  text-transform: uppercase;
  text-decoration: none;
  border: 0.2em solid #ddd;
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
