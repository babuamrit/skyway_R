import React, { useState } from "react";
import Sidebar from "../Components/Sidebar";

const ALink = () => {
  const [data, setdata] = useState({});
  return (
    <Sidebar>
      <div className="alink_editor_container">
        <div>Enter the following Information</div>

        <div>
          <div>
            <div class="mb-4 editor_input_grid">
              <label
                class="block text-gray-700 text-sm font-bold mb-2"
                for="username"
              >
                Name
              </label>
              <input
                type="text"
                id={value}
                onChange={(e) => {
                  setdata((prev) => ({ ...prev, name: e.target.value }));
                }}
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div class="mb-4 editor_input_grid">
              <label
                class="block text-gray-700 text-sm font-bold mb-2"
                for="username"
              >
                position
              </label>
              <input
                type="text"
                id={value}
                onChange={(e) => {
                  setdata((prev) => ({ ...prev, position: e.target.value }));
                }}
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            Short Content
            <SunEditor
              height="160px"
              onChange={(result) => {
                setdata((prev) => ({ ...prev, description: result }));
              }}
              className="suneditor"
            />
            Detail Content
            <SunEditor
              height="160px"
              onChange={(result) => {
                setdata((prev) => ({ ...prev, description: result }));
              }}
              className="suneditor"
            />
          </div>

          <div>
            <button>update</button>
            <div class="mb-4 editor_input_grid">
              <label
                class="block text-gray-700 text-sm font-bold mb-2"
                for="username"
              >
                Name
              </label>
              <input
                type="file"
                accept="image/*"
                id={value}
                onChange={(e) => {
                  const temp = { ...pagedata, immutate_value: "xcvhjhi" };
                  temp[value] = e.target.value;
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
                Name
              </label>
              <input
                type="file"
                accept="image/*"
                id={value}
                onChange={(e) => {
                  const temp = { ...pagedata, immutate_value: "xcvhjhi" };
                  temp[value] = e.target.value;
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
                Name
              </label>
              <input
                type="file"
                id={value}
                onChange={(e) => {
                  const temp = { ...pagedata, immutate_value: "xcvhjhi" };
                  temp[value] = e.target.value;
                  setdata(temp);
                }}
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
          </div>
        </div>
      </div>
    </Sidebar>
  );
};

export default ALink;
