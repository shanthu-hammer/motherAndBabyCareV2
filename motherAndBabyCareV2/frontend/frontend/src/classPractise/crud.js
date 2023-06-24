import React from "react";
import axios from "axios";
export const post = async (data) => {
  const res = await axios
    .post("http://localhost:5000/product", data)
    .then((res) => {
      console.log(res.data);
    })
    .catch((err) => {
      console.log(err);
    });
};

export const get = async () => {
  try {
    const response = await axios.get("http://localhost:5000/product");
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
