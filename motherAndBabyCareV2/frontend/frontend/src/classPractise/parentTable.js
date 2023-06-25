import React, { useEffect, useState } from "react";
import table from "./table";
import CustomTable from "./table";
import axios from "axios";
import PassingEventObj from "./passingEventObj";
import { get, post, put } from "./crud";
const ParentTable = () => {
  //to start the jason server
  //npx json-server --watch src/database/store.json --port 5000

 
  // const callBackSetData = async (data) => {
  //   setInsertData(data);
  //   console.log(data)
  //   //updateData(data)    
  // };
  const CallBackForSubmitButton = async (inputVal) => {
    // await setInsertData(inputVal);
    console.log(inputVal);
    updateData(inputVal) 
    //consition for when to use 
    //updateData(inputVal) 
    //or 
    // Pushdata
  };
  let initialTableData = [
    {
      name: "default",
      price: 0,
      color: "default",
      id: 0,
    },
  ];
  const [tableData, setTableData] = useState(initialTableData);
  const [insertData, setInsertData] = useState({});
  const [edata, SetEdata] = useState({});
  useEffect(() => {
    const FetchData = async () => {
      try {
        const response = await get();
        setTableData(response);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    FetchData();
  }, []);

  const updateData = async (data) => {
    try {
      const response = await put(data.id, data);

      console.log("Data updated:", response.data);
      // Handle the response or update the state accordingly
    } catch (error) {
      console.error("Error updating data:", error);
      // Handle the error appropriately
    }
  };

  const handleTesting = () => {
    let data = { name: "mango00", price: 100, color: "pink", id: 4 };
    //data=data.slice()
    updateData(data);
  };
  const Pushdata = () => {
    post(insertData);
  };

  return (
    <>
      <PassingEventObj
        // callBackSetData={callBackSetData}
        edata={edata}
        tableData={tableData}
        CallBackForSubmitButton={CallBackForSubmitButton}
      />
      <button
        onClick={() => {
          handleTesting();
        }}
        className="btn btn-warning  m-3"
      >
        TESTING
      </button>
      <br />

      <button
        onClick={() => {
          Pushdata();
        }}
        class="m-3 btn btn-primary"
      >
        push data
      </button>
    </>
  );
};

export default ParentTable;
