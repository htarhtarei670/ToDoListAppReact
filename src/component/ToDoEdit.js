import { useState } from "react";

const ToDoEdit = ({updateTask,task}) => { 
    const [update,setUpdate]=useState(task.todos);

    const submitHandler=(e)=>{
        e.preventDefault();
        if(update){
           updateTask(update,task.id)
        }
        setUpdate("");
    }
    
    return (
        <div className="TodoForm">
            <form action="" onSubmit={submitHandler}>
                <input type="text" 
                        placeholder="Update tasks?" 
                        className="todo-input" 
                        onChange={(e)=>setUpdate(e.target.value)}
                        value={update}
                />
                <button className="todo-btn ">Update</button>
            </form>
        </div>
    );
}
 
export default ToDoEdit;