import { configureStore} from "@reduxjs/toolkit";
import userReducer from "../redux/slices/UserSlice";
export const Store =  configureStore({
    reducer: {
        user: userReducer,
    }
})

export type RootState = ReturnType<typeof Store.getState>;
export type AppDispatch = typeof Store.dispatch;