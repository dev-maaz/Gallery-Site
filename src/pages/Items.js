
import React from 'react'
import Gallery from './../components/Gallery.js';
import Navbar from './../components/Navbar';

const Items = () => {
  return (
    
    <div style={{display: 'flex',  flexDirection: 'row'}}>

        <Navbar />
        <Gallery />

    </div>
  )
}

export default Items