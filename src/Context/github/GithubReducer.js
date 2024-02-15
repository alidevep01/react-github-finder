const githubReducer = (state, action) => {
  switch (action.type) {
    case "GITHUB_USER":
      return {
        ...state,
        users: action.payload,
        loading: false,
      };
    case "SET_LOADING":
      return {
        ...state,
        loading: true,
      };
    case "CLEAR_USER":
      return {
        ...state,
        users: [],
      };
    default:
      return state;
  }
};

export default githubReducer;
