import React, { useEffect } from "react";
import Sidebar from "./../Components/Sidebar";
import { useState } from "react";
import { useParams } from "react-router-dom";
import SunEditor from "suneditor-react";
import "suneditor/dist/css/suneditor.min.css";
import post from "../http/post";
import STRINGS from "../strings.json";
import { Dropdown, DropdownButton } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

export const Editor = () => {
  let params = useParams();

  const [pagedata, setdata] = useState({ type: params.name });
  const [image, setimage] = useState(null);
  const [jobc, setjobc] = useState([]);
  const [job_categories, setjobcategory] = useState();

  useEffect(() => {
    if (params.name == "jobs_available") {
      const formdata = new FormData();
      formdata.append(
        "data",
        JSON.stringify({ key: "type", value: "job_categories" })
      );
      post("http://localhost:9000/api/getbyparam", formdata).then((result) => {
        setjobc(result.result);
      });
    }
  }, [params.name]);
  return (
    <Sidebar>
      <div>Enter the following information</div>
      <div className="editor_flex">
        <div className="secondparent">
          <div className="editor_gridcontainer">
            {jobc.length > 0 && (
              <div class="mb-4 editor_input_grid">
                <label
                  class="block text-gray-700 text-sm font-bold mb-2"
                  for="username"
                >
                  Select Job Category
                </label>
                <DropdownButton
                  id="dropdown-basic-button"
                  title="Jobs Category"
                >
                  {jobc.map((value, index) => (
                    <Dropdown.Item
                      onClick={() => {
                        setdata((prev) => ({
                          ...prev,
                          job_category: value.entry2,
                        }));
                      }}
                    >
                      {value.entry2}
                    </Dropdown.Item>
                  ))}
                </DropdownButton>
              </div>
            )}
            {items[params.name].map((value, index) => (
              <div class="mb-4 editor_input_grid">
                <label
                  class="block text-gray-700 text-sm font-bold mb-2"
                  for="username"
                >
                  {value}
                </label>
                <input
                  type="text"
                  id={value}
                  onChange={(e) => {
                    const temp = { ...pagedata, immutate_value: "xcvhjhi" };
                    temp[value] = e.target.value;
                    setdata(temp);
                  }}
                  class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>
            ))}
            <div class="mb-4 editor_input_grid">
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
                  setdata((prev) => ({ ...prev, position: e.target.value }));
                }}
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
          </div>
          <SunEditor
            height="160px"
            onChange={(result) => {
              setdata((prev) => ({ ...prev, description: result }));
            }}
            className="suneditor"
          />
        </div>
        <div>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-8"
            onClick={() => {
              const formdata = new FormData();

              formdata.append("file", image);
              formdata.append("data", JSON.stringify(pagedata));
              post(STRINGS.apiurl + "create", formdata).then((result) => {
                alert(JSON.stringify(result));
              });
            }}
          >
            submit
          </button>
          <input
            type="file"
            accept="image/*"
            onChange={(e) => {
              setimage(e.target.files[0]);
            }}
          />
        </div>
      </div>
    </Sidebar>
  );
};

const items = {
  slider: ["Heading", "Sub Heading"],
  introduction: [],
  services: ["name"],
  job_categories: ["category name"],
  countries_we_serve: ["Country Name"],
  jobs_available: ["job name", "country name"],
  ourteam: ["name", "post", "phone", "email"],
  clients: [],
};
