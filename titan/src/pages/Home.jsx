import React from 'react'
import Header from '../components/header/Header'

import MainSliders  from '../components/mainslider/MainSliders';
import Services from '../components/services/Services';


function Home() {
  return (
    <div>
        <Header/>
        <MainSliders/>
        <Services/>
    </div>
  )
}

export default Home