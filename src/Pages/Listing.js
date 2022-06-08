import React from "react";
import { useParams } from "react-router-dom";
import Sidebar from "../Components/Sidebar";
import post from './../http/post';
import STRINGS from "../strings.json"
import { useNavigate } from 'react-router-dom'


const Listing = () => {
  let params = useParams();
  const navigate = useNavigate()
  const [data,setdata] = React.useState([])
  React.useEffect(()=>{
    const formdata = new FormData()
    formdata.append("data",JSON.stringify({
      key:"type",
      value:params.name
    }))
    post(STRINGS.apiurl +"getbyparam",formdata).then(result =>{
      if(result.error){

      }else{
       
      }
    })
  },[])
  return <Sidebar><div className="dashboard_list_container_box">
    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
    onClick={()=>{
      navigate("/editor/"+params.name)
    }}
    >Add new Item</button>
    </div></Sidebar>;
};

export default Listing;

