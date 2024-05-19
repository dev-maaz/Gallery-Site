import React from 'react'
import Gallery from './../components/Gallery.js';
import Navbar from './../components/Navbar';
import { LoopingRhombusesSpinner } from 'react-epic-spinners'

const Home = () => {
  
  const align = { display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%', flexDirection: 'column' };
  const headinStyle = { padding: '3rem', fontWeight: '600'};

  return (

    <div style={{display: 'flex'}}>

        <Navbar />
        <div style={align}>
        <h2 class="text-3xl font-bold pb-12"> Welcome to React </h2>
        <LoopingRhombusesSpinner size="40" color='#DFEDF6'/>
        </div>

    </div>
  )
}

export default Home