import confirmProc from "../assets/confirmProc.svg";
import Upload from "../pages/Upload";
import React, { useState } from "react";
import { read, utils, writeFile } from "xlsx";
import axios from "axios";
import { json } from "react-router-dom";
import { useDataLayerValue } from "../config/dataLayer";

export const AddProduct = ({ handleClose }) => {
  const [products, setProductsData] = useState([]);
  const [client, setClient] = useState("");
  const [productN, setProductN] = useState("");
  const [productP, setProductP] = useState("");
  const [clientA, setClientA] = useState("");
  const [Date, setDate] = useState("");
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
        if (response) {
          dispatch({
            type: "SET_PRODUCTS",
            prodcuts: response,
          });
        }
        console.log(response);
        handleClose(false);
      } catch (error) {
        console.log(error);
      }
    } else {
      console.log("we dont have the data");
    }
  };

  return (
    <section
      className="fixed top-0 left-0 h-screen w-screen bg-gray-500 bg-opacity-50 z-50
  flex items-center justify-center"
    >
      <div className="w-[70%] flex flex-col items-center justify-center py-5 shadow-search ">
        <div className="w-full flex flex-col gap-y-4 items-center p-5 rounded-[20px] bg-white">
          <h2 className="text-[30px]">Add new Client</h2>
          <form
            action=""
            className="w-full flex flex-col items-center gap-y-4"
            onSubmit={OnHandleSubmit}
          >
            <input
              type="text"
              name=""
              id=""
              placeholder="Client name"
              className="w-full outline-none border border-solid boprder-[#C9C3C3]
                placeholder:text-[#C9C3C3] px-[22px] py-[19px] rounded-xl "
              onChange={(e) => setClient(e.target.value)}
            />
            <div className="flex w-full gap-x-3">
              <input
                type="text"
                className="w-full outline-none border border-solid boprder-[#C9C3C3]
                placeholder:text-[#C9C3C3] px-[22px] py-[19px] rounded-xl "
                placeholder="Product name"
                onChange={(e) => setProductN(e.target.value)}
              />
              <input
                type="text"
                className="w-full outline-none border border-solid boprder-[#C9C3C3]
                placeholder:text-[#C9C3C3] px-[22px] py-[19px] rounded-xl "
                placeholder="Product price"
                onChange={(e) => setProductP(e.target.value)}
              />
            </div>
            <div className="flex w-full gap-x-3">
              <input
                type="text"
                className="w-full outline-none border border-solid boprder-[#C9C3C3]
                placeholder:text-[#C9C3C3] px-[22px] py-[19px] rounded-xl "
                placeholder="Client age"
                onChange={(e) => setClientA(e.target.value)}
              />
              <input
                type="date"
                className="w-full outline-none border border-solid boprder-[#C9C3C3]
                placeholder:text-[#C9C3C3] px-[22px] py-[19px] rounded-xl "
                placeholder="Date"
                onChange={(e) => setDate(e.target.value)}
              />
            </div>
            <div className="flex w-full gap-x-6 ">
              <button onClick={() => handleClose(false)}>Cancel</button>
              <button
                type="submit"
                className="text-white bg-[#703EDC] capitalize rounded-[64px] border border-solid
              border-[#C9C3C3] px-[25px] py-[10px] text-[20px] flex items-center gap-x-2 "
              >
                Confirm
                <img src={confirmProc} alt="" />
              </button>
              <label htmlFor="upload">
                <input
                  type="file"
                  name="upload"
                  id="upload"
                  onChange={readUploadFile}
                  className="text-sm text-grey-500
                 file:mr-5 file:py-3 file:px-10
                 file:rounded-full file:border-0
                 file:text-md file:font-semibold  file:text-white
                 file:bg-[#703EDC] file:opacity-90
                 hover:file:cursor-pointer hover:file:opacity-80"
                />
              </label>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};
