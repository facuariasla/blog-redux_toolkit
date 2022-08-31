import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: '0',
    name: "Lionel Messi",
  },
  {
    id: '1',
    name: "Cristiano Ronaldo",
  },
  {
    id: '2',
    name: "Roberto Carlos",
  },
];

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
});

export const selectAllUsers = (state) => state.users;
export default usersSlice.reducer;
