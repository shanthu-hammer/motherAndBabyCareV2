import React, { useState, useEffect } from "react";

const Useeffectprs = () => {
  const [count, setCount] = useState(0);
  const [user, setUser] = useState("Shanthu");
  //setCount(count + 1);
  //  setcount=()=>{
  //     count = ++count
  // }

  useEffect(() => {
    console.log("useeffect has been called ");
  }, [user]);


  // useEffect(() => {
  //     document.title = `${count} `;
  //   }, [count]);
  let onClickCserChange = () => {
    if (user == "admin") {
      setUser("shanthu");
    } else {
      setUser("admin");
    }

    //console.log("user swap has been changed");
  };

  let handleclickIn = () => {
    setCount(count + 1);
  };
  return (
    <>
      <button onClick={handleclickIn}>Click me to increase </button>
      <br />
      <div>{count}</div>

      <button onClick={onClickCserChange}> click to switch to admin</button>
      {/* <div>{user}</div> */}
      {user == "admin" ? <>ADMINN</> : <></>}
    </>
  );
};
export default Useeffectprs;
