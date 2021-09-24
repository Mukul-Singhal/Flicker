const AppReducer = (state, action) => {
  switch (action.type) {
    case "SET_IS_ROOM_HOST":
      return {
        ...state,
        isRoomHost: action.payload,
      };
    case "SET_IDENTITY":
      return {
        ...state,
        identity: action.payload,
      };
    case "SET_CONNECT_ONLY_WITH_AUDIO":
      return {
        ...state,
        connectOnlyWithAudio: action.payload,
      };
    default:
      return state;
  }
};

export default AppReducer;
