import { ADD_TO_CART, REMOVE_FROM_CART } from "../../../utility";

export const initialState = {
  cart: [],
  isLoading: false,
  error: "",
};

const cartReducer = (state: any = initialState, action: any) => {
  console.log(state);
  switch (action.type) {
    case ADD_TO_CART:
      return { ...state, cart: [...state.cart, action.payload] };

    case REMOVE_FROM_CART:
      return { ...state, cart: state.cart.filter((item: any) => item.id !== action.payload)}

    default:
      return state;
  }
};
export default cartReducer;
