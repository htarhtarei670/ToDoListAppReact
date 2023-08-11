import { useState,useEffect } from "react";
import ToDoForm from "./ToDoForm";
import ToDoList from "./ToDoList";
import { v4 as uuidv4 } from 'uuid';
import ToDoEdit from "./ToDoEdit";

const ToDo = () => {
    const [tasks,setTasks]=useState([]);

    //to store data in cookie
    useEffect(() => {
        const savedTodos = JSON.parse(localStorage.getItem('todos')) || [];
        setTasks(savedTodos);
    }, []);


    const taskInput=(todo)=>{
        const userTasks=[
            ...tasks,{id:uuidv4(), todos:todo,completed:false,isEditing:false}
        ]
        setTasks(userTasks);
        localStorage.setItem("todos",JSON.stringify(userTasks));
    }

    const completedTaskHandler=(id)=>{
       const completedTasks= tasks.map(task=> task.id ===id?{...task,completed:!task.completed}: task );
       setTasks(completedTasks);
       localStorage.setItem("todos",JSON.stringify(completedTasks));
    }

    const editTaskHandler=(id)=>{
        const editTasks=tasks.map(task=>task.id ===id?{...task,isEditing:!task.isEditing}:task);
        setTasks(editTasks);
    }

   const updateTaskHandler=(todo,id)=>{
        const updateTasks=tasks.map((task)=>task.id===id?{...task,todos:todo,isEditing:!task.isEditing}:task);
        setTasks(updateTasks);
        localStorage.setItem("todos",JSON.stringify(updateTasks))
   }

   const deleteTaskHandler=id=>{
        const deleteTasks=tasks.filter((task)=>task.id !== id);
        setTasks(deleteTasks);
        localStorage.setItem('todos',JSON.stringify(deleteTasks));
   }

    return (
        <div className="TodoWrapper">
            <ToDoForm task={taskInput}/>
            {tasks.map(task=> 
                    task.isEditing?
                    (<ToDoEdit 
                        updateTask={updateTaskHandler}
                        task={task}
                        key={task.id}
                    />):
                    (<ToDoList 
                        task={task} 
                        key={task.id} 
                        completedTask={completedTaskHandler} 
                        editTask={editTaskHandler}
                        deleteTask={deleteTaskHandler}
                    />)
                )
            }
        </div>
    );
}

export default ToDo;