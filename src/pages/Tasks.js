 //About.js
 import React from 'react'
 import Navbar from './../components/Navbar';
import TaskBar from '../components/TaskBar';

 const Tasks = () => {
   return (

     <div style={{display: 'flex'}} >

         <Navbar />

        <div class='centralise'>

          <h1> Tasks </h1>
          <TaskBar />
          
        </div>

     </div>
   )
 }

 export default Tasks