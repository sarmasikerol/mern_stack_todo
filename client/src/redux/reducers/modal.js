const modalReducers = (state = { modal: false }, action) => {
  switch (action.type) {
    case "MODAL":
      return {
        modal: action.payload,
      };

    default:
      return state;
  }
};

export default modalReducers;
