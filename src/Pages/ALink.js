import React, { useState, useEffect } from "react";
import Sidebar from "../Components/Sidebar";
import { useParams } from "react-router-dom";
import SunEditor from "suneditor-react";
import "suneditor/dist/css/suneditor.min.css";
import post from "../http/post";
import STRINGS from "../strings.json";

const ALink = () => {
  let params = useParams();
  const action = params.action;
  const type = params.type;
  const index1 = params.index1;
  const index2 = params.index2;
  const [data, setdata] = useState({});
  const [menu, setmenu] = useState([]);
  const [files, setfiles] = useState({});
  useEffect(() => {
    const formdata = new FormData();
    formdata.append("data", JSON.stringify({ key: "type", value: "menu" }));
    post(STRINGS.apiurl + "getbyparam", formdata).then((result) => {
      setmenu(JSON.parse(result.result[0].text1));
    });
  }, []);
  return (
    <Sidebar>
      <div className="alink_editor_container">
        <div>Enter the following Information</div>

        <div className="alink-flexcontainer">
          <div className="alink-sideleft">
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
            <button>Detail Content</button>
            <SunEditor height="160px" className="suneditor" />
          </div>

          <div>
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mb-10"
              onClick={() => {
                const formdata = new FormData();
                const temp = { ...data, type: "menuitem" };
                if (files.image_feature != undefined) {
                  temp.hasfeaturedimage = true;
                  formdata.append("file", files.image_feature);
                }
                if (files.image_banner != undefined) {
                  temp.hasbannerimage = true;
                  formdata.append("file", files.image_banner);
                }
                if (files.file != undefined) {
                  temp.hasfile = true;
                  formdata.append("file", files.file);
                }

                if (type == "link") {
                  if (action == "create") {
                    formdata.append("data", JSON.stringify(temp));
                    post(STRINGS.apiurl + "create", formdata).then((result) => {
                      const temp = [...menu];
                      temp.splice(parseInt(data.position), 0, {
                        type: "link",
                        id: result.result.insertId,
                        name: data.name,
                      });
                      const new_formdata = new FormData();
                      new_formdata.append(
                        "data",
                        JSON.stringify({ value: temp, type: "menu" })
                      );

                      post(STRINGS.apiurl + "update", new_formdata).then(
                        (result) => {
                          alert(JSON.stringify(result));
                        }
                      );
                    });
                  } else {
                    temp.id = menu[index1].id;
                    formdata.append("data", JSON.stringify(temp));
                    post(STRINGS.apiurl + "update", formdata).then((result) => {
                      if (
                        parseInt(data.position) != index1 ||
                        menu[parseInt(index1)].name != data.name
                      ) {
                        const temp = [...menu];
                        const _temp = temp[parseInt(index1)];
                        _temp.name = data.name;
                        temp.slice(parseInt(index1), 1);
                        temp.slice(parseInt(data.position), 0, _temp);
                        const new_formdata = new FormData();
                        new_formdata.append(
                          "data",
                          JSON.stringify({ value: temp, type: "menu" })
                        );

                        post(STRINGS.apiurl + "update", new_formdata).then(
                          (result) => {
                            alert(JSON.stringify(result));
                          }
                        );
                      }
                      alert(JSON.stringify(result));
                    });
                  }
                } else if (type == "dropdown") {
                  if (action == "create") {
                    formdata.append("data", JSON.stringify(temp));
                    post(STRINGS.apiurl + "create", formdata).then((result) => {
                      const temp = [...menu];
                      temp[parseInt(index1)].items.splice(
                        parseInt(menu.position),
                        0,
                        {
                          type: "link",
                          id: result.result.insertId,
                          name: data.name,
                        }
                      );
                      const new_formdata = new FormData();
                      new_formdata.append(
                        "data",
                        JSON.stringify({ value: temp, type: "menu" })
                      );

                      post(STRINGS.apiurl + "update", new_formdata).then(
                        (result) => {
                          alert(JSON.stringify(result));
                        }
                      );
                    });
                  } else {
                    temp.id = menu[parseInt(index1)].items[parseInt(index2)].id;
                    formdata.append("data", JSON.stringify(temp));
                    post(STRINGS.apiurl + "update", formdata).then((result) => {
                      if (parseInt(data.position) != index2) {
                        const temp = [...menu];
                        const _temp =
                          temp[parseInt(index1)].items[parseInt(data.position)];
                        temp[parseInt(index1)].items.splice(
                          parseInt(index2),
                          1
                        );
                        temp[parseInt(index1)].items.splice([
                          parseInt(data.position),
                          0,
                          _temp,
                        ]);
                        const new_formdata = new FormData();
                        new_formdata.append(
                          "data",
                          JSON.stringify({ value: temp, type: "menu" })
                        );

                        post(STRINGS.apiurl + "update", new_formdata).then(
                          (result) => {
                            alert(JSON.stringify(result));
                          }
                        );
                      }
                      alert(JSON.stringify(result));
                    });
                  }
                }
              }}
            >
              update
            </button>
            <div class="mb-4 editor_input_grid">
              <label
                class="block text-gray-700 text-sm font-bold mb-2"
                for="username"
              >
                Feature Image
              </label>
              <input
                type="file"
                accept="image/*"
                onChange={(e) => {
                  setfiles((prev) => ({
                    ...prev,
                    image_feature: e.target.files[0],
                  }));
                }}
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div class="mb-4 editor_input_grid">
              <label
                class="block text-gray-700 text-sm font-bold mb-2"
                for="username"
              >
                Banner Image
              </label>
              <input
                type="file"
                accept="image/*"
                onChange={(e) => {
                  setfiles((prev) => ({
                    ...prev,
                    image_banner: e.target.files[0],
                  }));
                }}
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div class="mb-4 editor_input_grid">
              <label
                class="block text-gray-700 text-sm font-bold mb-2"
                for="username"
              >
                File
              </label>
              <input
                type="file"
                onChange={(e) => {
                  setfiles((prev) => ({ ...prev, file: e.target.files[0] }));
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
