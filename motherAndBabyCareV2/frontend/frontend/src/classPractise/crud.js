import React from "react";
import axios from "axios";

// Function for making a POST request
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

// Function for making a GET request
export const get = async () => {
  try {
    const response = await axios.get("http://localhost:5000/product");
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

// Function for making a PUT request(update)
export const put = async ( id,body) => {
    try {
      const response = await axios.put("http://localhost:5000/product/"+id, body);
      return response.data;
    } catch (error) {
      throw error;
    }
  };

  // Function for making a DELETE request
export const remove = async (endpoint) => {
    try {
      const response = await axios.delete(``);
      return response.data;
    } catch (error) {
      throw error;
    }
  };


