import Carousel from "react-bootstrap/Carousel";
import React from "react";

function HomeCarouselFade() {
  var imgg;
  let CarouselImgAry = [];
  for (var i = 1; i < 4; i++) {
    imgg = require("../Assets/homePageSlide/" + i + ".jpg");
    CarouselImgAry.push(imgg);
    //console.log(imgs);
  }

  return (
    <Carousel fade>
      {CarouselImgAry.map((imgg) => (
        <Carousel.Item>
          {/* {console.log(imgs)} */}
          <div >
          <img className="block w-100 h-20" src={imgg} alt="First slide" />
          </div>
          <Carousel.Caption>
            {/* <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
          </Carousel.Caption>
        </Carousel.Item>
       
      ))}
    </Carousel>
  );
}

export default HomeCarouselFade;
