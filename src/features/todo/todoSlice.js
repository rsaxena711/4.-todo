import { createSlice, nanoid } from "@reduxjs/toolkit";

//initial state
const initialState={
    todos:[],
}

//creating slice
export const todoSlice=createSlice({
    name:"todo",
    initialState,
    reducers:{
        addTodo: (state,action)=>{
            const todo={
                id:nanoid(),
                completed:false,
                text:action.payload,
            }
            state.todos.push(todo);
        },
        removeTodo: (state,action)=>{
            state.todos=state.todos.filter((todo)=>todo.id!==action.payload)
        }
    }
})

//exporting all methods in reducers
export const {addTodo, removeTodo}= todoSlice.actions;

//exporting reducer to wire store
export default todoSlice.reducer;
