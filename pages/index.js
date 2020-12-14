import React from 'react';
import Head from 'next/head';

import Header from '../components/Header/Header';
import Slider from '../components/Slider/Slider';
import Videos from '../components/Videos/Videos';
// import Gallery from "./galeria";
import Info from '../components/Info/Info';
import Footer from '../components/Footer/Footer';

const MainPage = () => (
  <>
    <Head>
      <title>Treblers</title>
    </Head>
    <Header />
    <Slider />
    <Info />
    {/*<Gallery />*/}
    <Videos />
    <Footer />
  </>
);

export default MainPage;
