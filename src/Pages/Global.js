import React from "react";
import { Form, Button } from "react-bootstrap";

import { useState } from "react";
import post from "../http/post";
import STRINGS from "../strings.json";
import SideBar from "../Components/Sidebar";
import SunEditor from "suneditor-react";
import "suneditor/dist/css/suneditor.min.css";

const Global = () => {
  const [data, setdata] = useState({});
  const [image, setimage] = useState(null);
  React.useEffect(() => {
    const formdata = new FormData();
    formdata.append("data", JSON.stringify({ key: "type", value: "global" }));
    post(STRINGS.apiurl + "getbyparam", formdata).then((result) => {
      if (result.error) {
        alert(result.result[0].text1);
      } else {
        //  setdata((prev) => ({ ...prev, ...JSON.parse(result.result[0].text1) }));
      }
    });
  }, []);
  return (
    <SideBar>
      <div>Enter the following</div>
      <div className="global-values">
        <div class="mb-4 editor_input_grid">
          <label
            class="block text-gray-700 text-sm font-bold mb-2"
            for="username"
          >
            Name
          </label>
          <input
            type="text"
            onChange={(e) => {
              const temp = { ...data, immutate_value: "xcvhjhi" };
              temp["name"] = e.target.value;
              setdata(temp);
            }}
            value={data["name"]}
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div class="mb-4 editor_input_grid">
          <label
            class="block text-gray-700 text-sm font-bold mb-2"
            for="username"
          >
            Logo
          </label>
          <input
            type="file"
            accept="image/*"
            onChange={(e) => {
              setimage(e.target.files[0]);
            }}
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div class="mb-4 editor_input_grid">
          <label
            class="block text-gray-700 text-sm font-bold mb-2"
            for="username"
          >
            Address
          </label>
          <input
            type="text"
            onChange={(e) => {
              const temp = { ...data, immutate_value: "xcvhjhi" };
              temp["address"] = e.target.value;
              setdata(temp);
            }}
            value={data["address"]}
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div class="mb-4 editor_input_grid">
          <label
            class="block text-gray-700 text-sm font-bold mb-2"
            for="username"
          >
            Phone
          </label>
          <input
            type="text"
            onChange={(e) => {
              const temp = { ...data, immutate_value: "xcvhjhi" };
              temp["phone"] = e.target.value;
              setdata(temp);
            }}
            value={data["phone"]}
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div class="mb-4 editor_input_grid">
          <label
            class="block text-gray-700 text-sm font-bold mb-2"
            for="username"
          >
            Fax
          </label>
          <input
            type="text"
            value={data["Fax"]}
            onChange={(e) => {
              const temp = { ...data, immutate_value: "xcvhjhi" };
              temp["Fax"] = e.target.value;
              setdata(temp);
            }}
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div class="mb-4 editor_input_grid">
          <label
            class="block text-gray-700 text-sm font-bold mb-2"
            for="username"
          >
            Email
          </label>
          <input
            type="text"
            value={data["Email"]}
            onChange={(e) => {
              const temp = { ...data, immutate_value: "xcvhjhi" };
              temp["Email"] = e.target.value;
              setdata(temp);
            }}
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div class="mb-4 editor_input_grid">
          <label
            class="block text-gray-700 text-sm font-bold mb-2"
            for="username"
          >
            LIC
          </label>
          <input
            value={data["LIC"]}
            type="text"
            onChange={(e) => {
              const temp = { ...data, immutate_value: "xcvhjhi" };
              temp["LIC"] = e.target.value;
              setdata(temp);
            }}
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div class="mb-4 editor_input_grid">
          <label
            class="block text-gray-700 text-sm font-bold mb-2"
            for="username"
          >
            Registration
          </label>
          <input
            type="text"
            value={data["Registration"]}
            onChange={(e) => {
              const temp = { ...data, immutate_value: "xcvhjhi" };
              temp["Registration"] = e.target.value;
              setdata(temp);
            }}
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div class="mb-4 editor_input_grid">
          <label
            class="block text-gray-700 text-sm font-bold mb-2"
            for="username"
          >
            FaceBook Link
          </label>
          <input
            type="text"
            value={data["FaceBook"]}
            onChange={(e) => {
              const temp = { ...data, immutate_value: "xcvhjhi" };
              temp["FaceBook"] = e.target.value;
              setdata(temp);
            }}
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div class="mb-4 editor_input_grid">
          <label
            class="block text-gray-700 text-sm font-bold mb-2"
            for="username"
          >
            Twitter Link
          </label>
          <input
            type="text"
            value={data["twitter"]}
            onChange={(e) => {
              const temp = { ...data, immutate_value: "xcvhjhi" };
              temp["twitter"] = e.target.value;
              setdata(temp);
            }}
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div class="mb-4 editor_input_grid">
          <label
            class="block text-gray-700 text-sm font-bold mb-2"
            for="username"
          >
            LinkedIn
          </label>
          <input
            type="text"
            value={data["linkedin"]}
            onChange={(e) => {
              const temp = { ...data, immutate_value: "xcvhjhi" };
              temp["linkedin"] = e.target.value;
              setdata(temp);
            }}
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div class="mb-4 editor_input_grid">
          <label
            class="block text-gray-700 text-sm font-bold mb-2"
            for="username"
          >
            messanger
          </label>
          <input
            type="text"
            value={data["messanger"]}
            onChange={(e) => {
              const temp = { ...data, immutate_value: "xcvhjhi" };
              temp["messanger"] = e.target.value;
              setdata(temp);
            }}
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
      </div>
      Messge From Chairman
      {true && (
        <SunEditor
          height="160px"
          width="700px"
          defaultValue={data["description"]}
          onChange={(result) => {
            setdata((prev) => ({ ...prev, description: result }));
          }}
          className="suneditor"
        />
      )}
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-8"
        onClick={() => {
          const formdata = new FormData();

          formdata.append("file", image);
          formdata.append("data", JSON.stringify({ ...data, type: "global" }));
          post(STRINGS.apiurl + "update", formdata).then((result) => {
            alert(JSON.stringify(result));
          });
        }}
      >
        submit
      </button>
    </SideBar>
  );
};

export default Global;
