import React from 'react'
import Header from '../../components/Header'
import Events from '../../components/Events'
import About from '../../components/About'
import Contactus from '../../components/Contactus'
import Rating from "../../components/Rating";
import Footer from '../../components/Footer'

function Home() {
  return (
    <div className="scroll-smooth bg-tertiary">
        <Header/>
        <Events/>
        <About/>
        <Rating />
        <Contactus/>
        <Footer/>
    </div>
  )
}

export default Home