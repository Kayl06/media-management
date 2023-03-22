import { configureStore } from "@reduxjs/toolkit";
import { usersReducer } from "./slices/usersSlice";

export const store = configureStore({
  reducer: {
    users: usersReducer,
  },
});

export * from "./thunk/fetchUsers"; // get everything exported from fetchUsers
export * from "./thunk/addUser"; // create a new user
export * from "./thunk/deleteUser"; // delete
