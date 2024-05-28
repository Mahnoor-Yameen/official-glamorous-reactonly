
export const reduce = (state, action) => {
  switch (action.type) {


    case "ADD_TO_CART":
      return { ...state, cart: [...state.cart, action.payload] }
    case "CLEAR_CART":
      return { ...state, cart: [] }

    case "UPDATE_CART":
      return {
        ...state,
        cart: action.payload
      };
    case "INCREASE_QUANTITY":
      // Find the index of the product with matching title
      const increaseIndex = state.cart.findIndex(item => item.title === action.title);

      // Copy the cart array to make changes
      const increasedCart = [...state.cart];

      // Increase the quantity of the matching product
      increasedCart[increaseIndex].ProductQuantity += 1;

      // Return the updated state with updated cart
      return { ...state, cart: increasedCart };
    case "DECREASE_QUANTITY":
      // Find the index of the product with matching title
      const decreaseIndex = state.cart.findIndex(item => item.title === action.title);

      // Copy the cart array to make changes
      const decreasedCart = [...state.cart];

      // Decrease the quantity of the matching product, but ensure it doesn't go below 1
      decreasedCart[decreaseIndex].ProductQuantity = Math.max(1, decreasedCart[decreaseIndex].ProductQuantity - 1);

      // Return the updated state with updated cart
      return { ...state, cart: decreasedCart };

    case "DELETE_PRODUCT":
      return {
        ...state,
        cart: state.cart.filter(cart => cart.title !== action.title)
      };


    default:
      return state;
  }


}