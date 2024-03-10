import React from 'react'
import Header from '../components/header/Header'

import MainSliders  from '../components/mainslider/MainSliders';
import Services from '../components/services/Services';
import Customer from '../components/Customer/Customer';
function Home() {
  return (
    <div>
        <Header/>
        <MainSliders/>
        <Services/>
        <Customer/>
    </div>
  )
}

export default Home