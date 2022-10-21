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


//import Errorpage401 from "./ErrorPages/ErrorPages/401/401";

export default function App() {


  const lastLogin =  localStorage.getItem('lastLogin') ;
  if (!lastLogin)
    return <Login /> ;




  let LastLogin = new Date(lastLogin) ;
  const Now = new Date() ;

  var Difference_In_Time = Now.getTime() - LastLogin.getTime();
  var Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);
  if (Difference_In_Days >= 1)
  {
    console.log("Difference_In_Days") ;
    console.log(Difference_In_Days) ;
    return <Login /> ;
  }
  else
  {
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
  }
}
