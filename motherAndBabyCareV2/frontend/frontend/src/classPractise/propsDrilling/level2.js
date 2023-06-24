import React, { Component } from "react";
const Level2i = (probs) => {
  //console.log(probs.drbtn);
  return (
    <>
      <div className="container m-5  ">
        <div className="row">
          <div className="col-sm">
            <button title="Increase" onClick={probs.inbtn}>
              Increase
            </button>
          </div>
          <div className="col-sm">
            {/* <div>{this.state.name}</div> */}
            <div>{probs.prd1}</div>
          </div>
          <div className="col-sm">
            <button onClick={probs.drbtn}>
              Decrease 
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Level2i;
