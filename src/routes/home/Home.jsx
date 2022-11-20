import React from 'react';
import Header from "../../components/header/Header";
import HeroBanner from '../../components/hero-banner/HeroBanner';
import Main from '../../components/main/Main';

const Home = () => {
  return (
    <div>
        <Header/>
        <h1>HOME PAGE</h1>
        <HeroBanner/>
        <Main/>
    </div>
  )
}

export default Home