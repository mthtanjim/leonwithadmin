import React from "react";
import Slider9 from "../Segments/Slider9";
import Footer from "./../Parts/Footer";
import Header from "./../Parts/Header4";
import About1 from "./../Segments/About1";
import FeaturedProducts from "./../Segments/FeaturedProducts";
import OurConcern from "./../Segments/OurConcern";
import Services9 from "./../Segments/Services9";
import Statistics1 from "./../Segments/Statistics1";

class Home1 extends React.Component {
  render() {
    return (
      <>
        <Header />
        <div className="page-content">
          <Slider9 />
          <About1 />
          <FeaturedProducts />
          <Services9 />
          <Statistics1 bgclass="bg-white" />
          <OurConcern />
        </div>
        <Footer />
      </>
    );
  }
}

export default Home1;
