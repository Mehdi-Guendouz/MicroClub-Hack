import { Search } from "../components/Search";
import { Sidebar } from "../components/Sidebar";
import { UserProfileDropDown } from "../components/userDropDown";
import addBtn from "../assets/addBtn.svg";
import { AddProduct } from "../components/addProduct";
import { useEffect, useState } from "react";
import axios from "axios";
import { useDataLayerValue } from "../config/dataLayer";

export const ViewData = () => {
  const [{ products }, dispatch] = useDataLayerValue();
  const [response, setResponse] = useState([]);
  const getDataProducts = async () => {
    const { data } = await axios.get("/getData");
    const response = await axios.get("/getData");
    if (data) {
      dispatch({
        type: "SET_PRODUCTS",
        products: data,
      });
      setResponse([...response.data, ...products]);
      handleToggle(false);
    }
  };
  const [Toggle, setToggle] = useState(false);
  useEffect(() => {
    getDataProducts();
  }, []);
  const handleToggle = (toggle) => {
    setToggle(toggle);
  };
  return (
    <div className="basis-[83%]">
      <section className="flex">
        <Sidebar />
        <section className="flex mt-3 basis-[83%] justify-center ">
          <div className="w-[80%]">
            <div className="w-full flex items-center justify-between ">
              <h2 className="text-[32px] font-semibold ">Clients & Products</h2>
              <UserProfileDropDown />
            </div>
            <br />
            <div className="w-full">
              <div className="w-full flex items-center flex-col ">
                <div className="w-full flex justify-end">
                  <div className="flex items-center gap-x-[23px] ">
                    <Search />
                    <div
                      className="flex items-center justify-center gap-x-4 shadow-search
                bg-white rounded-[60px] p-5 "
                      onClick={() => handleToggle(true)}
                    >
                      <img src={addBtn} alt="" />
                      <p className="text-[#FE8057] text-xl font-semibold ">
                        Add new
                      </p>
                    </div>
                  </div>
                </div>
                <br />
                <div className="w-full flex items-center justify-center ">
                  <table className="w-full">
                    <tbody>
                      <tr className="text-white">
                        <th className="px-3 py-2 border border-solid border-[#F3F3F3] bg-[#703EDC] ">
                          ID
                        </th>
                        <th className="px-3 py-2 border border-solid border-[#F3F3F3] bg-[#703EDC]">
                          Clien
                        </th>
                        <th className="px-3 py-2 border border-solid border-[#F3F3F3] bg-[#703EDC]">
                          Region
                        </th>
                        <th className="px-3 py-2 border border-solid border-[#F3F3F3] bg-[#703EDC]">
                          Quantity
                        </th>
                        <th className="px-3 py-2 border border-solid border-[#F3F3F3] bg-[#703EDC]">
                          Price
                        </th>
                      </tr>
                      {response?.map((product) => (
                        <tr key={product?._id}>
                          <td className="px-2 py-1">{product._id}</td>
                          <td className="px-2 py-1">{product.name}</td>
                          <td className="px-2 py-1">{product.region}</td>
                          <td className="px-2 py-1">{product.quantity}</td>
                          <td className="px-2 py-1">{product.price}.00 Da</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </section>
        {Toggle && <AddProduct handleClose={handleToggle} />}
      </section>
    </div>
  );
};
