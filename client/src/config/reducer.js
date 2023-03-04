export let initialState = {
  user: {},
  products: [],
};

export const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };
    case "SET_PRODUCTS":
      return {
        ...state,
        user: action.products,
      };
    default:
      return state;
  }
};
