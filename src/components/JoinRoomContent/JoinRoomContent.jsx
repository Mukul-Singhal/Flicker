import React, { useState, useContext } from "react";

import { GlobalContext } from "../../contexts/GlobalState";

import JoinRoomInputs from "../JoinRoomInputs/JoinRoomInputs";
import Checkbox from "../Checkbox/Checkbox";
import RoomNotFoundMessage from "../RoomNotFoundMessage/RoomNotFound";
import JoinRoomButtons from "../JoinRoomButtons/JoinRoomButtons";

import { useHistory } from "react-router-dom";

import { checkIfRoomExists } from "../../utils/twilioutils";

import { v4 as uuidv4 } from "uuid";

function JoinRoomContent({ setShowLoading }) {
  const [roomIdValue, setRoomIdValue] = useState("");
  const [nameValue, setNameValue] = useState("");
  const [showRoomNotFoundMessage, setShowRoomNotFoundMessage] = useState(false);

  const {
    isRoomHost,
    setConnectOnlyWithAudio,
    setIdentity,
    connectOnlyWithAudio,
    setRoomId,
  } = useContext(GlobalContext);

  const history = useHistory();

  const handleJoinToRoom = async () => {
    setIdentity(nameValue);
    if (!isRoomHost) {
      setShowLoading(true);
      const roomExists = await checkIfRoomExists(roomIdValue);
      setShowLoading(false);
      console.log("roomExists", roomExists);
      if (roomExists) {
        setRoomId(roomIdValue);
        history.push("/room");
      } else {
        setShowRoomNotFoundMessage(true);
      }
    } else {
      setRoomId(uuidv4());
      history.push("/room");
    }
  };

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
      <RoomNotFoundMessage showRoomNotFoundMessage={showRoomNotFoundMessage} />
      <JoinRoomButtons
        isRoomHost={isRoomHost}
        handleJoinToRoom={handleJoinToRoom}
      />
    </>
  );
}

export default JoinRoomContent;
