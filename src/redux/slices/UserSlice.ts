import { createSlice } from "@reduxjs/toolkit";
import { type userType } from "../../types/userType";
interface UserState {
    user: userType[];
}

const initialState: UserState = {
    user: [],
}

const UserSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        SetUser: (state, action) => {
            state.user = action.payload
        },
        AddUser: (state, action) => {
            state.user.unshift(action.payload)
        }
    }
})

export const { AddUser, SetUser } = UserSlice.actions;
export default UserSlice.reducer;