import React, { useEffect, useState } from "react";
import table from "./table";
import CustomTable from "./table";
import axios from "axios";
import PassingEventObj from "./passingEventObj";
import { get, post, put } from "./crud";
const ParentTable = () => {
  //to start the jason server
  //npx json-server --watch src/database/store.json --port 5000

  const callBckForEditData = (Edata) => {
    //Edata
    console.log(Edata);
    SetEdata(Edata);
  };

  const callBackForValue = (inputVal) => {
    setInsertData(inputVal);
    console.log(inputVal);
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
      const response = await put(4, data);

      console.log("Data updated:", response.data);
      // Handle the response or update the state accordingly
    } catch (error) {
      console.error("Error updating data:", error);
      // Handle the error appropriately
    }
  };

  const handleTesting = () => {
    let data = { name: "Food", price: 100, color: "pink", id: 4 };
    updateData(data);
  };
  const handleClick = () => {
    post(insertData);
  };

  return (
    <>
      <PassingEventObj
        onValueChange={callBackForValue}
        edata={edata}
        tableData={tableData}
        editData={callBckForEditData}
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

      <button onClick={handleClick} class="m-3 btn btn-primary">
        push data
      </button>
    </>
  );
};

export default ParentTable;
