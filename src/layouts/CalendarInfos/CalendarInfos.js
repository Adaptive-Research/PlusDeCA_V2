import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Tabs, Tab } from "react-bootstrap";
import  { FindTranslation, getIDFromToken  } from "../../functions_Dan.js" ;

import axios from "axios";



export function CalendarInfos() {

  console.log(process.env) ;

  const storedToken = localStorage.getItem('token') ;
  console.log(storedToken) ;

  const idUser = getIDFromToken(storedToken) ;
  console.log(idUser) ;



  // les titres des champs
  const sMyProfile = "My Profile" ;
  const sSignOut = "Sign out" ;
  const sAccountSettings = "Account Settings" ;
  const sMyMessages = "My Messages" ;
  const sMyMails = "My Mails" ;


  // pour les titres
  const [rightsidebartoogle, setSidebartoogleright] = useState(true);
  const [myProfile, setMyProfile] = useState(sMyProfile) ;
  const [signout, setSignOut] = useState(sSignOut) ;
  const [settings, setSettings] = useState(sAccountSettings) ;
  const [myMessages, setMyMessages] = useState(sMyMessages) ;
  const [myMails, setMyMails] = useState(sMyMails) ;

  // pour le reload des infos
  const [reloadTraductions, setReloadTraductions] = useState(true) ;



  function Outhover(toggle) {
    setSidebartoogleright(!toggle);
    document.querySelector(".sidebar-right").classList.remove("sidebar-open");
  }





 



  


  async function TranslateAll(url, Page,VL) 
  {
    const response = axios.post(url, {
        Submit: 1,
        Page: Page,
        ValueLangue: VL
    }, {
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        }
    }).then( function(response) {
   

    let t = FindTranslation(response.data,Page,VL, sMyProfile) ;
    if (t !== "Not Found")
      setMyProfile(t) ;
    t = FindTranslation(response.data,Page,VL, sSignOut) ;
      if (t !== "Not Found")
        setSignOut(t) ;
    t = FindTranslation(response.data,Page,VL, sAccountSettings) ;
        if (t !== "Not Found")
          setSettings(t) ;
    t = FindTranslation(response.data,Page,VL, sMyMessages) ;
        if (t !== "Not Found")
          setMyMessages(t) ;                 
    t = FindTranslation(response.data,Page,VL, sMyMails) ;
        if (t !== "Not Found")
          setMyMails(t) ;          

    setReloadTraductions(false) ;               
    })
  }


  const url = process.env.REACT_APP_API_SHOW_TRANSLATION_URL ;
  const Page = "RightSidebar" ;
  const VL = "FR" ;

  if (reloadTraductions === true)
    TranslateAll(url,Page,VL) ;

  
  



  return (
    <div className="sidebar sidebar-right sidebar-animate">
      <div className="panel panel-primary card mb-0 shadow-none border-0">
        <div className="tab-menu-heading border-0 d-flex p-3">
          <div className="card-title mb-0">Notifications</div>
          <div className="card-options ms-auto">
            <Link
              to="#"
              className="sidebar-icon text-end float-end me-1"
              onClick={() => Outhover(rightsidebartoogle)}
            >
              <i className="fe fe-x text-white"></i>
            </Link>
          </div>
        </div>
        <div className="panel-body tabs-menu-body latest-tasks p-0 border-0">
          <div className="tabs-menu border-bottom"></div>
          <Tabs
            defaultActiveKey="side1"
            className="nav panel-tabs tab-content rightside flex-nowrap"
            variant=""
          >
            <Tab eventKey="side1"  title="Profile">
              <div className="tab-pane active" id="side1">
                <div className="card-body text-center">
                  <div className="dropdown user-pro-body">
                    <div className="">
                      <img
                        alt="user-img"
                        className="avatar avatar-xl brround mx-auto text-center"
                        src={face6}
                      />
                      <span className="avatar-status profile-status bg-green"></span>
                    </div>
                    <div className="user-info mg-t-20">
                      <h6 className="fw-semibold  mt-2 mb-0">
                        Mintrona Pechon
                      </h6>
                      <span className="mb-0 text-muted fs-12">
                        Premium Member
                      </span>
                    </div>
                  </div>
                </div>
                <Link
                  className="dropdown-item d-flex border-bottom border-top"
                  to={`${process.env.PUBLIC_URL}/pages/profile/`}
                >
                  <div className="d-flex">
                    <i className="fe fe-user me-3 tx-20 text-muted"></i>
                    <div className="pt-1">
                      <h6 className="mb-0">{myProfile}</h6>
                      <p className="tx-12 mb-0 text-muted">
                        Profile Personal information
                      </p>
                    </div>
                  </div>
                </Link>
                <Link
                  className="dropdown-item d-flex border-bottom"
                  to={`${process.env.PUBLIC_URL}/components/defaultChat/`}
                >
                  <div className="d-flex">
                    <i className="fe fe-message-square me-3 tx-20 text-muted"></i>
                    <div className="pt-1">
                      <h6 className="mb-0">{myMessages}</h6>
                      <p className="tx-12 mb-0 text-muted">
                        Person message information
                      </p>
                    </div>
                  </div>
                </Link>
                <Link
                  className="dropdown-item d-flex border-bottom"
                  to={`${process.env.PUBLIC_URL}/pages/mailInbox/`}
                >
                  <div className="d-flex">
                    <i className="fe fe-mail me-3 tx-20 text-muted"></i>
                    <div className="pt-1">
                      <h6 className="mb-0">{myMails}</h6>
                      <p className="tx-12 mb-0 text-muted">
                        Persons mail information
                      </p>
                    </div>
                  </div>
                </Link>
                <Link
                  className="dropdown-item d-flex border-bottom"
                  to={`${process.env.PUBLIC_URL}/pages/editProfile/`}
                >
                  <div className="d-flex">
                    <i className="fe fe-settings me-3 tx-20 text-muted"></i>
                    <div className="pt-1">
                      <h6 className="mb-0">{settings}</h6>
                      <p className="tx-12 mb-0 text-muted">
                        Settings Information
                      </p>
                    </div>
                  </div>
                </Link>
                <Link
                  className="dropdown-item d-flex border-bottom"
                  to={`${process.env.PUBLIC_URL}/custompages/login`}
                >
                  <div className="d-flex">
                    <i className="fe fe-power me-3 tx-20 text-muted"></i>
                    <div className="pt-1">
                      <h6 className="mb-0">{signout}</h6>
                      <p className="tx-12 mb-0 text-muted">Account Signout</p>
                    </div>
                  </div>
                </Link>
              </div>
            </Tab>







            <Tab eventKey="side3" title="Settings">
              <div className="tab-pane" id="side3">
                <Link className="dropdown-item bg-gray-100 pd-y-10" to="#">
                  Account Settings
                </Link>
                <div className="card-body">
                  <div className="form-group mg-b-10">
                    <label className="custom-switch ps-0">
                      <input
                        type="checkbox"
                        name="custom-switch-checkbox"
                        className="custom-switch-input"
                      />
                      <span className="custom-switch-indicator"></span>
                      <span className="custom-switch-description mg-l-10">
                        Updates Automatically
                      </span>
                    </label>
                  </div>
                  <div className="form-group mg-b-10">
                    <label className="custom-switch ps-0">
                      <input
                        type="checkbox"
                        name="custom-switch-checkbox"
                        className="custom-switch-input"
                      />
                      <span className="custom-switch-indicator"></span>
                      <span className="custom-switch-description mg-l-10">
                        Allow Location Map
                      </span>
                    </label>
                  </div>
                  <div className="form-group mg-b-10">
                    <label className="custom-switch ps-0">
                      <input
                        type="checkbox"
                        name="custom-switch-checkbox"
                        className="custom-switch-input"
                      />
                      <span className="custom-switch-indicator"></span>
                      <span className="custom-switch-description mg-l-10">
                        Show Contacts
                      </span>
                    </label>
                  </div>
                  <div className="form-group mg-b-10">
                    <label className="custom-switch ps-0">
                      <input
                        type="checkbox"
                        name="custom-switch-checkbox"
                        className="custom-switch-input"
                      />
                      <span className="custom-switch-indicator"></span>
                      <span className="custom-switch-description mg-l-10">
                        Show Notication
                      </span>
                    </label>
                  </div>
                  <div className="form-group mg-b-10">
                    <label className="custom-switch ps-0">
                      <input
                        type="checkbox"
                        name="custom-switch-checkbox"
                        className="custom-switch-input"
                      />
                      <span className="custom-switch-indicator"></span>
                      <span className="custom-switch-description mg-l-10">
                        Show Tasks Statistics
                      </span>
                    </label>
                  </div>
                  <div className="form-group mg-b-10">
                    <label className="custom-switch ps-0">
                      <input
                        type="checkbox"
                        name="custom-switch-checkbox"
                        className="custom-switch-input"
                      />
                      <span className="custom-switch-indicator"></span>
                      <span className="custom-switch-description mg-l-10">
                        Show Email Notification
                      </span>
                    </label>
                  </div>
                </div>
                <Link className="dropdown-item bg-gray-100 pd-y-10" to="#">
                  General Settings
                </Link>
                <div className="card-body">
                  <div className="form-group mg-b-10">
                    <label className="custom-switch ps-0">
                      <input
                        type="checkbox"
                        name="custom-switch-checkbox"
                        className="custom-switch-input"
                      />
                      <span className="custom-switch-indicator"></span>
                      <span className="custom-switch-description mg-l-10">
                        Show User Online
                      </span>
                    </label>
                  </div>
                  <div className="form-group mg-b-10">
                    <label className="custom-switch ps-0">
                      <input
                        type="checkbox"
                        name="custom-switch-checkbox"
                        className="custom-switch-input"
                      />
                      <span className="custom-switch-indicator"></span>
                      <span className="custom-switch-description mg-l-10">
                        Website Notication
                      </span>
                    </label>
                  </div>
                  <div className="form-group mg-b-10">
                    <label className="custom-switch ps-0">
                      <input
                        type="checkbox"
                        name="custom-switch-checkbox"
                        className="custom-switch-input"
                      />
                      <span className="custom-switch-indicator"></span>
                      <span className="custom-switch-description mg-l-10">
                        Show Recent activity
                      </span>
                    </label>
                  </div>
                  <div className="form-group mg-b-10">
                    <label className="custom-switch ps-0">
                      <input
                        type="checkbox"
                        name="custom-switch-checkbox"
                        className="custom-switch-input"
                      />
                      <span className="custom-switch-indicator"></span>
                      <span className="custom-switch-description mg-l-10">
                        Logout Automatically
                      </span>
                    </label>
                  </div>
                  <div className="form-group mg-b-10">
                    <label className="custom-switch ps-0">
                      <input
                        type="checkbox"
                        name="custom-switch-checkbox"
                        className="custom-switch-input"
                      />
                      <span className="custom-switch-indicator"></span>
                      <span className="custom-switch-description mg-l-10">
                        Allow All Notifications
                      </span>
                    </label>
                  </div>
                </div>
              </div>
            </Tab>
          </Tabs>
        </div>
      </div>
    </div>
  );
}

export default RightSidebar;