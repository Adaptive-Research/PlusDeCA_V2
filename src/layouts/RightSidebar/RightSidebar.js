import React, {useState,useRef} from "react";
import {Link} from "react-router-dom";
import {Tab, Tabs} from "react-bootstrap";
import face6 from "../../assets/images/faces/6.jpg";
import face9 from "../../assets/images/faces/9.jpg";
import face11 from "../../assets/images/faces/11.jpg";
import face10 from "../../assets/images/faces/10.jpg";
import face12 from "../../assets/images/faces/12.jpg";
import face4 from "../../assets/images/faces/4.jpg";
import face7 from "../../assets/images/faces/7.jpg";
import face2 from "../../assets/images/faces/2.jpg";
import face13 from "../../assets/images/faces/13.jpg";
import face14 from "../../assets/images/faces/14.jpg";
import face15 from "../../assets/images/faces/15.jpg";


import {FindTranslation, getDecryptedData, getIDFromToken, IsAdminOnce} from  "../../data/customlibs/utils" ;
import {PrintLog} from  "../../data/customlibs/utils";





export function RightSidebar() {
    PrintLog("RightSidebar") ;
    const storedToken = localStorage.getItem('token');
    const idUser = getIDFromToken(storedToken);
    const Translations_Text = JSON.parse(localStorage.getItem('Translations_Text')) ;

    //PrintLog(storedToken) ;
    //PrintLog(idUser) ;


    // les titres des champs
    const sPersonalData = "Who am I";
    const sMyCompany = "My Company";
    const sMyGroups = "My Groups";
    const sSignOut = "Sign out";
    const sManageUsers = "Manage Users";
    const sPremiumMember = 'Premium Member';
    const sPersonalInfo = 'Personal information';
    const sCompanyInfo = 'Company information';
    const sGroupsInfo = 'Everything to manage our groups';
    const sAddUser = 'Add a user';
    const sDefineRoles = 'define roles';
    const sAccountSignOut = 'Account Signout';
    const sProfile = 'Profile';
    const sSetting = 'Setting';
    //const navigate = useNavigate();


    const [rightsidebartoogle, setSidebartoogleright] = useState(true);
    const [myCompany, setMyCompany] = useState(sMyCompany);
    const [myGroups, setMyGroups] = useState(sMyGroups);
    const [signout, setSignOut] = useState(sSignOut);
    const [personalData, setPersonalData] = useState(sPersonalData);
    const [manageUsers, setManageUsers] = useState(sManageUsers);
    const [premiumMember, setPremiumMember] = useState(sPremiumMember);
    const [personalInfo, setPersonalInfo] = useState(sPersonalInfo);
    const [companyInfo, setCompanyInfo] = useState(sCompanyInfo);
    const [groupsInfo, setGroupsInfo] = useState(sGroupsInfo);
    const [addUser,setAddUser] = useState(sAddUser);
    const [defineRoles, setDefineRoles] = useState(sDefineRoles);
    const [accountSignout, setAccountSignout] = useState(sAccountSignOut);
    const [profilTab, setProfilTab] = useState(sProfile);
    const [settingTab, setSettingTab] = useState(sSetting);
    const [reloadTraductions, setReloadTraductions] = useState(true) ;

    // pour les droits utilisateurs 
    const EntrepriseUtilisateur = useRef([]) ;


    function Outhover(toggle) {
        setSidebartoogleright(!toggle);
        document.querySelector(".sidebar-right").classList.remove("sidebar-open");
    }

    let userMail = localStorage.getItem("userMail") ;


  

    // pour charger les droits utilisateurs sur les entreprises quand la fenetre est visible   
    
    let chaine = localStorage.getItem('EntrepriseUtilisateur') ;
    if ( chaine !== null) {
        EntrepriseUtilisateur.current = getDecryptedData(chaine) ;
    }
    




    function TranslateAll(data,Page) 
    {
        let t = FindTranslation(data, Page,  sMyCompany);
        if (t !== "Not Found")
            setMyCompany(t);
        t = FindTranslation(data, Page,  sMyGroups);
        if (t !== "Not Found")
            setMyGroups(t);
        t = FindTranslation(data, Page,  sSignOut);
        if (t !== "Not Found")
            setSignOut(t);
        t = FindTranslation(data, Page,  sPersonalData);
        if (t !== "Not Found")
            setPersonalData(t);
        t = FindTranslation(data, Page,  sManageUsers);
        if (t !== "Not Found")
            setManageUsers(t);
        t = FindTranslation(data, Page,  sPremiumMember);
        if (t !== "Not Found")
            setPremiumMember(t);
        t = FindTranslation(data, Page,  sPersonalInfo);
        if (t !== "Not Found")
            setPersonalInfo(t);
        t = FindTranslation(data, Page,  sCompanyInfo);
        if (t !== "Not Found")
            setCompanyInfo(t);
        t = FindTranslation(data, Page,  sGroupsInfo);
        if (t !== "Not Found")
            setGroupsInfo(t);            
        t = FindTranslation(data, Page,  sAddUser);
        if (t !== "Not Found")
            setAddUser(t);
        t = FindTranslation(data, Page,  sDefineRoles);
        if (t !== "Not Found")
            setDefineRoles(t);
        t = FindTranslation(data, Page,  sAccountSignOut);
        if (t !== "Not Found")
            setAccountSignout(t);
        t = FindTranslation(data, Page,  sProfile);
        if (t !== "Not Found")
            setProfilTab(t);
        t = FindTranslation(data, Page,  sSetting);
        if (t !== "Not Found")
            setSettingTab(t);
    }
    



    if (reloadTraductions === true) {
        TranslateAll(Translations_Text,"RightSidebar") ;

        setReloadTraductions(false) ;
    }




    function renderManagedUsers() {
        PrintLog("RightSideBar: renderManagedUsers") ;
        PrintLog(EntrepriseUtilisateur) ;

        if ( IsAdminOnce(EntrepriseUtilisateur.current) )
            return  <Link
                        className="dropdown-item d-flex border-bottom"
                        to={`${process.env.PUBLIC_URL}/pages/ManagedUsers/`}
                    >
                        <div className="d-flex">
                            <i className="fe fe-user-plus me-3 tx-20 text-muted"></i>
                            <div className="pt-1">
                                <h6 className="mb-0">{manageUsers}</h6>
                                <p className="tx-12 mb-0 text-muted">
                                    {addUser}, {defineRoles}
                                </p>
                            </div>
                        </div>
                    </Link>
    }



    
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
                        <Tab eventKey="side1" title={profilTab}>
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
                                                {userMail}
                                            </h6>
                                            <span className="mb-0 text-muted fs-12">
                                                {premiumMember}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <Link
                                    className="dropdown-item d-flex border-bottom"
                                    to={`${process.env.PUBLIC_URL}/pages/editProfile/`}
                                >
                                    <div className="d-flex">
                                        <i className="fe fe-user me-3 tx-20 text-muted"></i>
                                        <div className="pt-1">
                                            <h6 className="mb-0">{personalData}</h6>
                                            <p className="tx-12 mb-0 text-muted">
                                                {personalInfo}
                                            </p>
                                        </div>
                                    </div>
                                </Link>

                                <Link
                                    className="dropdown-item d-flex border-bottom border-top"
                                    to={`${process.env.PUBLIC_URL}/pages/company/`}
                                >
                                    <div className="d-flex">
                                        <i className="fe fe-settings me-3 tx-20 text-muted"></i>
                                        <div className="pt-1">
                                            <h6 className="mb-0">{myCompany}</h6>
                                            <p className="tx-12 mb-0 text-muted">
                                               {companyInfo}
                                            </p>
                                        </div>
                                    </div>
                                </Link>


                                { renderManagedUsers() }
                                

                                <Link
                                    className="dropdown-item d-flex border-bottom border-top"
                                    to={`${process.env.PUBLIC_URL}/pages/mygroups/`}
                                >
                                    <div className="d-flex">
                                        <i className="fe fe-settings me-3 tx-20 text-muted"></i>
                                        <div className="pt-1">
                                            <h6 className="mb-0">{myGroups}</h6>
                                            <p className="tx-12 mb-0 text-muted">
                                               {groupsInfo}
                                            </p>
                                        </div>
                                    </div>
                                </Link>



                                <Link
                                    className="dropdown-item d-flex border-bottom"
                                    onClick={() => {
                                        localStorage.clear();
                                    }}
                                    to={`${process.env.PUBLIC_URL}/Login`}
                                >
                                    <div className="d-flex">
                                        <i className="fe fe-power me-3 tx-20 text-muted"></i>
                                        <div className="pt-1">
                                            <h6 className="mb-0">{signout}</h6>
                                            <p className="tx-12 mb-0 text-muted">{accountSignout}</p>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        </Tab>


                        <Tab eventKey="side2" title="Contacts">
                            <div className="tab-pane" id="side2">
                                <div className="list-group list-group-flush ">
                                    <div className="list-group-item d-flex  align-items-center">
                                        <div className="me-2">
                                            <img
                                                className="avatar avatar-md brround cover-image "
                                                src={face9}
                                                alt=""
                                            />
                                            <span className="avatar-status bg-success rcontacts"></span>
                                        </div>
                                        <div className="">
                                            <div className="fw-semibold">Mozelle Belt</div>
                                            <p className="mb-0 tx-12 text-muted">
                                                mozellebelt@gmail.com
                                            </p>
                                        </div>
                                    </div>
                                    <div className="list-group-item d-flex  align-items-center">
                                        <div className="me-2">
                                            <img
                                                alt=""
                                                className="avatar avatar-md brround cover-image"
                                                src={face11}
                                            />
                                        </div>
                                        <div className="">
                                            <div className="fw-semibold">Florinda Carasco</div>
                                            <p className="mb-0 tx-12 text-muted">
                                                florindacarasco@gmail.com
                                            </p>
                                        </div>
                                    </div>
                                    <div className="list-group-item d-flex  align-items-center">
                                        <div className="me-2">
                                            <img
                                                alt=""
                                                className="avatar avatar-md brround cover-image"
                                                src={face10}
                                            />
                                            <span className="avatar-status bg-success rcontacts"></span>
                                        </div>
                                        <div className="">
                                            <div className="fw-semibold">Alina Bernier</div>
                                            <p className="mb-0 tx-12 text-muted">
                                                alinaaernier@gmail.com
                                            </p>
                                        </div>
                                    </div>
                                    <div className="list-group-item d-flex  align-items-center">
                                        <div className="me-2">
                                            <img
                                                alt=""
                                                className="avatar avatar-md brround cover-image"
                                                src={face2}
                                            />
                                            <span className="avatar-status bg-success rcontacts"></span>
                                        </div>
                                        <div className="">
                                            <div className="fw-semibold">Zula Mclaughin</div>
                                            <p className="mb-0 tx-12 text-muted">
                                                zulamclaughin@gmail.com
                                            </p>
                                        </div>
                                    </div>
                                    <div className="list-group-item d-flex  align-items-center">
                                        <div className="me-2">
                                            <img
                                                alt=""
                                                className="avatar avatar-md brround cover-image"
                                                src={face13}
                                            />
                                        </div>
                                        <div className="">
                                            <div className="fw-semibold">Isidro Heide</div>
                                            <p className="mb-0 tx-12 text-muted">
                                                isidroheide@gmail.com
                                            </p>
                                        </div>
                                    </div>
                                    <div className="list-group-item d-flex  align-items-center">
                                        <div className="me-2">
                                            <img
                                                alt=""
                                                className="avatar avatar-md brround cover-image"
                                                src={face12}
                                            />
                                            <span className="avatar-status bg-success rcontacts"></span>
                                        </div>
                                        <div className="">
                                            <div className="fw-semibold">Mozelle Belt</div>
                                            <p className="mb-0 tx-12 text-muted">
                                                mozellebelt@gmail.com
                                            </p>
                                        </div>
                                    </div>
                                    <div className="list-group-item d-flex  align-items-center">
                                        <div className="me-2">
                                            <img
                                                alt=""
                                                className="avatar avatar-md brround cover-image"
                                                src={face4}
                                            />
                                        </div>
                                        <div className="">
                                            <div className="fw-semibold">Florinda Carasco</div>
                                            <p className="mb-0 tx-12 text-muted">
                                                florindacarasco@gmail.com
                                            </p>
                                        </div>
                                    </div>
                                    <div className="list-group-item d-flex  align-items-center">
                                        <div className="me-2">
                                            <img
                                                alt=""
                                                className="avatar avatar-md brround cover-image"
                                                src={face7}
                                            />
                                        </div>
                                        <div className="">
                                            <div className="fw-semibold">Alina Bernier</div>
                                            <p className="mb-0 tx-12 text-muted">
                                                alinabernier@gmail.com
                                            </p>
                                        </div>
                                    </div>
                                    <div className="list-group-item d-flex  align-items-center">
                                        <div className="me-2">
                                            <img
                                                alt=""
                                                className="avatar avatar-md brround cover-image"
                                                src={face2}
                                            />
                                        </div>
                                        <div className="">
                                            <div className="fw-semibold">Zula Mclaughin</div>
                                            <p className="mb-0 tx-12 text-muted">
                                                zulamclaughin@gmail.com
                                            </p>
                                        </div>
                                    </div>
                                    <div className="list-group-item d-flex  align-items-center">
                                        <div className="me-2">
                                            <img
                                                alt=""
                                                className="avatar avatar-md brround cover-image"
                                                src={face14}
                                            />
                                            <span className="avatar-status bg-success rcontacts"></span>
                                        </div>
                                        <div className="">
                                            <div className="fw-semibold">Isidro Heide</div>
                                            <p className="mb-0 tx-12 text-muted">
                                                isidroheide@gmail.com
                                            </p>
                                        </div>
                                    </div>
                                    <div className="list-group-item d-flex  align-items-center">
                                        <div className="me-2">
                                            <img
                                                alt=""
                                                className="avatar avatar-md brround cover-image"
                                                src={face11}
                                            />
                                        </div>
                                        <div className="">
                                            <div className="fw-semibold">Florinda Carasco</div>
                                            <p className="mb-0 tx-12 text-muted">
                                                florindacarasco@gmail.com
                                            </p>
                                        </div>
                                    </div>
                                    <div className="list-group-item d-flex  align-items-center">
                                        <div className="me-2">
                                            <img
                                                alt=""
                                                className="avatar avatar-md brround cover-image"
                                                src={face9}
                                            />
                                        </div>
                                        <div className="">
                                            <div className="fw-semibold">Alina Bernier</div>
                                            <p className="mb-0 tx-12 text-muted">
                                                alinabernier@gmail.com
                                            </p>
                                        </div>
                                    </div>
                                    <div className="list-group-item d-flex  align-items-center">
                                        <div className="me-2">
                                            <img
                                                alt=""
                                                className="avatar avatar-md brround cover-image"
                                                src={face15}
                                            />
                                            <span className="avatar-status bg-success rcontacts"></span>
                                        </div>
                                        <div className="">
                                            <div className="fw-semibold">Zula Mclaughin</div>
                                            <p className="mb-0 tx-12 text-muted">
                                                zulamclaughin@gmail.com
                                            </p>
                                        </div>
                                    </div>
                                    <div className="list-group-item d-flex  align-items-center">
                                        <div className="me-2">
                                            <img
                                                alt=""
                                                className="avatar avatar-md brround cover-image"
                                                src={face4}
                                            />
                                        </div>
                                        <div className="">
                                            <div className="fw-semibold">Isidro Heide</div>
                                            <p className="mb-0 tx-12 text-muted">
                                                isidroheide@gmail.com
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Tab>


                        <Tab eventKey="side3" title={settingTab}>
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
