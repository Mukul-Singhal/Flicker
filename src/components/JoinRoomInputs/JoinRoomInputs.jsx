import React from "react";

import "./JoinRoomInputs.styles.css";

function JoinRoomInputs({
  nameValue,
  setNameValue,
  roomIdValue,
  setRoomIdValue,
  isRoomHost,
}) {
  const handleRoomIdValueChange = (event) => {
    setRoomIdValue(event.target.value);
  };
  const handleNameValueChange = (event) => {
    setNameValue(event.target.value);
  };
  return (
    <div className="join_room_inputs_container">
      {!isRoomHost && (
        <input
          className="join_room_input"
          placeholder="Enter Meeting Id"
          value={roomIdValue}
          onChange={handleRoomIdValueChange}
        />
      )}
      <input
        className="join_room_input"
        placeholder="Enter Your Name"
        value={nameValue}
        onChange={handleNameValueChange}
      />
    </div>
  );
}

export default JoinRoomInputs;
