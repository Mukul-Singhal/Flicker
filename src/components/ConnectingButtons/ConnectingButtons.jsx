import React from "react";
import { useHistory } from "react-router-dom";

import Button from "../Buttons/Buttons";

import "./ConnectinButtons.styles.css";

function ConnectingButtons() {
  let history = useHistory();

  const pushToJoinRoomPage = () => {
    history.push("/join-room");
  };

  const pushToJoinRoomPageAsHost = () => {
    history.push("/join-room?host=true");
  };

  return (
    <div className="connecting_buttons_container">
      <Button buttonText="Join a Meeting" onClickHandler={pushToJoinRoomPage} />
      <Button
        buttonText="Host a Meeting"
        createRoomButton
        onClickHandler={pushToJoinRoomPageAsHost}
      />
    </div>
  );
}

export default ConnectingButtons;
