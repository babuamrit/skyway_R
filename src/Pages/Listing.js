import React from "react";
import { useParams } from "react-router-dom";
import Sidebar from "../Components/Sidebar";
import post from "./../http/post";
import STRINGS from "../strings.json";
import { useNavigate } from "react-router-dom";

const Listing = () => {
  let params = useParams();
  const navigate = useNavigate();
  const [data, setdata] = React.useState([]);
  React.useEffect(() => {
    const formdata = new FormData();
    formdata.append(
      "data",
      JSON.stringify({
        key: "type",
        value: params.name,
      })
    );
    post(STRINGS.apiurl + "getbyparam", formdata).then((result) => {
      setdata(result.result);
    });
  }, [params.name]);

  const update = async () => {
    const formdata = new FormData();
    formdata.append(
      "data",
      JSON.stringify({
        key: "type",
        value: params.name,
      })
    );
    post(STRINGS.apiurl + "getbyparam", formdata).then((result) => {
      setdata(result.result);
    });
  };
  return (
    <Sidebar>
      <div className="dashboard_list_container_box">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => {
            navigate("/editor/" + params.name);
          }}
        >
          Add new Item
        </button>
      </div>

      <table className="table-fixed editor-table">
        <thead>
          <th className="editor-table-head">image</th>
          <th className="editor-table-head">name</th>
          <th className="editor-table-head">edit</th>
          <th className="editor-table-head">delete</th>
        </thead>
        <tbody>
          {data.map((value, index) => (
            <tr key={index}>
              <td className="editor-table-body">
                <img
                  src={STRINGS.static + value.entry1}
                  className="editor-table-body-image"
                />
              </td>
              <td className="editor-table-body">{value.entry2}</td>
              <td className="editor-table-body">
                <button
                  onClick={() => {
                    navigate("/ueditor/" + params.name + "/" + value.id);
                  }}
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                >
                  edit
                </button>
              </td>
              <td className="editor-table-body">
                <button
                  className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                  onClick={() => {
                    const formdata = new FormData();
                    formdata.append("data", JSON.stringify({ id: value.id }));
                    post(STRINGS.apiurl + "delete", formdata).then((result) => {
                      update();
                    });
                  }}
                >
                  delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Sidebar>
  );
};

export default Listing;
