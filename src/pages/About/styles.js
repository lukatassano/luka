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
  background: linear-gradient(to top, rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.2)),
    url("https://images.unsplash.com/photo-1548092372-0d1bd40894a3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=50")
      no-repeat fixed bottom;
  scroll-snap-align: center;

  .content {
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
