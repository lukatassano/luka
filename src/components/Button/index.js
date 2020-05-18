import React from "react";

import { Container } from "./styles";

function Button() {
  return (
    <Container>
      <div className="button">
        <svg>
          <polyline
            class="o1"
            points="0 0, 150 0, 150 55, 0 55, 0 0"
          ></polyline>
          <polyline
            class="o2"
            points="0 0, 150 0, 150 55, 0 55, 0 0"
          ></polyline>
        </svg>
      </div>
    </Container>
  );
}

export default Button;
