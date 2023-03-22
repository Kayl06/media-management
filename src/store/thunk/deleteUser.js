import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const deleteUser = createAsyncThunk("users/delete", async (userId) => {
  const response = await axios.delete(`http://localhost:3005/users/${userId}`);
});

export { deleteUser };
