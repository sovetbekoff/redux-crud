import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API = "http://localhost:8000/users";

export const getUSers = createAsyncThunk("users/getUsers", async () => {
  const res = await axios.get(API);
  return res.data;
});
export const createUser = createAsyncThunk(
  "users/createUser",
  async (newUserObj, { dispatch }) => {
    await axios.post(API, newUserObj);
    dispatch(getUSers());
  }
);
export const getOneUser = createAsyncThunk(
  "users/getOneUser",
  async (userId) => {
    const { data } = await axios.get(`${API}/${userId}`);
    return data;
  }
);

const usersSlice = createSlice({
  name: "users",
  initialState: {
    users: [],
    lodaing: false,
    error: null,
    oneUser: null,
  },
  reducers: {
    clearOneUserState: (state) => {
      state.oneUser = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getUSers.pending, (state, action) => {
        // console.log("pending");
        state.lodaing = true;
      })
      .addCase(getUSers.fulfilled, (state, action) => {
        // console.log("fullfield");
        state.lodaing = false;
        state.users = action.payload;
      })
      .addCase(getUSers.rejected, (state, action) => {
        state.lodaing = false;
      })
      .addCase(getOneUser.pending, (state, action) => {
        state.lodaing = true;
      })
      .addCase(getOneUser.fulfilled, (state, action) => {
        state.oneUser = action.payload;
        state.lodaing = false;
      });
  },
});

export default usersSlice.reducer;
export const { clearOneUserState } = usersSlice.actions;
