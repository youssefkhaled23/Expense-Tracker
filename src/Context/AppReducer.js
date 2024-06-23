const appReducer = (state, action) => {
  switch (action.type) {
    case "DELETE_TRANSACTION":
      const updatedTransctions = state.transctions.filter((e) => e.id !== action.payload);
      localStorage.setItem("transctions", JSON.stringify(updatedTransctions));
      return {
        ...state,
        transctions: updatedTransctions,
      };
    case "ADD_TRANSCTION":
      return {
        ...state,
        transctions: [action.payload, ...state.transctions],
      };
    default:
      return state;
  }
};
export default appReducer;
