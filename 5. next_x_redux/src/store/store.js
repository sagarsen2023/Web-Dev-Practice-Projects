import { configureStore } from "@reduxjs/toolkit";
import counterSliceReducer from "./reducers/counterSlice";

export default configureStore ({
    reducer: {
        counter : counterSliceReducer
    }
})