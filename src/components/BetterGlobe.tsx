import React from "react";
import ReactGlobe from "react-globe";

function BetterGlobe() {
  return (
    <ReactGlobe
      options={{
        cameraAutoRotateSpeed: 0.2,
        cameraMaxPolarAngle: (Math.PI * 9) / 16,
        cameraMinPolarAngle: (Math.PI * 7) / 16,
        cameraRotateSpeed: 0.5,
        enableCameraAutoRotate: true,
        enableCameraRotate: true,
      }}
    />
  );
}

export default BetterGlobe;
