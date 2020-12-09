import React from 'react';
import Header from '../components/Header/Header';
import Slider from "../components/Slider/Slider";
// import Gallery from "./galeria";
import Videos from "../components/Videos/Videos";
// import Info from "./info";
import Footer from '../components/Footer/Footer';

const MainPage = () => (
  <>
    <Header />
     <Slider />
    {/*<Info />
    <Gallery />*/}
    <Videos />
    <Footer />
  </>
);

export default MainPage;
