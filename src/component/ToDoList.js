import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare} from "@fortawesome/free-solid-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

const ToDoList = ({task,completedTask,editTask,deleteTask}) => {
    return (
        <div className="Todo">
            <p className={task.completed===true ?"completed":""} onClick={()=>completedTask(task.id)}>{task.todos}</p>
            <div>
                <FontAwesomeIcon icon={faPenToSquare} onClick={()=>editTask(task.id)}/>
                <FontAwesomeIcon icon={faTrash} className='fa-trash' onClick={()=>deleteTask(task.id)}/>
            </div>
        </div>
    );
}

export default ToDoList;