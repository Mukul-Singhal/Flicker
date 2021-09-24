import React, { useEffect, useContext } from "react";

import { useLocation } from "react-router";

import { GlobalContext } from "../../contexts/GlobalState";

function JoinRoom() {
  const { setIsRoomHost } = useContext(GlobalContext);

  const search = useLocation().search;
  useEffect(() => {
    const isRoomHost = new URLSearchParams(search).get("host");

    if (isRoomHost) {
      setIsRoomHost(isRoomHost);
    }
  }, []);

  return <div>Join Room</div>;
}

export default JoinRoom;
