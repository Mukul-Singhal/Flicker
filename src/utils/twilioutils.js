import axios from "axios";

export const checkIfRoomExists = async (roomId) => {
  const response = await axios.get(
    `http://localhost:5001/api/room-exists?roomId=${roomId}`
  );

  return response.data.roomExists;
};
