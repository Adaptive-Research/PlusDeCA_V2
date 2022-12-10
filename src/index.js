import React, {Fragment} from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import {BrowserRouter, Route, Routes} from "react-router-dom";

const Switcherlayout = React.lazy(() => import("./components/switcherlayout"));
//App
const App = React.lazy(() => import("./components/app"));


//Dashboard
const Dashboard = React.lazy(() => import("./components/pages/Dashboard/Dashboard"));
//Journal
const Journal = React.lazy(() => import("./components/pages/Journal/Journal"));


//Article
const ArticleList = React.lazy(() => import("./components/pages/Articles/ArticleList"));

//Formation
const FormationList = React.lazy(() => import("./components/pages/Formations/FormationList"));
const FormationAvailableList =  React.lazy(() => import("./components/pages/FormationsAvailables/FormationAvailableList"));

//Contact
const ContactList = React.lazy(() => import("./components/pages/Contacts/ContactList"));


//Interview
const InterviewList = React.lazy(() => import("./components/pages/Interviews/InterviewList"));
const InterviewQuestions = React.lazy(() => import("./components/pages/Interviews/InterviewQuestions"));


//pages
const Profile = React.lazy(() => import("./components/pages/Profile/Profile"));
const EditProfile = React.lazy(() => import("./components/pages/Profile/EditProfile"));

//custom Pages
const Login = React.lazy(() => import("./components/CustomPages/Login/Login"));
const Register = React.lazy(() => import("./components/CustomPages/Register/Register"));
const ForgotPassword = React.lazy(() => import("./components/CustomPages/ForgotPassword/ForgotPassword"));
//const LockScreen = React.lazy(() => import("./components/CustomPages/LockScreen/LockScreen"));



const FullCalendar = React.lazy(() => import("./components/Components/FullCalendar/FullCalendar"));


const Custompages = React.lazy(() => import("./components/custompages"));







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

    return (
        <Fragment>
            <BrowserRouter>
                <React.Suspense fallback={Loaderimg()}>
                    <Routes>

                        <Route
                            path={`${process.env.PUBLIC_URL}/`}
                            element={<Custompages/>}
                        >
                            <Route index element={<Login/>}/>
                            <Route
                                path={`${process.env.PUBLIC_URL}/Login`}
                                element={<Login/>}
                            />
                            <Route
                                path={`${process.env.PUBLIC_URL}/custompages/register`}
                                element={<Register/>}
                            />
                            <Route
                                path={`${process.env.PUBLIC_URL}/custompages/forgotPassword`}
                                element={<ForgotPassword/>}
                            />
                        </Route>


                        <Route
                            path={`${process.env.PUBLIC_URL}/`}
                            element={<App/>}
                        >


                            <Route
                                path={`${process.env.PUBLIC_URL}/dashboard`}
                                element={<Dashboard/>}
                            />
                            <Route
                                path={`${process.env.PUBLIC_URL}/Journal/Page1`}
                                element={<Journal/>}
                            />

                            <Route
                                path={`${process.env.PUBLIC_URL}/pages/profile`}
                                element={<Profile/>}
                            />

                            <Route
                                path={`${process.env.PUBLIC_URL}/pages/editProfile`}
                                element={<EditProfile/>}
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

                        </Route>


                           




                        <Route
                            path={`${process.env.PUBLIC_URL}/pages/themeStyle`}
                            element={<Switcherlayout/>}
                        />


                        <Route path="*" element={<Errorpage400/>}/>
                    </Routes>
                </React.Suspense>
            </BrowserRouter>
        </Fragment>


    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Root/>);
