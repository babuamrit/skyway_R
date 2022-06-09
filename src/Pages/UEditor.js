import React, { useEffect } from "react";
import Sidebar from "../Components/Sidebar";
import { useState } from "react";
import { useParams } from "react-router-dom";
import SunEditor from "suneditor-react";
import "suneditor/dist/css/suneditor.min.css";
import post from "../http/post";
import STRINGS from "../strings.json";

const UEditor = () => {
  let params = useParams();

  const [pagedata, setdata] = useState({ type: params.name, id: params.id });
  const [image, setimage] = useState(null);

  useEffect(() => {
    if (params.name == "jobs_available") {
    }
  }, [params.name]);

  useEffect(() => {
    const formdata = new FormData();
    formdata.append("data", JSON.stringify({ key: "id", value: params.id }));
    post(STRINGS.apiurl + "getbyparam", formdata).then((result) => {
      if (result.error) {
      } else {
        setdata((prev) => ({
          ...prev,
          description: result.result[0].text1,
          ...mapdata(result.result[0], params.name),
        }));
      }
    });
  }, [params.id]);

  return (
    <Sidebar>
      <div>Enter the following information</div>
      <div className="editor_flex">
        <div className="secondparent">
          <div className="editor_gridcontainer">
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
                  value={pagedata[value]}
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
                value={pagedata["position"]}
                onChange={(e) => {
                  const temp = { ...pagedata, immutate_value: "xcvhjhi" };
                  temp["position"] = e.target.value;
                  setdata(temp);
                }}
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
          </div>
          {typeof pagedata.description == "string" && (
            <SunEditor
              height="160px"
              onChange={(result) => {
                setdata((prev) => ({ ...prev, description: result }));
              }}
              defaultValue={pagedata.description}
              className="suneditor"
            />
          )}
        </div>
        <div>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-8"
            onClick={() => {
              const formdata = new FormData();

              formdata.append("file", image);
              formdata.append("data", JSON.stringify(pagedata));
              post(STRINGS.apiurl + "update", formdata).then((result) => {
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

const mapdata = (data, type) => {
  const temp = {};
  switch (type) {
    case "slider":
      temp["Heading"] = data.entry2;
      temp["Sub Heading"] = data.entry3;
      break;
    case "introduction":
      break;
    case "services":
      temp["name"] = data.entry2;
      break;
    case "job_categories":
      temp["category name"] = data.entry2;
      break;
    case "countries_we_serve":
      temp["Country Name"] = data.entry2;
      break;
    case "jobs_available":
      break;
    case "ourteam":
      temp["name"] = data.entry2;
      temp["post"] = data.entry3;
      temp["phone"] = data.entry4;
      temp["email"] = data.entry5;
      break;
    default:
      break;
  }

  return temp;
};

export default UEditor;
