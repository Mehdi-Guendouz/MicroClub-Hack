import { Sidebar } from "../components/Sidebar";

export const ViewDataStoke = () => {
  const [resposne] = useState([
    {
      _id: "1",
      name: "Product 1",
      price: "100",
      quantity: "10",
      category: "category 1",
    },
    {
      _id: "1",
      name: "Product 1",
      price: "100",
      quantity: "10",
      category: "category 1",
    },
  ]);
  return (
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
                        Price
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
                        Categories
                      </th>
                    </tr>
                    {response?.map((product) => (
                      <tr key={product?._id}>
                        <td className="px-2 py-1">{product.price}.00 Da</td>
                        <td className="px-2 py-1">{product.name}</td>
                        <td className="px-2 py-1">{product.region}</td>
                        <td className="px-2 py-1">{product.quantity}</td>
                        <td className="px-2 py-1">{product.category}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};
