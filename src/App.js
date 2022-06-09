import logo from "./logo.svg";
import "./App.css";
import "./Pages/styles.css";
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

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<About />} />

        <Route path="/admin" element={<Admin />} />
        <Route path="/dashboard" element={<Homenavigation />} />
        <Route path="/listing/:name" element={<Listing />} />
        <Route path="/editor/:name" element={<Editor />} />
        <Route path="/ueditor/:name/:id" element={<UEditor />} />
        <Route path="/global" element={<Global />} />
        <Route path="/menulink/:position" element={<></>} />
        <Route path="/menudropdown/:position/:innerposition" element={<></>} />
        <Route path="/menudropdown/:position/" element={<></>} />
        <Route path="/menudropdownlisting/:position" element={<></>} />
        <Route path="/menulisting" element={<MenuListing />} />
      </Routes>
    </BrowserRouter>
  );
}

function Home() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}

export default App;
