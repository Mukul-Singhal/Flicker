import React, { useState, useEffect, useContext } from "react";

import { useLocation } from "react-router";

import { GlobalContext } from "../../contexts/GlobalState";

import JoinRoomTitle from "../../components/JoinRoomTitle/JoinRoomTitle";
import JoinRoomContent from "../../components/JoinRoomContent/JoinRoomContent";
import LoadingOverlay from "../../components/LoadingOverlay/LoadingOverlay";

import "./JoinRoom.styles.css";

function JoinRoom() {
  const [showLoading, setShowLoading] = useState(false);

  const { setIsRoomHost, isRoomHost } = useContext(GlobalContext);

  const search = useLocation().search;
  console.log(search);
  useEffect(() => {
    const isRoomHost = new URLSearchParams(search).get("host");

    if (isRoomHost) {
      setIsRoomHost(isRoomHost);
    }
  }, []);

  return (
    <div className="join_room_page_container">
      <div className="join_room_page_panel">
        <JoinRoomTitle isRoomHost={isRoomHost} />
        <JoinRoomContent setShowLoading={setShowLoading} />
        {showLoading && <LoadingOverlay />}
      </div>
    </div>
  );
}

export default JoinRoom;
