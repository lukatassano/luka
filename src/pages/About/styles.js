import styled from "styled-components";

export const Container = styled.div`
  h1 {
    font-family: Arial, Helvetica, sans-serif;
    font-size: 80px;
    color: #ddd;
    animation: slideDown 1.5s;
  }

  @keyframes slideDown {
    0% {
      transform: translateY(900px);
    }
    100% {
      transform: translateY(0px);
    }
  }
`;
