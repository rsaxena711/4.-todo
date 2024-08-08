import { useSelector,useDispatch } from "react-redux";
import { removeTodo } from "../features/todo/todoSlice";
import React from "react";

export default function Todos(){
    const todos=useSelector(state=>state.todoReducer.todos)
    console.log(todos)
    const dispatch=useDispatch();

    const del=(id)=>{
        console.log(id)
        dispatch(removeTodo(id));
    }
    return(
        <>
        <div><b>List of todos</b></div>
        {todos.map((todo)=>(<div className="m-4" id={todo.id} key={todo.id}>{todo.text}<span className=" bg-red-500 p-1 rounded-xl" onClick={()=>del(todo.id)}>delet</span></div>))}
        </>
    )
}
