import {useDispatch} from "react-redux";
import {useState} from "react";
//actions
import {addTodo} from "../features/todo/todoSlice";

export default function AddTodo(){

    const [input,setInput]= useState("");
    const dispatch=useDispatch();

    const addtodoHandler=(e)=>{
        e.preventDefault();
        //dispach
        dispatch(addTodo(input));
        setInput("")
    }

    return(
        <>
            <form onSubmit={addtodoHandler}>
                <input type="text" className="border-2 p-2 m-2 w-80"
                    placeholder="Enter todo" 
                    onChange={(e)=>{setInput(e.target.value)}}
                    value={input}>
                </input>
                <button className="m-2" type="submit">SUBMIT
                </button>
            </form>
        </>
    )
}