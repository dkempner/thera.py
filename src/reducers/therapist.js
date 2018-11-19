export default (state = null, action) => {
  switch (action.type) {
    case "SET_THERAPIST":
      return {
        ...state,
        ...action.payload
      };
    default:
      return state;
  }
};
