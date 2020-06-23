import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  height: 100vh;
  width: 100%;
  align-items: center;
  justify-content: center;
  scroll-snap-align: start;

  div {
    display: flex;
    flex-direction: column;

    h1 {
      color: #fff;
      text-transform: uppercase;
      font-family: roboto;
      font-weight: 100;
      font-size: 50px;
      letter-spacing: 7px;
    }

    .icons {
      display: flex;
      flex-direction: row;
      margin-top: 30px;
      justify-content: space-around;

      a {
        cursor: pointer;
        transition: opacity 0.3s;

        .facebook {
          fill: #fff;
          transition: 0.3s;

          &:hover {
            fill: #3b5998;
          }
        }
        .github {
          fill: #fff;
          transition: 0.3s;

          &:hover {
            fill: #999;
          }
        }
        .linkedin {
          fill: #fff;
          transition: 0.3s;

          &:hover {
            fill: #0e76a8;
          }
        }

      }
    }

    .buttons {
      margin-top: 30px;

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
        margin-top: 8px;
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
  }
`;
