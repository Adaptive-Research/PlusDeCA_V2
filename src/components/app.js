import React, { Fragment } from "react";
import Header from "../layouts/Header/Header";
import Sidebar from "../layouts/SideBar/SideBar";
import Footer from "../layouts/Footer/Footer";
import Switcher from "../layouts/Switcher/Switcher";
import RightSidebar from "../layouts/RightSidebar/RightSidebar";
import * as Switcherdata from "../data/Switcher/Switcherdata";
import { Outlet } from "react-router-dom";
import TabToTop from "../layouts/TabToTop/TabToTop";
import Login from "../components/CustomPages/Login/Login" ;


export default function App() {

  console.log(localStorage.getItem("logged"));


  if (localStorage.getItem("logged") === "true"){
    return (
        <Fragment>
          <div className="horizontalMenucontainer">
            <TabToTop />
            <div className="page">
              <div className="page-main">
                <Header />
                <Sidebar />

                <div className="main-content app-content ">
                  <div className="side-app">
                    <div
                        className="main-container container-fluid"
                        onClick={() => {
                          Switcherdata.responsiveSidebarclose();
                          Switcherdata.Horizontalmenudefultclose();
                        }}
                    >
                      <Outlet />
                    </div>
                  </div>
                </div>


              </div>
              <RightSidebar />
              <Switcher />
              <Footer />
            </div>
          </div>
        </Fragment>
    );
  } else {
    return (
        <Login />
    );
  }


}
