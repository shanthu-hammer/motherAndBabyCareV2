import React, { useState } from "react";
import CustomTable from "./table";
import "bootstrap/dist/css/bootstrap.min.css";
const PassingEventObj = (probs) => {
 
  var initial = {
    name: "",
    id: "",
    color: "",
    price: "",
  };

  const callBckForEditData = (Edata) => {
    //Edata
    console.log(Edata);
    setFormData(Edata)
    //probs.callBackSetData(Edata)//passing to parent 
   // probs.onValueChange(formData);
    //SetEdata(Edata);
  };

 
 

  var validationInital = false;

  const [formData, setFormData] = useState(initial);
  const [validationData, setValidationData] = useState(validationInital);
  const handleChange = (e) => {
    validateForm();
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const validateForm = () => {
    if (formData.name == "") {
      setValidationData(false);
      // console.log(validationData);
      //console.log("Validation if here");
    } else {
      // console.log("Validation else here");
      setValidationData(true);
    }
    // setValidationData(false);
    // console.log(validationData);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    //console.log(formData);
   // probs.callBackSetData(formData);
    probs.CallBackForSubmitButton(formData)
    if (validationData == false) {
    } else {
      // console.log(formData.name);
      // console.log(formData.id);
    }
    //validateForm ()
  };

  return (
    <>
      <h1>Form</h1>
      <form className="abc">
        <div>
          <label>Name</label>
        </div>
        <input
          type="text"
          value={formData.name}
          name="name"
          onChange={(e) => handleChange(e)}
        ></input>
        {validationData ? (
          <div className="text-primary">Success</div>
        ) : (
          <div className="text-success">Validation Failed</div>
        )}

        <div>
          <label>ID </label>
        </div>
        <input
          type="number"
          value={formData.id}
          name="id"
          onChange={(e) => handleChange(e)}
        ></input>
        <div>
          <label>Color </label>
        </div>
        <input
          type="text"
          value={formData.color}
          name="color"
          onChange={(e) => handleChange(e)}
        ></input>
        <div>
          <label>Price </label>
        </div>
        <input
          type="number"
          value={formData.price}
          name="price"
          onChange={(e) => handleChange(e)}
        ></input>
        <div>
          <button
            className="btn btn-primary  m-3"
            onClick={(e) => {
              handleSubmit(e);
            }}
          >
            Submit{" "}
          </button>
        </div>
      </form>
     
      <br />
      <CustomTable tableData={probs.tableData} editData={callBckForEditData} />
    </>
  );
};

export default PassingEventObj;
