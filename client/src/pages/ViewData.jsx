import { Search } from "../components/Search";
import { Sidebar } from "../components/Sidebar";
import { UserProfileDropDown } from "../components/userDropDown";
import addBtn from "../assets/addBtn.svg";
import { AddProduct } from "../components/addProduct";
import { useState } from "react";

export const ViewData = () => {
  const products = [
    {
      id: 1,
      name: "product 1",
      price: 100,
      age: 10,
      date: "2021-10-10",
    },
    {
      id: 2,
      name: "product 2",
      price: 200,
      age: 20,
      date: "2021-10-10",
    },
  ];
  const [Toggle, setToggle] = useState(true);
  const handleToggle = (toggle) => {
    setToggle(toggle);
  };
  return (
    <div className="absolute">
      <section className="w-screen h-screen flex">
        <Sidebar />
        <section className="flex mt-3 w-[80%] justify-center ">
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
                          Client
                        </th>
                        <th className="px-3 py-2 border border-solid border-[#F3F3F3] bg-[#703EDC]">
                          Prodcut
                        </th>
                        <th className="px-3 py-2 border border-solid border-[#F3F3F3] bg-[#703EDC]">
                          Price
                        </th>
                        <th className="px-3 py-2 border border-solid border-[#F3F3F3] bg-[#703EDC]">
                          Age
                        </th>
                        <th className="px-3 py-2 border border-solid border-[#F3F3F3] bg-[#703EDC]">
                          Date
                        </th>
                      </tr>
                      {products.map(({ id, name, age, price, date }) => (
                        <tr key={id}>
                          <td className="px-2 py-1">{id}</td>
                          <td className="px-2 py-1">{name}</td>
                          <td className="px-2 py-1">{age}</td>
                          <td className="px-2 py-1">{price}</td>
                          <td className="px-2 py-1">{date}</td>
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
