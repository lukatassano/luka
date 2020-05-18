import styled from "styled-components";

export const Container = styled.body`
  @import url("https://fonts.googleapis.com/css2?family=Roboto:wght@100;300&display=swap");
  display: flex;
  position: relative;
  transition: all 0.8s ease;
  height: 100vh;
  width: 100%;
  align-items: center;
  justify-content: center;
  background-size: cover;
  background: linear-gradient(to left, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 1)),
    url("https://i.pinimg.com/originals/51/95/eb/5195ebb8c5f9772deda82aa2937134d3.jpg")
      no-repeat fixed 100% 100%;
  scroll-snap-align: start;

  #about {
    width: 100%;
    height: 60vh;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    .text {
      width: 70%;
    }

    h1 {
      margin-bottom: 40px;
      color: #fff;
      font-size: 60px;
      font-family: roboto;
      font-weight: 100;
    }
    p {
      font-size: 20px;
      font-weight: 300;
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
        Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
      color: #fff;
    }

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
      margin-top: 50px;
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
  }
`;
