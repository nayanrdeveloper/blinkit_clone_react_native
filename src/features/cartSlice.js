import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    products: [],
    totalQuantity: 0,
    totalPrice: 0,
  },
  reducers: {
    addProduct: (state, action) => {
      const { product, quantity } = action.payload;
      const existingProductIndex = state.products.findIndex(
        (p) => p._id === product._id
      );

      if (existingProductIndex !== -1) {
        // Product already exists in the cart, update quantity
        state.products[existingProductIndex].quantity += quantity;
      } else {
        // Add new product to the cart
        state.products.push({ ...product, quantity });
      }

      // Update total quantity and total price
      state.totalQuantity += quantity;
      state.totalPrice += 100 * quantity;
    },
    removeProduct: (state, action) => {
      const { productId, quantity } = action.payload;
      const existingProductIndex = state.products.findIndex(
        (p) => p._id === productId
      );

      if (existingProductIndex !== -1) {
        // Remove product from the cart
        state.totalQuantity -= state.products[existingProductIndex].quantity;
        state.totalPrice -=
          state.products[existingProductIndex].price *
          state.products[existingProductIndex].quantity;
        state.products.splice(existingProductIndex, 1);
      }
    },
    updateQuantity: (state, action) => {
      const { productId, quantity } = action.payload;
      const existingProductIndex = state.products.findIndex(
        (p) => p._id === productId
      );

      if (existingProductIndex !== -1) {
        // Update product quantity in the cart
        const oldQuantity = state.products[existingProductIndex].quantity;
        state.products[existingProductIndex].quantity = quantity;
        state.totalQuantity += quantity - oldQuantity;
        state.totalPrice +=
          state.products[existingProductIndex].price * (quantity - oldQuantity);
      }
    },
    cleanCart: (state) => {
      // Clean the cart
      state.products = [];
      state.totalQuantity = 0;
      state.totalPrice = 0;
    },
  },
});

export const { addProduct, removeProduct, updateQuantity, cleanCart } =
  cartSlice.actions;

export default cartSlice.reducer;
