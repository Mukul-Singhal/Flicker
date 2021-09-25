import React from "react";
import "./LoadingOverlay.styles.css";

const LoadingOverlay = () => {
  return (
    <div className="loading_overlay_container">
      <div className="loading_overlay_loader"></div>
    </div>
  );
};

export default LoadingOverlay;
