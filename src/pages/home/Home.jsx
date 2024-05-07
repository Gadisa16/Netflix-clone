import React from 'react';
import Header from '../../components/header/Header.jsx';"../../components/header/Header.jsx";
import Footer from "../../components/footer/Footer.jsx";
import Banner from '../../components/banner/Banner.jsx';
import RowList from '../../components/rows/rowList/RowList.jsx';


function Home() {
  return (
    <>
      <Header />
      <Banner />
      <RowList />
      <Footer />
    </>
  )
}

export default Home