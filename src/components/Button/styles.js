import styled from "styled-components";

export const Container = styled.div`
  .button {
    display: flex;
    align-items: center;
    justify-content: center;

    cursor: pointer;

    svg {
      height: 55px;
      width: 150px;
      fill: none;
      stroke-width: 5;

      .o1 {
        stroke: rgba(#ffb341, 0.7);
        fill: rgba(0, 0, 0, 0.2);
        transition: all 1s ease-in-out;
      }

      .o2 {
        stroke: white;
        stroke-dasharray: 20 420;
        stroke-dashoffset: 20;
        transition: all 1s ease-in-out;
      }
    }

    span {
      color: #fff;
      font-family: Arial, Helvetica, sans-serif;
      position: absolute;
      margin: auto 0;
      text-transform: uppercase;
      letter-spacing: 3px;
    }

    &:hover {
      .o1 {
        fill: rgba(#cc8110, 0.3);
      }

      .o2 {
        stroke-dashoffset: -420;
      }
    }
  }
`;
