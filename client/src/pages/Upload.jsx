import React, { useState } from "react";
import { read, utils, writeFile } from "xlsx";
import axios from "axios";
import { json } from "react-router-dom";
import { useDataLayerValue } from "../config/dataLayer";

const Upload = () => {
  const [userdata, Setuserdata] = useState(null);
  const [{ prodcuts }, dispatch] = useDataLayerValue();
  const readUploadFile = async (e) => {
    e.preventDefault();
    if (e.target.files) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const data = e.target.result;
        try {
          const workbook = read(data, { type: "array" });
          const sheetName = workbook.SheetNames[0];
          const worksheet = workbook.Sheets[sheetName];
          const userdata = utils.sheet_to_json(worksheet);
          console.log(userdata);
          Setuserdata(userdata);
        } catch (err) {
          console.log(err);
          alert("Error reading file. Please upload an XLSX file.");
        }
      };
      reader.readAsArrayBuffer(e.target.files[0]);
    }
  };
  const OnHandleSubmit = async (e) => {
    e.preventDefault();
    if (userdata) {
      try {
        console.log(Array.isArray(userdata));
        const response = await axios.post("/fileupload", userdata);
        const json = await response.json();
        if (json) {
          dispatch({
            type: "SET_PRODUCTS",
            prodcuts: json,
          });
        }
        console.log(json);
      } catch (error) {
        console.log(error);
      }
    } else {
      console.log("we dont have the data");
    }
  };
  return (
    <div>
      <form onSubmit={OnHandleSubmit}>
        <label htmlFor="upload">
          <input
            type="file"
            name="upload"
            id="upload"
            onChange={readUploadFile}
            className="hidden"
          />
          <button className="shadow-search px-[20px] py-[11px]  ">
            Upload your file
          </button>
        </label>
      </form>
    </div>
  );
};

export default Upload;
