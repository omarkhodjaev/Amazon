import React from 'react';
import HeroBanner from '../../components/hero-banner/HeroBanner';
import Main from '../../components/main/Main';
import Carousel from '../../components/carousel/Carousel';
import Footer from '../../components/footer/Footer';
import { Backtotop } from '../../utils';

const Home = () => {
  return (
    <div>
      <HeroBanner/>
      <Main/>
      <Carousel/>
      <Main/>
      <Backtotop/>
      <Footer/>
    </div>
  )
}

export default Home