import React, { useEffect, useState } from "react";
import Sidebar from "../Components/Sidebar";
import post from "../http/post";
import STRING from "../strings.json";
import { useNavigate } from "react-router-dom";

const MenuListing = () => {
  const navigate = useNavigate();
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
          <button className="mt-4  mr-10 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-10" onClick={()=>{
            navigate("/menueditor/create/link/-/-")
          }}>
            Add Link
          </button>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"  onClick={()=>{
            navigate("/createdrop")
          }} >
            Add dropdown
          </button>
          <table className="menulisting-table table-auto">
            <thead>
              <th className="menulisting-head ">Name</th>
              <th className="menulisting-head ">Type</th>
              <th className="menulisting-head ">Change position</th>
              <th className="menulisting-head ">Edit</th>
              <th className="menulisting-head ">Delete</th>
            </thead>
            <tbody>
              {data.map((value, index) => (
                <tr key={index}>
                  <td className="menulisting-body text-bold ">{value.name}</td>
                  <td className="menulisting-body">{value.type}</td>
                  <td className="menulisting-body">
                    <button>change</button>
                  </td>
                  <td className="menulisting-body">
                    <button className="bg-blue-500 hover:bg-blue-700 text-white text-bold-700 px-4 py-2" onClick={()=>{
                      if(value.type=="link"){
                        navigate(`/menueditor/update/link/${index}/-`)
                      }else{
                           navigate(`/Dlisting/${index}`)
                      }
                   
                    }}>edit</button>
                  </td>
                  <td className="menulisting-body">
                    <button className="bg-red-500 hover:bg-red-700 text-white text-bold-700 px-4 py-2">delete</button>
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
