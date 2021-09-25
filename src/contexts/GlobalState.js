import { createContext, useReducer, useEffect } from "react";
import AppReducer from "./AppReducer";

const initialState = {
  identity: "",
  isRoomHost: "",
  connectOnlyWithAudio: false,
  roomId: null,
};
export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  useEffect(() => {
    console.log(state);
  }, [state]);

  const setIdentity = (identity) => {
    dispatch({ type: "SET_IDENTITY", payload: identity });
  };

  const setIsRoomHost = (isRoomHost) => {
    dispatch({ type: "SET_IS_ROOM_HOST", payload: isRoomHost });
  };

  const setConnectOnlyWithAudio = (onlyWithAudio) => {
    dispatch({ type: "SET_CONNECT_ONLY_WITH_AUDIO", payload: onlyWithAudio });
  };
  const setRoomId = (roomId) => {
    dispatch({ type: "SET_ROOM_ID", payload: roomId });
  };

  return (
    <GlobalContext.Provider
      value={{
        identity: state.identity,
        isRoomHost: state.isRoomHost,
        connectOnlyWithAudio: state.connectOnlyWithAudio,
        roomId: state.roomId,
        setIdentity,
        setIsRoomHost,
        setConnectOnlyWithAudio,
        setRoomId,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
