import React, { useState, useContext } from "react";

import { GlobalContext } from "../../contexts/GlobalState";

import JoinRoomInputs from "../JoinRoomInputs/JoinRoomInputs";
import Checkbox from "../Checkbox/Checkbox";

function JoinRoomContent() {
  const [roomIdValue, setRoomIdValue] = useState("");
  const [nameValue, setNameValue] = useState("");

  const { isRoomHost, setConnectOnlyWithAudio, connectOnlyWithAudio } =
    useContext(GlobalContext);

  return (
    <>
      <JoinRoomInputs
        roomIdValue={roomIdValue}
        setRoomIdValue={setRoomIdValue}
        nameValue={nameValue}
        setNameValue={setNameValue}
        isRoomHost={isRoomHost}
      />
      <Checkbox
        setConnectOnlyWithAudio={setConnectOnlyWithAudio}
        connectOnlyWithAudio={connectOnlyWithAudio}
      />
    </>
  );
}

export default JoinRoomContent;
