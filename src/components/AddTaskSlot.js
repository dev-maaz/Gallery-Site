
import "./AddTaskSlot.scss";
import { useState } from "react";


// The bar used to add tasks into the task array/box.
function AddTaskSlot() {

    const [task, setTask] = useState("");

    return <>
    
    <div className="add-task-slot">

        <input name="task-input" placeholder={"Add New Task"} value={task} onChange={e => setTask(e.target.value)} /> 
        <span class="material-symbols-outlined"> add_circle </span>

    </div>

    </>
}

export default AddTaskSlot;