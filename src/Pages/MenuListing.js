import React, { useEffect, useState } from "react";
import Sidebar from "../Components/Sidebar";
import post from "../http/post";
import STRING from "../strings.json";

const MenuListing = () => {
  const [data, setdata] = useState([]);
  useEffect(() => {
    const formdata = new FormData();
    formdata.append("data", JSON.stringify({ key: "type", value: "menu" }));
    post(STRING.apiurl + "getbyparam", formdata).then((result) => {
      setdata(JSON.parse(result.result[0].text1));
    });
  }, []);
  return (
    <Sidebar>
      <div>
        <div className="font-medium leading-tight text-4xl mt-0 mb-2 text-blue-600">
          MenuBar Navigation
        </div>
        <div className="addlink-dropdown">
          <button className="mt-4  mr-10 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-10">
            Add Link
          </button>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Add dropdown
          </button>
          <table className="menulisting-table">
            <thead>
              <th className="menulisting-head">name</th>
              <th className="menulisting-head">type</th>
              <th className="menulisting-head">change position</th>
              <th className="menulisting-head">edit</th>
              <th className="menulisting-head">delete</th>
            </thead>
            <tbody>
              {data.map((value, index) => (
                <tr key={index}>
                  <td className="menulisting-body">{value.name}</td>
                  <td className="menulisting-body">{value.type}</td>
                  <td className="menulisting-body">
                    <button>change</button>
                  </td>
                  <td className="menulisting-body">
                    <button>edit</button>
                  </td>
                  <td className="menulisting-body">
                    <button>delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </Sidebar>
  );
};

export default MenuListing;
