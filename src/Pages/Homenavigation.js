import React from "react";
import Sidebar from "../Components/Sidebar";
import { useNavigate } from "react-router-dom";

const Homenavigation = () => {
  const navigate = useNavigate();
  return (
    <Sidebar>
      <h3>Edit Homepage Section</h3>
      <table className="homepage_table">
        <tr>
          <th>Section Name</th>
          <th>Action</th>
        </tr>
        <tr>
          <td>Slider</td>
          <td>
            <button
              className="bg-blue-500 hover:bg-blue-500 text-white font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
              onClick={() => {
                navigate("/listing/slider");
              }}
            >
              Edit
            </button>
          </td>
        </tr>

        <tr>
          <td>Introduction</td>
          <td>
            <button
              className="bg-blue-500 hover:bg-blue-500 text-white font-sesmibold  hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
              onClick={() => {
                navigate("/listing/introduction");
              }}
            >
              Edit
            </button>
          </td>
        </tr>

        <tr>
          <td>Services</td>
          <td>
            <button
              className="bg-blue-500 hover:bg-blue-500 text-white font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
              onClick={() => {
                navigate("/listing/services");
              }}
            >
              Edit
            </button>
          </td>
        </tr>

        <tr>
          <td>Jobs Category</td>
          <td>
            <button
              className="bg-blue-500 hover:bg-blue-500 text-white font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
              onClick={() => {
                navigate("/listing/job_categories");
              }}
            >
              Edit
            </button>
          </td>
        </tr>

        <tr>
          <td>Countries We Serve</td>
          <td>
            <button
              className="bg-blue-500 hover:bg-blue-500 text-white font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
              onClick={() => {
                navigate("/listing/countries_we_serve");
              }}
            >
              Edit
            </button>
          </td>
        </tr>

        <tr>
          <td>Jobs Opening</td>
          <td>
            <button
              className="bg-blue-500 hover:bg-blue-500 text-white font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
              onClick={() => {
                navigate("/listing/jobs_available");
              }}
            >
              Edit
            </button>
          </td>
        </tr>

        <tr>
          <td>Our Team</td>
          <td>
            <button
              className="bg-blue-500 hover:bg-blue-500 text-white font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
              onClick={() => {
                navigate("/listing/ourteam");
              }}
            >
              Edit
            </button>
          </td>
        </tr>

        <tr>
          <td>Client</td>
          <td>
            <button
              className="bg-blue-500 hover:bg-blue-500 text-white font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
              onClick={() => {
                navigate("/listing/clients");
              }}
            >
              Edit
            </button>
          </td>
        </tr>
      </table>
    </Sidebar>
  );
};

export default Homenavigation;
