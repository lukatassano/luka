import styled from "styled-components";

export const Container = styled.div`
  background-color: #333;
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100%;
  align-items: center;
  justify-content: center;
  scroll-snap-align: start;
`;

export const Works = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);

  div {
    display: flex;
    width: 100%;
    justify-content: space-between;

    a {
      cursor: pointer;
      outline: none;
      text-decoration-line: none;
      transition: opacity 0.3s;
      z-index: 11;

      #block {
        cursor: not-allowed;
      }

      &:hover {
        opacity: 80%;
      }
    }

    nav {
      display: flex;
      margin: 0 20px;
      display: flex;
      border-radius: 20px;
      height: 420px;
      width: 206px;
      background-color: #777;
      align-items: center;
      justify-content: center;
    }

    .bethehero {
      display: flex;
      border-radius: 15px;
      height: 400px;
      width: 200px;
      background-color: #fff;
      align-items: center;
      justify-content: center;

      img {
        width: 80%;
      }
    }

    .aircnc {
      display: flex;
      border-radius: 15px;
      height: 400px;
      width: 200px;
      background-color: #fff;
      align-items: center;
      justify-content: center;

      img {
        width: 80%;
      }
    }

    .rocketshoes {
      display: flex;
      border-radius: 15px;
      height: 400px;
      width: 200px;
      background-color: #fff;
      align-items: center;
      justify-content: center;

      img {
        width: 80%;
      }
    }
    .gonative {
      display: flex;
      border-radius: 15px;
      height: 400px;
      width: 200px;
      background-color: #fff;
      align-items: center;
      justify-content: center;

      h1 {
        font-family: roboto;
        text-decoration: none;
        outline: none;
      }
    }

    .githubstars {
      display: flex;
      border-radius: 15px;
      height: 400px;
      width: 200px;
      background-color: #fff;
      align-items: center;
      justify-content: center;

      h1 {
        font-family: roboto;
      }
    }

    .planta {
      font-family: roboto;
      flex-direction: column;
      border-radius: 15px;
      height: 400px;
      width: 200px;
      background-color: #fff;
      align-items: center;
      justify-content: center;

      h1 {
        transform: translate3d(0, 40px, 0);
        color: #999;
      }

      img {
        height: 100px;
        width: 100px;
      }
    }
    .block {
      cursor: not-allowed;
    }
  }
`;

export const Button = styled.a`
  outline: none;
  text-decoration: none;

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
    margin: 40px 10px;
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
