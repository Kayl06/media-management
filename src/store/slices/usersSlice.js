import { createSlice } from "@reduxjs/toolkit";
import { fetchUsers } from "../thunk/fetchUsers";
import { addUser } from "../thunk/addUser";
import { deleteUser } from "../thunk/deleteUser";

const usersSlice = createSlice({
  name: "users",
  initialState: {
    data: [],
    isLoading: false,
    isCreating: false,
    error: null,
  },
  extraReducers(builder) {
    // just start
    builder.addCase(fetchUsers.pending, (state, action) => {
      state.isLoading = true;
    });

    // success callback
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      state.isLoading = false;

      state.data = action.payload;
    });

    // error callback
    builder.addCase(fetchUsers.rejected, (state, action) => {
      state.isLoading = false;

      state.error = action.error; // automtically get the error message
    });

    builder.addCase(addUser.pending, (state, action) => {
      state.isCreating = true;
    });

    builder.addCase(addUser.fulfilled, (state, action) => {
      state.isCreating = false;

      state.data.push(action.payload);
    });

    builder.addCase(addUser.rejected, (state, action) => {
      state.isCreating = false;

      state.error = action.error;
    });

    builder.addCase(deleteUser.pending, (state, action) => {
      state.isLoading = true;
    });

    builder.addCase(deleteUser.fulfilled, (state, action) => {
      state.isLoading = false;

      state.data = state.data.filter((user) => {
        return user.id !== action.payload.id;
      });
    });

    builder.addCase(deleteUser.rejected, (state, action) => {
      state.isLoading = false;

      state.error = action.error;
    });
  },
});

export const usersReducer = usersSlice.reducer;