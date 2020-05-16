import React from "react";
import { Container, Overlay } from "./styles";

import Routes from "./routes";

function App() {
  return (
    <>
      <Container>
        <Routes>
          <Overlay />
        </Routes>
      </Container>
    </>
  );
}

export default App;
