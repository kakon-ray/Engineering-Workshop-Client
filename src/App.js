import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Component/Navbar";
import Home from "./Page/Home";
import Footer from "./Component/Footer";
import { Routes, Route, Link } from "react-router-dom";
import PurchesPage from "./Page/PurchesPage";
import Registation from "./Page/Registaion";

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="purches" element={<PurchesPage />} />
        <Route path="registation" element={<Registation />} />
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
