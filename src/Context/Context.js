import { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";
const initalState = {
  transctions: JSON.parse(localStorage.getItem("transctions")) || [],
};

// Create Context
export const contextData = createContext(initalState);

// Provider

export const Provider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initalState);

  function deleteTransction(id) {
    dispatch({
      type: "DELETE_TRANSACTION",
      payload: id,
    });
  }

  function AddTransction(transctions) {
    dispatch({
      type: "ADD_TRANSCTION",
      payload: transctions,
    });
    localStorage.setItem(
      "transctions",
      JSON.stringify([...state.transctions, transctions])
    );
  }

  return (
    <contextData.Provider
      value={{
        transctions: state.transctions,
        deleteTransction,
        AddTransction,
      }}
    >
      {children}
    </contextData.Provider>
  );
};
