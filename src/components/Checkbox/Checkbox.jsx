import React from "react";

import check from "../../images/check.png";

import "./Checkbox.styles.css";

function Checkbox({ setConnectOnlyWithAudio, connectOnlyWithAudio }) {
  const handleConnectionTypeChange = () => {
    setConnectOnlyWithAudio(!connectOnlyWithAudio);
  };

  return (
    <div className="checkbox_container">
      <div className="checkbox_connection" onClick={handleConnectionTypeChange}>
        {connectOnlyWithAudio && (
          <img className="checkbox_image" alt="checkbox" src={check} />
        )}
      </div>
      <p className="checkbox_container_paragraph">Only Audio</p>
    </div>
  );
}

export default Checkbox;
