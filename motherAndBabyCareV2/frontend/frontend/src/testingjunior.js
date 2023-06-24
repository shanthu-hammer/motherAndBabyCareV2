import React, { Component } from "react";

 const TestingJunior=(props)=> {
  console.log(props);
  return (
    <>
      <h1>here is the params {props.aaa}</h1>
      <h1>here is the params {props.bbb}</h1>
    </>
  );
}


export default TestingJunior