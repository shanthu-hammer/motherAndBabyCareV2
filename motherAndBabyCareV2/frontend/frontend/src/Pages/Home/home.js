/* Purpose of this Code
- Home/Landing page
- 
*/

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

import Footer from '../../Components/footer/Footer';
const Home = () => {
  let navHeds={
    Feeding: true,
    BathingChanging: false,
    Clothing: false,
    ToysGifts: false,


  }

  return (
    <>
      <CustomNavbar name={navHeds}></CustomNavbar>
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
      
    </>
  );
};

export default Home;