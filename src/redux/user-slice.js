import { createSlice } from "@reduxjs/toolkit";

const usersSlice = createSlice({
  name: "users",
  initialState: {
    users: [],  
  },
  reducers: {
    addUser: (state, action) => {
      state.users.push(action.payload);  
    },
    deleteStudent: (state, action) => {
      state.users.splice(action.payload, 1);  
    }
  },
});

export const { addUser, deleteStudent } = usersSlice.actions;
export default usersSlice.reducer;
