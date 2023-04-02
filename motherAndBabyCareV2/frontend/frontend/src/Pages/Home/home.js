//Feeding and Nutrition 
//Bath and Skin 
//Fashion Accessories
//Maternity and New born
// Diapering 
//Toys
//Gifts 
///motherAndBabyCareV2/frontend/frontend/src/Assets/default.jpg
import imgDefault from  '../../Assets/default.jpg'
import CustomNavbar from "../../Components/Navbar";
import HomeCarouselFade from "../../Components/Carousel";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../Home/home.css";
//import Map from "../../Components/Location";
import Footer from '../../Components/Footer';
const Home = () => {
  

  return (
    <>
      <CustomNavbar></CustomNavbar>
      <HomeCarouselFade></HomeCarouselFade>
      <div className="CustomSpacer"></div>

      <div className=" text-center text-dark ">
        <div className="row  ">
          <div className=" col">
            <h4>Clothing</h4>
            <img className="CustomImageBox" src={imgDefault}></img>
          </div>

          <div className="col ">
            <h4>Clothing</h4>
            <img className="CustomImageBox" src={imgDefault}></img>
          </div>
          <div className="col ">
            <h4>Clothing</h4>
            <img className="CustomImageBox" src={imgDefault}></img>
          </div>
        </div>
        <div className="row ">
          <div className=" col">
            <h4>Clothing</h4>
            <img className="CustomImageBox" src={imgDefault}></img>
          </div>
          <div className="col ">
            <h4>Clothing</h4>
            <img className="CustomImageBox" src={imgDefault}></img>
          </div>
          <div className="col ">
            <h4>Clothing</h4>
            <img className="CustomImageBox" src={imgDefault}></img>
          </div>
        </div>
      </div>
      <div className="CustomSpacer"></div>
      {/* Footer */}
      <Footer></Footer>
      {/* <Map location={location} zoomLevel={17}></Map> */}
    </>
  );
};

export default Home;