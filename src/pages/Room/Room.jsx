import React from "react";
import "./Room.styles.css";

import ParticipantsSection from "../../components/ParticipantsSection/ParticipantsSection";
import ChatSection from "../../components/ChatSection/ChatSection";
import VideoSection from "../../components/VideoSection/VideoSection";

function Room() {
  return (
    <div className="room_container">
      <ParticipantsSection />
      <VideoSection />
      <ChatSection />
    </div>
  );
}

export default Room;
