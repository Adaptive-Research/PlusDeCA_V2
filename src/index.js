import React, { Fragment } from "react";
import ReactDOM from "react-dom/client";


import "./index.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import UnderConstruction from "./components/pages/UnderConstruction/UnderConstruction";
import LockScreen from "./components/CustomPages/LockScreen/LockScreen";
import Errorpage401 from "./components/ErrorPages/ErrorPages/401/401";
import Errorpage403 from "./components/ErrorPages/ErrorPages/403/403";
import Errorpage500 from "./components/ErrorPages/ErrorPages/500/500";
import Errorpage503 from "./components/ErrorPages/ErrorPages/503/503";
import Errorpage400 from "./components/ErrorPages/ErrorPages/400/400";
const Login = React.lazy(() => import("./components/CustomPages/Login/Login"));
const Register = React.lazy(() => import("./components/CustomPages/Register/Register"));
const ForgotPassword = React.lazy(() => import("./components/CustomPages/ForgotPassword/ForgotPassword"));



const Switcherlayout = React.lazy(() => import("./components/switcherlayout"));
//App
const App = React.lazy(() => import("./components/app"));
const Custompages = React.lazy(() => import("./components/custompages"));

//Dashboard
const Dashboard = React.lazy(() => import("./components/Dashboard/Dashboard"));
//Widgets
const Widgets = React.lazy(() => import("./components/Widgets/Widgets"));


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
        <React.Suspense fallback={<Loaderimg />}>
          <Routes>
            <Route
              path={`${process.env.PUBLIC_URL}/`}
              element={<Login />}
            />
            <Route
              path={`${process.env.PUBLIC_URL}/custompages/register`}
              element={<Register />}
            />
            <Route
              path={`${process.env.PUBLIC_URL}/custompages/forgotPassword`}
              element={<ForgotPassword />}
            />
            

            <Route
              path={`${process.env.PUBLIC_URL}/custompages/errorpages/errorpage401`}
              element={<Errorpage401 />}
            />
            <Route
              path={`${process.env.PUBLIC_URL}/custompages/errorpages/errorpage403`}
              element={<Errorpage403 />}
            />
            <Route
              path={`${process.env.PUBLIC_URL}/custompages/errorpages/errorpage500`}
              element={<Errorpage500 />}
            />
            <Route
              path={`${process.env.PUBLIC_URL}/custompages/errorpages/errorpage503`}
              element={<Errorpage503 />}
            />
            <Route path="*" element={<Errorpage400 />} />

          </Routes>
        </React.Suspense>
      </BrowserRouter>
    </Fragment>
  )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Root />);