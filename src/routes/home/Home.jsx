import React from 'react';
import HeroBanner from '../../components/hero-banner/HeroBanner';
import Main from '../../components/main/Main';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <HeroBanner/>
      <Main/>
    </div>
  )
}

export default Home