import { createSlice } from "@reduxjs/toolkit";
import instance from "../../utils/axios";
import { dispatch } from "..";
import { userStateProps } from "../../types";

const initialState: userStateProps = {
    error: null,
    user: {
        id: 0,
        username: '', 
        email: '',
    },
    isLoggedIn: false
}

const userInfo = createSlice({
    name: "me",
    initialState,
    reducers: {
        getUserInfo(state, action) {
            state.user = action.payload;
            state.isLoggedIn = true;
        },
        hasError(state, action) {
            state.error = action.payload
        }
    }
})

export default userInfo.reducer;

// Export the async thunk separately
export const getUserData = () => {
    return async () => {
        try {
            const response = await instance.get("/users/me");
            dispatch(userInfo.actions.getUserInfo(response.data.data.user));
        } catch (error) {
            dispatch(userInfo.actions.hasError(error instanceof Error ? error.message : "An error occurred"));
        }
    };
};