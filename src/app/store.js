import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../features/todo/todoSlice"
//creating and exporting storeby configstore

export const store=configureStore({
    //reducer is an boject
    reducer:{todoReducer},
})