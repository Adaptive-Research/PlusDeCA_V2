import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import {Card} from "react-bootstrap";
import * as custompagesswitcherdata from "../../../data/Switcher/Custompagesswitcherdata"
import {checkDuplicate, checkEmail} from "../../../data/customlibs/utils";
import {getAllUsersEmail,requestLogin} from "../../../data/customlibs/api";
import {encrypt} from "../../../data/customlibs/hasher.js";
import {remove_linebreaks} from "../../../functions_Dan";


export default function Login() {
    const [email, setEmail] = useState("");
    const [emailMsg, setEmailMsg] = useState("");
    const [password, setPassword] = useState("");
    const [passwordMsg, setPasswordMsg] = useState("");
    const [token, setToken] = useState([]);


    const [reloadLogin, setReloadLogin] = useState(true);


    if (reloadLogin === true) {
        localStorage.removeItem("token");
        localStorage.removeItem("userMail");
        localStorage.removeItem("logged");
        localStorage.removeItem("lastLogin");
        setReloadLogin(false);
    }



    getAllUsersEmail();


    const changeInput = (e, type) => {
        if (type === "email") {
            setEmail(e.target.value);
        } else if (type === "password") {
            setPassword(e.target.value);
        }
    }


    

    


    async function inputsValidation() {
        let emailCheck, passwordCheck,res, temp ;
        if (email === "") {
            setEmailMsg("Email is required");
            emailCheck = false;
        } else if (!checkEmail(email)) {
            setEmailMsg("Email is not valid");
            emailCheck = false;
        } else if (!checkDuplicate(email)) {
            setEmailMsg("Email is not registered");
            emailCheck = false;
        } else {
            setEmailMsg("");
            emailCheck = true;
        }

        if (password === "") {
            setPasswordMsg("Password is required");
            passwordCheck = false;
        } else if (password.length < 8) {
            setPasswordMsg("Password must be at least 8 characters");
            passwordCheck = false;
        } else {
            setPasswordMsg("");
            passwordCheck = true;
        }



        if (emailCheck && passwordCheck) {
            if (checkEmail(email) )
            {
                let values = await requestLogin(email,encrypt(password));
                res = values[0];
                temp = values[1];

                //console.log("res") ;
                //console.log(res) ;
               
                if (res === false) {
                    console.log("res===false") ;
                    localStorage.setItem('logged', JSON.stringify(false));
                }
                else {
                    console.log("User logged");
        
                    temp = remove_linebreaks(temp); // le token contient des retours chariots, on doit les eliminer
    
                    const now = new Date();
    
                    setToken(elem => [token.push(temp)]);
                    localStorage.setItem('token', temp);
                    localStorage.setItem('userMail', email);
                    localStorage.setItem('logged', JSON.stringify(true));
                    localStorage.setItem('lastLogin', now.toString());
    
                    const lastLogin = localStorage.getItem('lastLogin');
                    //console.log("lastLogin");
                    //console.log(lastLogin);
    
                    //console.log("window.location.href") ;
                    window.location.href = `${process.env.PUBLIC_URL}/Journal/Page1`;
                }
            }
        }
    }
        

    


    const handleSubmit = (event) => {
        event.preventDefault();
        try {
            inputsValidation();
        } catch (e) {
            console.log(e);
        } 
    }


    useEffect(() => {
        window.onpopstate = function (event) {
            window.location.href = `${process.env.PUBLIC_URL}/`;
        }
    })

    return (
        <div className="login-img">
            <div className="page">
                <div className="dropdown float-end custom-layout">
                    <div className="demo-icon nav-link icon mt-4 bg-primary"
                         onClick={() => custompagesswitcherdata.Swichermainright()}>
                        <i className="fe fe-settings fa-spin text_primary"></i>
                    </div>
                </div>
                <div className="">
                    <div className="col col-login mx-auto">
                        <div className="text-center">
                            <img
                                src={require("../../../assets/images/brand/logo.png")}
                                className="header-brand-img"
                                alt=""
                            />
                        </div>
                    </div>
                    <div className="container-login100">
                        <div className="wrap-login100 p-0">
                            <Card.Body>
                                <form className="login100-form validate-form">
                                    <span className="login100-form-title">Login</span>
                                    <div className="wrap-input100 validate-input">
                                        <input
                                            className="input100"
                                            type="email"
                                            name="email"
                                            value={email}
                                            placeholder={emailMsg === "" ? "Email" : emailMsg}
                                            onChange={(e) => changeInput(e, "email")}
                                        />
                                        <span className="focus-input100"></span>
                                        <span className="symbol-input100">
                      <i className="zmdi zmdi-email" aria-hidden="true"></i>
                    </span>
                                    </div>
                                    <div className="wrap-input100 validate-input">
                                        <input
                                            className="input100"
                                            type="password"
                                            name="pass"
                                            value={password}
                                            placeholder={passwordMsg === "" ? "Password" : passwordMsg}
                                            onChange={(e) => changeInput(e, "password")}
                                        />
                                        <span className="focus-input100"></span>
                                        <span className="symbol-input100">
                      <i className="zmdi zmdi-lock" aria-hidden="true"></i>
                    </span>
                                    </div>
                                    <div className="text-end pt-1">
                                        <p className="mb-0">
                                            <Link
                                                to={`/react/custompages/forgotPassword/`}
                                                className="text-primary ms-1"
                                            >
                                                Forgot Password?
                                            </Link>
                                        </p>
                                    </div>
                                    <div className="container-login100-form-btn">
                                        <button
                                            onClick={handleSubmit}
                                            className="login100-form-btn btn-primary"
                                        >
                                            Login
                                        </button>
                                    </div>
                                    <div className="text-center pt-3">
                                        <p className="text-dark mb-0">
                                            Not a member?
                                            <Link
                                                to={`${process.env.PUBLIC_URL}/custompages/register/`}
                                                className="text-primary ms-1"
                                            >
                                                Create an Account
                                            </Link>
                                        </p>
                                    </div>
                                </form>
                            </Card.Body>
                            <Card.Footer>
                                <div className="d-flex justify-content-center my-3">
                                    <Link to="#" className="social-login  text-center me-4">
                                        <i className="fa fa-google"></i>
                                    </Link>
                                    <Link to="#" className="social-login  text-center me-4">
                                        <i className="fa fa-facebook"></i>
                                    </Link>
                                    <Link to="#" className="social-login  text-center">
                                        <i className="fa fa-twitter"></i>
                                    </Link>
                                </div>
                            </Card.Footer>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
