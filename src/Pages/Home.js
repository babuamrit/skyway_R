                import { Result } from 'postcss';
                import React from 'react'
                import { useState } from 'react';
                import { useEffect } from 'react';
                import get from './../http/get';
                import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
                import 'bootstrap/dist/css/bootstrap.min.css';
                import { Dropdown } from 'react-bootstrap';
                

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
                    },[])

                    useEffect(()=>{
                      get("http://localhost:9000/api/getmenu").then(result=>{
                      //  alert((result.result[0].text1))
                        setmenu([...JSON.parse(result.result[0].text1)])
                      })
                    },[])
                    
                  return (
                    <div><Banner global={global}/>
                    <MenuBar global={global} menu={menu}/></div>
                  )
                }

                export default Home

                function Banner (props){

                return <div className='bg-blue-500 h-25 text-white text-xs  py-1 banner'><div>Lic: {props.global.LIC} <br></br> Registration: {props.global.Registration}</div>
                <div> {props.global.phone}<br/>  {props.global.Email}  </div></div>
                }

                function MenuBar(props){
                const [data,setdata] = useState([])
                  useEffect(()=>{
                setdata(props.menu)
                },[])
                    return <nav className="menubar  bg-white border-gray-200 dark:bg-gray-800 dark:border-gray-700">
                        <img src={`http://localhost:9000/${props.global.logo}`}  className="homepage_logo" alt="" />
                    <div className='menubox'>
                        <button className="menuitem hover:bg-blue-400 hover:text-white">Home</button>
                    
                        {data.map((value,index)=>{
                if(value.type=="link"){
                    return <button className='menuitem hover:bg-blue-400 hover:text-white'>{value.name}</button>
                }
                return  <Dropdown>
                <Dropdown.Toggle className='bg-white text-black menudrop'>
                  {value.name}
                </Dropdown.Toggle>
              
                <Dropdown.Menu>
                  {value.items.map((item,index)=>{
                    return  <Dropdown.Item href="#/action-2">{item.name}</Dropdown.Item>
                  })}
                 
                </Dropdown.Menu>
              </Dropdown>
                })}
                        </div>

                        <div className='menubar-socialmedia'>
                        <FontAwesomeIcon icon="fa-twitter" />
                        </div>
                    </nav>
                }