import { Result } from 'postcss';
import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import get from './../http/get';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  solid,
  regular,
  brands,
} from "@fortawesome/fontawesome-svg-core/import.macro";


const Home = () => {
    const [global,setglobal] = useState({})
    const [menu,setmenu]=useState([])
    useEffect(()=>{
        get("http://localhost:9000/api/getglobal").then(result=>{
           // alert((result.result[0].text1))
           setglobal({...JSON.parse(result.result[0].text1),logo:result.result[0].entry1})
        })
    })
    
  return (
    <div><Banner global={global}/>
    <MenuBar global={global} /></div>
  )
}

export default Home

function Banner (props){

return <div className='bg-blue-500 h-25 text-white text-xs  py-1 banner'><div>Lic: {props.global.LIC} <br></br> Registration: {props.global.Registration}</div>
<div> {props.global.phone}<br/>  {props.global.email}  </div></div>
}

function MenuBar(props){

    return <nav className="menubar px-2 bg-white border-gray-200 dark:bg-gray-800 dark:border-gray-700">
        <img src={`http://localhost:9000/${props.global.logo}`}  className="homepage_logo" alt="" />
        <div className="menubox">Home</div>
    </nav>
}