import React from 'react'
import Header from '../components/Header';
import Slider from '../components/Slider';
import About from '../components/About';
import Challenges from '../components/Challenges';

const Home: React.FC = ()=> {
  return (
    <>
    <Header />
    <Slider />
    <About />
    <Challenges />
    </>
  )
}

export default Home;