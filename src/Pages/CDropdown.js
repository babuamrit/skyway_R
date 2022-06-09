import Sidebar from '../Components/Sidebar'
import post from './../http/post';
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import STRINGS from "../strings.json"


const CDropdown = () => {
    const [data,  setdata ] = useState({})
    const [menu,setmenu] = useState([])

    useEffect(()=>{
        const formdata = new FormData()
        formdata.append("data",JSON.stringify({key:"type",value:"menu"}))
        post(STRINGS.apiurl+"getbyparam",formdata).then(result =>{
          setmenu(JSON.parse(result.result[0].text1))
        })
      },[])
      
    
  return (
    <Sidebar>
        <div>
            <div>Create a Dropdown</div>
            <div class="mb-4 editor_input_grid w-25">
              <label
                class="block text-gray-700 text-sm font-bold mb-2"
                for="username"
              >
                Name
              </label>
              <input
                type="text"
                id={"position"}
                onChange={(e) => {
                  const temp = { ...data, immutate_value: "xcvhjhi" };
                  temp["name"] = e.target.value;
                  setdata(temp);
                }}
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div class="mb-4 editor_input_grid w-25">
              <label
                class="block text-gray-700 text-sm font-bold mb-2"
                for="username"
              >
                position
              </label>
              <input
                type="text"
                id={"position"}
                onChange={(e) => {
                  const temp = { ...data, immutate_value: "xcvhjhi" };
                  temp["position"] = e.target.value;
                  setdata(temp);
                }}
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <button className='bg-blue-500 hover:bg-blue-700 text-white text-bold px-4 py-2 ' onClick={()=>{
                const temp=[...menu]
                temp.splice(parseInt(data.position),0,{name:data.name,type:"dropdown",items:[]})
                const formdata = new FormData();
                formdata.append("data",JSON.stringify({value:temp,type:"menu"}));
                post(STRINGS.apiurl+"update",formdata).then(result=>{
                    alert(JSON.stringify(result))
                  })
            }} >Create</button>
        </div>
    </Sidebar>
  )
}

export default CDropdown