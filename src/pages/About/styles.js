import styled from "styled-components";

export const Container = styled.body`
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
      text-align: center;
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

    .btn {
      display: flex;
      margin-top: 50px;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      transition: all 0.3s;

      &:hover {
        opacity: 60%;
        transform: translate3d(0, 15px, 0);
      }

      a {
        outline: none;
        text-decoration: none;
      }
    }
  }
`;
