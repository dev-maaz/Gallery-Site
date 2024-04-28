 //About.js
 import React from 'react'
 import Navbar from './../components/Navbar';
 import ContactBox from '../components/ContactBox';

 const Contact = () => {
   return (
    
    <div style={{display: 'flex',  flexDirection: 'row'}}>

        <Navbar />
        <ContactBox />

    </div>
   )
 }

 export default Contact