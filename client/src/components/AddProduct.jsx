import confirmProc from "../assets/confirmProc.svg";
import axios from "axios";
import uploadIcon from "../assets/icons/upload.svg";
export const AddProduct = ({ handleClose }) => {
  return (
    <section
      className="fixed top-0 left-0 h-screen w-screen bg-gray-500 bg-opacity-50 z-50
  flex items-center justify-center"
    >
      <div className="w-[70%] flex flex-col items-center justify-center py-5 shadow-search ">
        <div className="w-full flex flex-col gap-y-4 items-center p-5 rounded-[20px] bg-white">
          <h2 className="text-[30px]">Add new Client</h2>
          <form action="" className="w-full flex flex-col items-center gap-y-4">
            <input
              type="text"
              name=""
              id=""
              placeholder="Client name"
              className="w-full outline-none border border-solid boprder-[#C9C3C3]
                placeholder:text-[#C9C3C3] px-[22px] py-[19px] rounded-xl "
            />
            <div className="flex w-full gap-x-3">
              <input
                type="text"
                className="w-full outline-none border border-solid boprder-[#C9C3C3]
                placeholder:text-[#C9C3C3] px-[22px] py-[19px] rounded-xl "
                placeholder="Product name"
              />
              <input
                type="text"
                className="w-full outline-none border border-solid boprder-[#C9C3C3]
                placeholder:text-[#C9C3C3] px-[22px] py-[19px] rounded-xl "
                placeholder="Product price"
              />
            </div>
            <div className="flex w-full gap-x-3">
              <input
                type="text"
                className="w-full outline-none border border-solid boprder-[#C9C3C3]
                placeholder:text-[#C9C3C3] px-[22px] py-[19px] rounded-xl "
                placeholder="Client age"
              />
              <input
                type="date"
                className="w-full outline-none border border-solid boprder-[#C9C3C3]
                placeholder:text-[#C9C3C3] px-[22px] py-[19px] rounded-xl "
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
              <label
                for="dropzone-file"
                class="flex flex-col items-center justify-center shadow-search bg-[#F3F3F3] rounded-[60px] cursor-pointer text-[#703EDC]
                px-[15px] py-[10px]  "
              >
                <div class="flex gap-x-3 items-center justify-center py-3 ">
                  <img src={uploadIcon} alt="" />
                  <p>Upload Excel File</p>
                </div>
                <input id="dropzone-file" type="file" class="hidden" />
              </label>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};
