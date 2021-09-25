import React from "react";
import RoomLabel from "./RoomLabel";
import TwilioRoom from "./TwilioRoom/TwilioRoom";

const Videos = ({ room, setRoom, roomId }) => {
  return (
    <div className="videos_container">
      <RoomLabel roomId={roomId} />
      {room && <TwilioRoom room={room} />}
    </div>
  );
};

export default Videos;
