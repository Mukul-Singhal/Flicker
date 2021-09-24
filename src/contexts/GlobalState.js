import { createContext, useReducer, useEffect } from "react";
import AppReducer from "./AppReducer";

const initialState = {
  identity: "",
  isRoomHost: "",
  connectOnlyWithAudio: false,
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

  return (
    <GlobalContext.Provider
      value={{
        identity: state.identity,
        isRoomHost: state.isRoomHost,
        connectOnlyWithAudio: state.connectOnlyWithAudio,
        setIdentity,
        setIsRoomHost,
        setConnectOnlyWithAudio,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
