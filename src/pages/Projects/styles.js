import styled from "styled-components";

export const Container = styled.div`
  background-color: #333;
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100%;
  align-items: center;
  justify-content: center;
  scroll-snap-align: center;
`;

export const Works = styled.div`
  height: 500px;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  scroll-snap-type: x mandatory;
  text-align: justify;
  overflow: scroll;
  scroll-snap-points-y: repeat(100px);
  align-items: center;

  @media (max-width: 400px) {
    height: 70vh;
  }

  ::-webkit-scrollbar-track {
    background-color: #444;
  }
  ::-webkit-scrollbar {
    width: 0px;
    height: 3px;
  }

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
      transition: all 0.4s;
      z-index: 11;

      #block {
        cursor: not-allowed;
      }

      &:hover {
        transform: translate3d(-0, -10px, 0);
      }
    }

    nav {
      display: flex;
      margin: 0 20px;
      display: flex;
      border-radius: 20px;
      height: 400px;
      width: 206px;
      background-color: #777;
      align-items: center;
      justify-content: center;

      @media (max-width: 400px) {
        height: 300px;
        width: 160px;
      }
    }

    .project {
      display: flex;
      margin: 0 2px;
      border-radius: 15px;
      height: 96%;
      width: 200px;
      background-color: #fff;
      align-items: center;
      justify-content: center;
      font-family: sans-serif;
      font-family: roboto;
      flex-direction: column;
      text-decoration: none;

      img {
        width: 80%;
      }
    }

    .planta {
      font-family: roboto;
      flex-direction: column;
      border-radius: 15px;
      height: 96%;
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
  margin-top: 20px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transition: all 0.5s;

  &:hover {
    opacity: 60%;
    transform: translate3d(0, 15px, 0);
  }

  a {
    outline: none;
    text-decoration: none;
  }
`;
