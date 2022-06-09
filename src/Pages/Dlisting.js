import React, { useEffect, useState } from "react";
import Sidebar from "../Components/Sidebar";
import post from "../http/post";
import STRING from "../strings.json";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";

const MenuListing = () => {
    let params = useParams();
  const navigate = useNavigate();
  const [data, setdata] = useState([]);
  useEffect(() => {
    const formdata = new FormData();
    formdata.append("data", JSON.stringify({ key: "type", value: "menu" }));
    post(STRING.apiurl + "getbyparam", formdata).then((result) => {
      setdata(JSON.parse(result.result[0].text1)[params.index].items);
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
            navigate(`/menueditor/create/dropdown/${params.index}/-`)
          }}>
            Add Link
          </button>
       
          <table className="menulisting-table table-auto">
            <thead>
              <th className="menulisting-head ">Name</th>
     
              <th className="menulisting-head ">Edit</th>
              <th className="menulisting-head ">Delete</th>
            </thead>
            <tbody>
              {data.map((value, index) => (
                <tr key={index}>
                  <td className="menulisting-body text-bold ">{value.name}</td>
                  
               
                  <td className="menulisting-body">
                    <button className="bg-blue-500 hover:bg-blue-700 text-white text-bold-700 px-4 py-2" onClick={()=>{
                        navigate(`/menueditor/update/dropdown/${params.index}/${index}`)
                    }} >edit</button>
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
