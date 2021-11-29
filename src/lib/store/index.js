import { configureStore } from "@reduxjs/toolkit";

import cart from "./slices/cart";

export default configureStore({
  reducer: {
    cart,
  },
});
