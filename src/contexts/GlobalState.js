import { createContext, useReducer, useEffect } from "react";
import AppReducer from "./AppReducer";

const initialState = {
  identity: "",
  isRoomHost: "",
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

  return (
    <GlobalContext.Provider
      value={{
        identity: state.identity,
        isRoomHost: state.isRoomHost,
        setIdentity,
        setIsRoomHost,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
