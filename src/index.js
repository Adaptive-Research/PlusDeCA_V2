import React, {Fragment} from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {PrintLog} from "./data/customlibs/utils";

import Switcherlayout from "./components/switcherlayout";
import App from "./components/app";
import Custompages from "./components/custompages";
import Dashboard from "./components/pages/Dashboard/Dashboard";
import Journal from "./components/pages/Journal/Journal";
import ArticleList from "./components/pages/Articles/ArticleList";
import SearchGroups from "./components/pages/SearchGroups/SearchGroups";
import GroupList from "./components/pages/Groups/GroupList";
import ShowGroup from "./components/pages/SearchGroups/ShowGroup";
import ShowProfile from "./components/pages/Profile/ShowProfile"; 
import FormationAvailableList from "./components/pages/FormationsAvailables/FormationAvailableList";
import FormationList from "./components/pages/Formations/FormationList";
import ContactList from "./components/pages/BusinessCard/ContactList";
import InterviewList from "./components/pages/Interviews/InterviewList";
import InterviewQuestions from "./components/pages/Interviews/InterviewQuestions";
import CompanyList from "./components/pages/Company/CompanyList";
import EditProfile from "./components/pages/Profile/EditProfile"; 
import ManagedUsersList from "./components/pages/ManagedUsers/ManagedUsersList";
import Login from "./components/CustomPages/Login/Login";

/*
const Switcherlayout = React.lazy(() => import("./components/switcherlayout"));
const App = React.lazy(() => import("./components/app"));
const Custompages = React.lazy(() => import("./components/custompages"));



//Dashboardimport {BrowserRouter, Route, Routes} from "react-router-dom";
const Dashboard = React.lazy(() => import("./components/pages/Dashboard/Dashboard"));
//Journal
const Journal = React.lazy(() => import("./components/pages/Journal/Journal"));

//Article
const ArticleList = React.lazy(() => import("./components/pages/Articles/ArticleList"));

//Group
const SearchGroups = React.lazy(() => import("./components/pages/SearchGroups/SearchGroups"));
const GroupList = React.lazy(() => import("./components/pages/Groups/GroupList"));
const ShowGroup = React.lazy(() => import("./components/pages/SearchGroups/ShowGroup"));

//Formation
const FormationList = React.lazy(() => import("./components/pages/Formations/FormationList"));
const FormationAvailableList =  React.lazy(() => import("./components/pages/FormationsAvailables/FormationAvailableList"));

//Contact
const ContactList = React.lazy(() => import("./components/pages/BusinessCard/ContactList"));

//Interview
const InterviewList = React.lazy(() => import("./components/pages/Interviews/InterviewList"));
const InterviewQuestions = React.lazy(() => import("./components/pages/Interviews/InterviewQuestions"));


//pages
const CompanyList = React.lazy(() => import("./components/pages/Company/CompanyList"));

const EditProfile = React.lazy(() => import("./components/pages/Profile/EditProfile"));
const ShowProfile = React.lazy(() => import("./components/pages/Profile/ShowProfile"));
const ManagedUsersList = React.lazy(() => import("./components/pages/ManagedUsers/ManagedUsersList"));
*/

//custom Pages
//const Login = React.lazy(() => import("./components/CustomPages/Login/Login"));
const Register = React.lazy(() => import("./components/CustomPages/Register/Register"));
const ForgotPassword = React.lazy(() => import("./components/CustomPages/ForgotPassword/ForgotPassword"));
//const LockScreen = React.lazy(() => import("./components/CustomPages/LockScreen/LockScreen"));


const FullCalendar = React.lazy(() => import("./components/Components/FullCalendar/FullCalendar"));

//Icons
const FontAwesome = React.lazy(() => import("./components/Icons/FontAwesomes/FontAwesomes"));
const MaterialDesignIcons = React.lazy(() => import("./components/Icons/MaterialDesignIcons/MaterialDesignIcons"));
const SimpleLineIcons = React.lazy(() => import("./components/Icons/SimplelineIcons/SimplelineIcons"));
const FeatherIcons = React.lazy(() => import("./components/Icons/FeatherIcons/FeatherIcons"));
const IonicIcons = React.lazy(() => import("./components/Icons/IonicIcons/IonicIcons"));
const FlagIcons = React.lazy(() => import("./components/Icons/FlagsIcons/FlagsIcons"));
const Pe7Icons = React.lazy(() => import("./components/Icons/Pe7Icons/Pe7Icons"));
const ThemifyIcons = React.lazy(() => import("./components/Icons/ThemifyIcons/ThemifyIcons"));
const TypiconsIcons = React.lazy(() => import("./components/Icons/TypiconsIcons/TypiconsIcons"));
const WeatherIcons = React.lazy(() => import("./components/Icons/WeatherIcons/WeatherIcons"));

//Errorpages
const Errorpage400 = React.lazy(() => import("./components/ErrorPages/ErrorPages/400/400"));

const Loaderimg = () => {
    return (
        <div id="global-loader">
            <img
                src={require("./assets/images/loader.svg").default}
                className="loader-img"
                alt="Loader"
            />
        </div>
    );
};


const Root = () => {
    PrintLog("PUBLIC_URL") ;
    PrintLog(process.env.PUBLIC_URL) ;

    return (
        <Fragment>
            <BrowserRouter>
                <React.Suspense fallback={Loaderimg()}>
                    <Routes>

                       
                        <Route
                            path={`${process.env.PUBLIC_URL}/`}
                            element={<App />}
                        >
                     
                            <Route index element={<Login/>}/>

                            <Route
                                path={`${process.env.PUBLIC_URL}/dashboard`}
                                element={<Dashboard/>}
                            />

                            <Route
                                path={`${process.env.PUBLIC_URL}/Journal/Page1`}
                                element={<Journal/>}
                            />


                            <Route
                                path={`${process.env.PUBLIC_URL}/pages/company`}
                                element={<CompanyList/>}
                            />

                            <Route
                                path={`${process.env.PUBLIC_URL}/pages/ManagedUsers`}
                                element={<ManagedUsersList/>}
                            />
                            <Route
                                path={`${process.env.PUBLIC_URL}/pages/editProfile`}
                                element={<EditProfile/>}
                            />
                            <Route
                                path={`${process.env.PUBLIC_URL}/pages/showProfile`}
                                element={<ShowProfile/>}
                            />

                            <Route
                                path={`${process.env.PUBLIC_URL}/components/fullCalendar`}
                                element={<FullCalendar/>}
                            />

                            <Route
                                path={`${process.env.PUBLIC_URL}/MesInterviews`}
                                element={<InterviewList/>}
                            />
                            <Route
                                path={`${process.env.PUBLIC_URL}/QuestionsForInterview`}
                                element={<InterviewQuestions/>}
                            />

                            <Route
                                path={`${process.env.PUBLIC_URL}/MesArticles`}
                                element={<ArticleList/>}
                            />

                            <Route
                                path={`${process.env.PUBLIC_URL}/SearchGroups`}
                                element={<SearchGroups/>}
                            />

                            <Route
                                path={`${process.env.PUBLIC_URL}/MesGroupes`}
                                element={<GroupList/>}
                            />

                            <Route
                                path={`${process.env.PUBLIC_URL}/VoirGroup/:id`}
                                element={<ShowGroup/>}
                            />

                            <Route
                                path={`${process.env.PUBLIC_URL}/MesFormations`}
                                element={<FormationList/>}
                            />
                            <Route
                                path={`${process.env.PUBLIC_URL}/Formations`}
                                element={<FormationAvailableList/>}
                            />

                            <Route
                                path={`${process.env.PUBLIC_URL}/Contacts`}
                                element={<ContactList/>}
                            />


                            <Route
                                path={`${process.env.PUBLIC_URL}/Prospection`}
                                element={<ContactList/>}
                            />



                           


                           
                            <Route>
                                <Route
                                    path={`${process.env.PUBLIC_URL}/icon/fontAwesome`}
                                    element={<FontAwesome />}
                                />

                                <Route
                                    path={`${process.env.PUBLIC_URL}/icon/materialDesignIcons`}
                                    element={<MaterialDesignIcons />}
                                />

                                <Route
                                    path={`${process.env.PUBLIC_URL}/icon/simpleLineIcons`}
                                    element={<SimpleLineIcons />}
                                />

                                <Route
                                    path={`${process.env.PUBLIC_URL}/icon/featherIcons`}
                                    element={<FeatherIcons />}
                                />

                                <Route
                                    path={`${process.env.PUBLIC_URL}/icon/ionicIcons`}
                                    element={<IonicIcons />}
                                />

                                <Route
                                    path={`${process.env.PUBLIC_URL}/icon/flagIcons`}
                                    element={<FlagIcons />}
                                />

                                <Route
                                    path={`${process.env.PUBLIC_URL}/icon/pe7Icons`}
                                    element={<Pe7Icons />}
                                />

                                <Route
                                    path={`${process.env.PUBLIC_URL}/icon/themifyIcons`}
                                    element={<ThemifyIcons />}
                                />

                                <Route
                                    path={`${process.env.PUBLIC_URL}/icon/typiconsIcons`}
                                    element={<TypiconsIcons />}
                                />

                                <Route
                                    path={`${process.env.PUBLIC_URL}/icon/weatherIcons`}
                                    element={<WeatherIcons />}
                                />

                                <Route
                                    path={`${process.env.PUBLIC_URL}/icon/typiconsIcons`}
                                    element={<TypiconsIcons />}
                                />
                            </Route>

                        </Route>           




                        <Route
                            path={`${process.env.PUBLIC_URL}/pages/themeStyle`}
                            element={<Switcherlayout/>}
                        />

                        <Route
                            path={`${process.env.PUBLIC_URL}/`}
                            element={<Custompages />}
                        >
                        
                            
                            <Route
                                path={`${process.env.PUBLIC_URL}/Login`}
                                element={<Login/>}
                            />
                            <Route
                                path={`${process.env.PUBLIC_URL}/register`}
                                element={<Register/>}
                            />
                            <Route
                                path={`${process.env.PUBLIC_URL}/forgotPassword`}
                                element={<ForgotPassword/>}
                            />          
                        

                            <Route path="*" element={<Errorpage400/>}/>
                            
                        </Route>    



                    </Routes>
                </React.Suspense>
            </BrowserRouter>
        </Fragment>


    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Root/>);
