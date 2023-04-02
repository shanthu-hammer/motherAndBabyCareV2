//Feeding and Nutrition 
//Bath and Skin 
//Fashion Accessories
//Maternity and New born
// Diapering 
//Toys
//Gifts 
import CustomNavbar from "../../Components/Navbar";
import HomeCarouselFade from "../../Components/Carousel";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../Home/home.css";

const Home = () => {
  return (
    <>
      <CustomNavbar></CustomNavbar>
      <HomeCarouselFade></HomeCarouselFade>
      <div className="CustomSpacer"></div>
      <div className="mx-2">
        <div className="row">
          <div className=" bg-warning">Column 1</div>
        </div>
        <div className="row">
          <div className="col-sm-50% bg-warning">prd 1</div>
          <div className="col-sm-6">prd 2</div>
          <div className="col-sm-6">prd 3</div>
        </div>
      </div>
    </>
  );
};

export default Home;