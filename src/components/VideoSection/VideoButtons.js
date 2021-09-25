import React from "react";
import MicButton from "./MicButton";
import CameraButton from "./CameraButton";
import LeaveRoomButton from "./LeaveRoomButton";
import SwitchToScreenSharingButton from "./SwitchToScreenSharingButton";

const VideoButtons = (props) => {
  const { room, connectOnlyWithAudio } = props;

  return (
    <div className="video_buttons_container">
      <MicButton room={room} />
      {!connectOnlyWithAudio && <CameraButton room={room} />}
      <LeaveRoomButton room={room} />
      <SwitchToScreenSharingButton room={room} />
    </div>
  );
};

export default VideoButtons;
