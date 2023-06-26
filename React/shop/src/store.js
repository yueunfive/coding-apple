import { configureStore, createSlice } from "@reduxjs/toolkit";
import user from "./store/userSlice";
import data from "./data";

let cart = createSlice({
  name: "cart",
  initialState: [
    { id: 0, name: "White and Black", count: 2 },
    { id: 2, name: "Grey Yordan", count: 1 },
  ],
  reducers: {
    addCount(state, action) {
      const findId = state.find((item) => item.id === action.payload);
      // find() : 배열의 특정 값을 찾는 메소드
      findId.count++;
    },
    addItem(state, action) {
      state.push(action.payload);
    },
  },
});

export let { addCount, addItem } = cart.actions;

export default configureStore({
  reducer: {
    user: user.reducer,
    cart: cart.reducer,
  },
});
