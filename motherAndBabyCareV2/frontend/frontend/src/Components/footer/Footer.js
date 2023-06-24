import React from "react";
import "./Footer.css";
const Footer = () => {
  var imgg;
  let shopImgAry = [];
  for (var i = 1; i < 2; i++) {
    imgg = require("../../Assets/shopImages/" + i + ".jpg");
    shopImgAry.push(imgg);
  }
  return (
    <>
      <div className="bg-dark text-white">
        <div className="row">
          <h3 className="text-center mt-2 ">Contact us </h3>
        </div>
        <div className="row  ">
          <div className="col my-5">
            <h5 className="text-end m-4"> Mobile: </h5>
            <h5 className="text-end m-3"> Address: </h5>
          </div>
          <div className="col my-5">
            <h5 className="text-start m-4"> +94 770242595 </h5>
            <h5 className="text-start m-3"> No.108/1 Palaly Road</h5>
            <h5 className="text-start m-3"> Thirunelvely Jaffna</h5>
          </div>
          <div className="col justify-content-center">
            <img
              className="MapContainer"
              src={imgg}
              width="500"
              height="300"
              style={{ border: 0 }}
              loading="lazy"
            ></img>{" "}
          </div>
          <div className="col justify-content-center">
            <iframe
              className="MapContainer"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1966.4679041726893!2d80.02517411931748!3d9.68652007185284!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3afe541479a68639%3A0x36a8664a4873390b!2sMother%20%26%20Baby%20care!5e0!3m2!1sen!2slk!4v1680452803983!5m2!1sen!2slk"
              width="500"
              height="300"
              style={{ border: 0 }}
              loading="lazy"
            ></iframe>{" "}
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
