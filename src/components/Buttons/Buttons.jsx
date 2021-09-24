import React from "react";

import "./Button.styles.css";

function Button({ createRoomButton = false, buttonText, onClickHandler }) {
  const buttonClass = createRoomButton
    ? "create_room_button"
    : "join_room_button";

  return (
    <button className={buttonClass} onClick={onClickHandler}>
      {buttonText}
    </button>
  );
}

export default Button;
