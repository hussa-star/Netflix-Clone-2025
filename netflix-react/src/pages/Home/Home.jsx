import React from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import Banner from "../../components/Banner/Banner.jsx";
import Rowlist from "../../components/Rows/Rowlist/Rowlist.jsx";

const Home = () => {
  return (
    <>
      <Header />
      <Banner />
      <Rowlist/>
      <Footer />
    </>
  );
};

export default Home;
