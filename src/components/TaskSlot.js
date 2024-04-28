
import "./TaskSlot.scss";
import { useState } from "react";

function TaskSlot(props) {

    return <>
    
    <div className="task-slot">

        <p> {props.description}</p>
        <span class="material-symbols-outlined"> delete </span>

    </div>

    </>
}

export default TaskSlot;