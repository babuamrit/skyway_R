import React from "react";
import { useParams } from "react-router-dom";
import Sidebar from "../Components/Sidebar";

const Listing = () => {
  let params = useParams();
  
  return <Sidebar>Listing {params.name}</Sidebar>;
};

export default Listing;
