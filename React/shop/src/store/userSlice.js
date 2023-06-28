import { createSlice } from "@reduxjs/toolkit";

let user = createSlice({
  name: "user",
  initialState: { name: "yueunfive", age: 22 },
  reducers: {
    changeName(state) {
      state.name = "오유은";
    },
    changeAge(state, action) {
      state.age += action.payload;
    },
  },
});

export let { changeName, changeAge } = user.actions;

export default user;
