
import "./TaskBox.scss";
import "./TaskSlot.js";
import { useState } from "react";
import TaskSlot from "./TaskSlot.js";
import AddTaskSlot from "./AddTaskSlot.js";

function TaskBox() {

    const [task, setTask] = useState("Task");
    const currentTasks = ["Figure out Dynamic Routing", "Figure out Mapping", "Show Rayyan my Progress"];
    const taskList = currentTasks.map((currenttasks) => 
        <TaskSlot description={currenttasks} />
    )

    return <>
    
    <div class="taskbox">

        <AddTaskSlot />
        {taskList}
        {/* <TaskSlot description={taskList} /> */}

    </div>

    </>
}

export default TaskBox;