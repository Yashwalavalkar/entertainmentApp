export const addToCart = (item) => ({
  type: 'ADD_TO_CART',
  payload: item
});

export const removeFromCart = (index) => ({
  type: 'REMOVE_FROM_CART',
  payload: index
});

export const setCartItems = (cartItems) => ({
  type: 'SET_CART_ITEMS',
  payload: cartItems
});

