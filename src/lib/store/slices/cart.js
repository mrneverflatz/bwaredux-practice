import { createSlice } from "@reduxjs/toolkit";

//VAT25%
const tax = 25;

const initialState = {
  data: {},
  subTotal: 0,
  tax: 0,
  total: 0,
  length: 0,
};

const recalculateQty = (items) => {
  return Object.keys(items).reduce((acc, id) => {
    return acc + Number(items[id].qty);
  }, 0);
};

const recalculateSubTotal = (items) => {
  return Object.keys(items).reduce((acc, id) => {
    return acc + Number(items[id].qty) * Number(items[id].price);
  }, 0);
};

const recalculateTax = (subTotal) => {
  return subTotal * (tax / 100);
};

const recalculateTotal = (state) => {
  return state.subTotal + state.tax;
};

export const counterSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action) => {
      const { item, qty } = action.payload;

      state.data[item.id] = action.payload.item;
      state.data[item.id].qty =
        qty || Number(state.data[item.id]?.qty ?? 0) + 1;
      state.length = recalculateQty(state.data);
      state.subTotal = recalculateSubTotal(state.data);
      state.tax = recalculateTax(state.subTotal);
      state.total = recalculateTotal(state);
    },
    removeItemFromCart: (state, action) => {
      const { payload } = action;

      if (state.data[payload.id].qty < 2 || payload.qty === 0)
        delete state.data[payload.id];
      else state.data[payload.id].qty -= 1;
      state.length = recalculateQty(state.data);
      state.subTotal = recalculateSubTotal(state.data);
      state.tax = recalculateTax(state.subTotal);
      state.total = recalculateTotal(state);
    },
    reset: (state) => {
      state = initialState;
    },
  },
});

export const { addItem, removeItemFromCart, reset } = counterSlice.actions;

export default counterSlice.reducer;
