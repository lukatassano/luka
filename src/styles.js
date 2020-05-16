import styled from "styled-components";

export const Container = styled.body`
  position: relative;
  animation: expand 0.8s ease forwards;
  transition: all 0.8s ease;

  -webkit-font-smoothing: antialiased;
  display: flex;
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.9)),
    url("https://wallpaperaccess.com/full/1657858.jpg") bottom;
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
`;
