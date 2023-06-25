import { createSlice } from "@reduxjs/toolkit";

let user = createSlice({
  name: "user",
  initialState: { name: "oh", age: 24 },
  reducers: {
    changeName(state) {
      state.name = "park";
    },
    changeAge(state, action) {
      state.age += action.payload;
    },
  },
});

export let { changeName, changeAge } = user.actions;

export default user;
