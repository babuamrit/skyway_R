import logo from "./logo.svg";
import "./App.css";
import "./Pages/styles.css";
import "./homepage.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Admin from "./Pages/Admin";
import Sidebar from "./Components/Sidebar";
import Homenavigation from "./Pages/Homenavigation";
import Listing from "./Pages/Listing";
import { Editor } from "./Pages/Editor";
import UEditor from "./Pages/UEditor";
import Global from "./Pages/Global";
import MenuListing from "./Pages/MenuListing";
import ALink from "./Pages/ALink";
import CDropdown from "./Pages/CDropdown";
import Dlisting from "./Pages/Dlisting";
import Home from "./Pages/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/admin" element={<Admin />} />
        <Route path="/dashboard" element={<Homenavigation />} />
        <Route path="/listing/:name" element={<Listing />} />
        <Route path="/editor/:name" element={<Editor />} />
        <Route path="/ueditor/:name/:id" element={<UEditor />} />
        <Route path="/global" element={<Global />} />
        <Route path="/menulink/:position" element={<></>} />
        <Route
          path="/menueditor/:action/:type/:index1/:index2"
          element={<ALink />}
        />
        <Route path="/menudropdown/:position/" element={<></>} />
        <Route path="/dlisting/:index" element={<Dlisting />} />
        <Route path="/menulisting" element={<MenuListing />} />
        <Route path="/createdrop" element={<CDropdown />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
