import { createSlice } from "@reduxjs/toolkit";
import { fetchUsers } from "../thunk/fetchUsers"

const usersSlice = createSlice({
    name: 'users',
    initialState: {
        data: [],
        isLoading: false,
        error: null
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
    }
});

export const usersReducer = usersSlice.reducer;