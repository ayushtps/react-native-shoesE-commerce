import { configureStore } from "@reduxjs/toolkit";
import CategorySlice from "../slice/CategorySlice";
import CartSlice from "../slice/CartSlice";
import WishListSlice from "../slice/WishListSlice";
import PaymentSlice from "../slice/PaymentSlice";

const store = configureStore({
  reducer: {
    category:CategorySlice,
    addCart:CartSlice,
    WishList:WishListSlice,
    payment:PaymentSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
