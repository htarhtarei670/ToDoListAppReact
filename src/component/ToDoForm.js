import { useState } from "react";

const ToDoForm = ({task}) => {
    const [inputValue,setInputValue]=useState('');
    const submitHandler=(e)=>{
        e.preventDefault();
        if(inputValue){
            task(inputValue)
        }
        setInputValue("");
    }
    
    return (
        <div className="TodoForm">
            <form action="" onSubmit={submitHandler}>
                <input type="text" 
                        placeholder="What is your task today?" 
                        className="todo-input" 
                        onChange={(e)=>setInputValue(e.target.value)}
                        value={inputValue}
                />
                <button className="todo-btn ">Add Task</button>
            </form>
        </div>
    );
}

export default ToDoForm;