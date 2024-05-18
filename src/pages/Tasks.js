 //About.js
 import React from 'react'
 import Navbar from './../components/Navbar';
import TaskBar from '../components/TaskBar';
import "./pagestyling.scss"

 const Tasks = () => {
   return (

     <div style={{display: 'flex'}} >

         <Navbar />

        <div className='centralise'>

          
          <TaskBar />
          
        </div>

     </div>
   )
 }

 export default Tasks