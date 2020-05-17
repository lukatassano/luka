import styled from "styled-components";
import background from "../../assets/background.jpg";

export const Container = styled.body`
  display: flex;
  position: relative;
  transition: all 0.8s ease;
  height: 100vh;
  width: 100%;
  background-size: cover;
  background: linear-gradient(to left, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 1)),
    url(${background}) no-repeat fixed 100% 100%;

  div {
    scroll-snap-align: start;
    display: flex;
    flex: 1;
    align-items: center;
    justify-content: center;

    h1 {
      color: #fff;
    }
  }
`;
