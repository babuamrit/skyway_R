import React, { useEffect } from 'react'
import Sidebar from './../Components/Sidebar';
import { useState } from 'react';
import { useParams } from "react-router-dom";
import SunEditor from 'suneditor-react';
import 'suneditor/dist/css/suneditor.min.css';

export const Editor = () => {
    let params = useParams();

    const [pagedata, setdata] = useState({})
    
    useEffect(()=>{
    if(params.name=="jobs_available"){

    }
    },[])
  return (
   <Sidebar> 
       <div>Enter the following information</div>
       <div className="editor_flex"><div className="secondparent">
       <div className='editor_gridcontainer'>
           {items[params.name].map((value,index)=>(
               <div class="mb-4 editor_input_grid">
               <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
                {value}
               </label>
               <input type="text" id={value} onChange={(e)=>{
                   const temp = {...pagedata, immutate_value:"xcvhjhi"};
                   temp[value] = e.target.value
                   setdata(temp) 
               }} class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
             </div>
             
           ))}
            <div class="mb-4 editor_input_grid">
               <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
                position
               </label>
               <input type="text" id={"position"} onChange={(e)=>{
                   const temp = {...pagedata, immutate_value:"xcvhjhi"};
                   temp["position"] = e.target.value
                   setdata(temp) 
               }} class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
             </div>
            
       </div>
       <SunEditor         height="160px" onChange={(result)=>{setdata(prev=>({...prev, description:result}))}} className="suneditor"/>
       </div>
       <div>
         <button onclick={()=>{
           const formdata = new FormDate()
           formdata.append("file",pagedata.file1)
           formdat.append("data")

         }} >submit</button>
         <input type="file" accept="image/*" 
           onChange={(e) => {
            setdata(prev=>({...prev, file1:e.target.files[0]}));
          }} />
         </div>
       </div>
   </Sidebar>
  )
}








const items = {
    slider:["Heading", "Sub Heading"],
    introduction:[],
    services:["name"],
    job_categories:["category name"],
    countries_we_serve:["Country Name"],
    jobs_available:["job name","country name"],
    ourteam:["name","post","phone","email"],
    clients:[]
    
  }