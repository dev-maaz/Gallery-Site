 //About.js
 import React from 'react'
 import Navbar from './../components/Navbar';
import TaskBox from '../components/TaskBox';

 const Tasks = () => {
   return (

     <div style={{display: 'flex'}} >

         <Navbar />

        <div class='centralise'>

          <h1> Tasks </h1>
          <TaskBox />
          
        </div>

     </div>
   )
 }

 export default Tasks