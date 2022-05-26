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
import MyOrder from "./Dashboard/MyOrder";
import AddReview from "./Dashboard/AddReview";
import MyProfiles from "./Dashboard/MyProfiles";
import AddProduct from "./Dashboard/AdminPage/AddProduct";
import RequireAdmin from "./Dashboard/AdminPage/RequireAdmin";
import MakeAdmin from "./Dashboard/AdminPage/MakeAdmin";
import ManageAllOrders from "./Dashboard/AdminPage/ManageAllOrders";
import ManageProduct from "./Dashboard/AdminPage/ManageProduct";
import Payment from "./Dashboard/Payment/Payment";
import Error from "./Page/Error";
import Blog from "./Page/Blog";
import Portfolio from "./Page/Portfolio";

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
                <MyProfiles />
              </RequireAuth>
            }
          />
          <Route
            path="myorder"
            element={
              <RequireAuth>
                <MyOrder />
              </RequireAuth>
            }
          />
          <Route
            path="dashboardreview"
            element={
              <RequireAuth>
                <AddReview></AddReview>
              </RequireAuth>
            }
          ></Route>
          {/* admin rout heare */}
          <Route
            path="addproduct"
            element={
              <RequireAdmin>
                <AddProduct></AddProduct>
              </RequireAdmin>
            }
          ></Route>
          <Route
            path="makeadmin"
            element={
              <RequireAdmin>
                <MakeAdmin></MakeAdmin>
              </RequireAdmin>
            }
          ></Route>
          <Route
            path="manageAllOrder"
            element={
              <RequireAdmin>
                <ManageAllOrders></ManageAllOrders>
              </RequireAdmin>
            }
          ></Route>
          <Route
            path="manageProduct"
            element={
              <RequireAdmin>
                <ManageProduct></ManageProduct>
              </RequireAdmin>
            }
          ></Route>
          <Route
            path="payment/:id"
            element={
              <RequireAuth>
                <Payment></Payment>
              </RequireAuth>
            }
          ></Route>
        </Route>
        {/* dashboard route end */}
        <Route path="registation" element={<Registation />} />
        <Route path="login" element={<Login />} />
        <Route path="blog" element={<Blog />} />
        <Route path="portfolio" element={<Portfolio />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer></Footer>

    </div>
  );
}

export default App;
