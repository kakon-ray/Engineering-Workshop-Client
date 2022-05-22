import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Component/Navbar";
import Home from "./Page/Home";
import Footer from "./Component/Footer";
import { Routes, Route, Link } from "react-router-dom";
import PurchesPage from "./Page/PurchesPage";
import Registation from "./Page/Registaion";
import Login from "./Page/Login";
import RequireAuth from "./Component/RequireAuth";
import Dashboard from "./Dashboard/Dashboard";
import DashboardSidebar from "./Dashboard/DashboardSidebar";
import MyItem from "./Dashboard/MyItem";

import DashboardReview from "./Dashboard/DashboardReview";

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>

      <Routes>
        <Route path="/" element={<Home />} />

        <Route
          path="purshes/:id"
          element={
            <RequireAuth>
              <PurchesPage />
            </RequireAuth>
          }
        />
        {/* dashboard route start */}
        <Route
          path="dashboard"
          element={
            <RequireAuth>
              <Dashboard />
            </RequireAuth>
          }
        >
          <Route
            index
            element={
              <RequireAuth>
                <MyItem />
              </RequireAuth>
            }
          />
          <Route
            path="dashboardreview"
            element={<DashboardReview></DashboardReview>}
          ></Route>
        </Route>
        {/* dashboard route end */}
        <Route path="registation" element={<Registation />} />
        <Route path="login" element={<Login />} />
      </Routes>
      <Footer></Footer>

      <div className="sidebutton">
        <button
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasExample"
          aria-controls="offcanvasExample"
          className="inline-block font-bold text-center mr-2 px-6 py-2 border border-gray-500 text-purple-200 font-medium text-xs leading-tight  bg-primary hover:bg-red-600 hover:text-neutral-200 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
        >
          DASHBOARD
        </button>
      </div>
      <DashboardSidebar />
    </div>
  );
}

export default App;
