import { createSlice } from "@reduxjs/toolkit";

//nano id gen unique id
const initialState = {
    loading: false,
    userInfo: {}, // for user object
    userToken: null,
    role:null, // for storing the JWT
    error: null,
    isAuthenticated: false,
    };
//how to create slice
export const authSlice = createSlice({
  //name is default property of rtk ,auth is shown in my rtk devtools
  //we can add initial state directly here as well
  //reducers are pair of properties and funcion
  //each reducer method has two params state,action
  //state access the initial state
  //actions give us dispatches values from code that use the reducer method action.payload
  //make the structure in which you want to store value optional
  //you can also directly reffer like this  state.user=action.payload
  //state.user(any initialState property name) and store structure data in initialState
  name: "auth",
  initialState,
  reducers: {
    setUserInfo: (state, action) => {
        console.log("🚀 ~  action.payload:",  action.payload)
      state.loading = action?.payload?.user?true:false;
      state.isAuthenticated = action.payload?.user?true:false;
      state.userInfo = action.payload.user;
      state.userToken = action.payload.token;
    //   state.role = action.payload.data.role;
    },
    removeUserInfo: (state) => {
        state.userInfo = {};
        state.userToken = null;
        state.loading = null;
        state.role = null;
        state.isAuthenticated = null;
      },
  },
});
export const { setUserInfo,removeUserInfo } = authSlice.actions;
export default authSlice.reducer;