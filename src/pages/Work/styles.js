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

export const Works = styled.div`
  height: 90%;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  scroll-snap-type: x mandatory;
  text-align: justify;
  overflow: scroll;
  scroll-snap-points-y: repeat(100px);
  align-items: center;

  div {
    align-items: center;
    scroll-snap-align: center;
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

export const Button = styled.div`
  display: flex;
  margin-bottom: 100px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transition: opacity 0.3s;

  &:hover {
    opacity: 60%;
  }

  a {
    outline: none;
    text-decoration: none;
  }
`;
