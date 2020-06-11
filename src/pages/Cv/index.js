import React from "react";
import cv from "../../assets/cv.pdf";

function Cv() {
  return (
    <div
      style={{
        display: "flex",
        flex: 1,
        height: "100vh",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <object
        type="application/pdf"
        data={cv}
        style={{ height: "100vh", flex: 1 }}
      />
    </div>
  );
}

export default Cv;
