import React from "react";
import Header from "../../Components/Header/Header.jsx";
import Footer from "../../Components/Footer/Footer.jsx";
import Banner from "../../Components/Banner/Banner.jsx";
import MRows from "../../Components/Rows/MRows/MRows.jsx";
function Home() {
  return (
    <>
      <Header />
      <Banner />
      <MRows />
      <Footer />
    </>
  );
}

export default Home;
