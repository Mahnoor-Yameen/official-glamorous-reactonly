
export const CartReducer = (cart_state, action) => {
  switch (action.type) {


    case "ADD_TO_CART":
      return { ...cart_state, cart: [...cart_state.cart, action.payload] }
    case "CLEAR_CART":
      return { ...cart_state, cart: [] }

    case "UPDATE_CART":
      return {
        ...cart_state,
        cart: action.payload
      };
    case "INCREASE_QUANTITY":
      // Find the index of the product with matching title
      const increaseIndex = cart_state.cart.findIndex(item => item.title === action.title);

      // Copy the cart array to make changes
      const increasedCart = [...cart_state.cart];

      // Increase the quantity of the matching product
      increasedCart[increaseIndex].ProductQuantity += 1;

      // Return the updated state with updated cart
      return { ...cart_state, cart: increasedCart };
    case "DECREASE_QUANTITY":
      // Find the index of the product with matching title
      const decreaseIndex = cart_state.cart.findIndex(item => item.title === action.title);

      // Copy the cart array to make changes
      const decreasedCart = [...cart_state.cart];

      // Decrease the quantity of the matching product, but ensure it doesn't go below 1
      decreasedCart[decreaseIndex].ProductQuantity = Math.max(1, decreasedCart[decreaseIndex].ProductQuantity - 1);

      // Return the updated state with updated cart
      return { ...cart_state, cart: decreasedCart };

    case "DELETE_PRODUCT":
      return {
        ...cart_state,
        cart: cart_state.cart.filter(cart => cart.title !== action.title)
      };


    default:
      return cart_state;
  }


}