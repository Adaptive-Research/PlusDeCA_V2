import React, {useState} from "react";
import {Card} from "react-bootstrap";
import {Link} from "react-router-dom";
import * as custompagesswitcherdata from "../../../data/Switcher/Custompagesswitcherdata"
import axios from "axios";
import {encrypt} from "../../../data/customlibs/hasher";
import {checkDuplicate, checkEmail} from "../../../data/customlibs/utils";

export default function Register() {
    const [email, setEmail] = useState("");
    const [emailMsg, setEmailMsg] = useState("");
    const [password, setPassword] = useState("");
    const [passwordMsg, setPasswordMsg] = useState("");
    const [registerMsg, setRegisterMsg] = useState("Registration");


    const toLog = () => {
        window.location.href = "https://plusdeca.fr";
    }


    const changeInput = (e, type) => {
        if (type === "email") {
            setEmail(e.target.value);
        } else if (type === "password") {
            setPassword(e.target.value);
        }
    }

    const requestRegister = async (mail, pass) => {
        const url = process.env.REACT_APP_API_SIGNUP_URL;

        if (checkEmail(email)) {
            const response = await axios.post(url, {
                Submit: 1,
                Email: mail,
                Password: encrypt(pass)
            }, {
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                }
            });

            console.log(response.data);

            if (response.data.includes("ERROR:")) {
                setEmailMsg("Wrong email or password");
                setPasswordMsg("Wrong email or password");

            } else {
                console.log("User created");
                console.log(response.data);
                setRegisterMsg("User created");
            }
        }

    }


    const inputValidation = () => {
        let emailCheck, passwordCheck;

        if (!checkEmail(email)) {
            setEmailMsg("Email is required and must be valid");
            emailCheck = false;
        } else if (email.length !== 0 && checkEmail(email) && !checkDuplicate(email)) {
            setEmailMsg("");
            emailCheck = true;
        } else if (checkDuplicate(email)) {
            setEmailMsg("Email is already used");
            emailCheck = false;
        }


        if (password.length < 8) {
            setPasswordMsg("Password must be at least 8 characters long");
            passwordCheck = false;
        } else {
            setPasswordMsg("");
            passwordCheck = true;
        }

        if (emailCheck && passwordCheck) {
            requestRegister(email, password);
        }


    }


    const handleSubmit = (event) => {
        event.preventDefault();
        try {
            inputValidation();
        } catch (e) {
            console.log(e);
        } finally {
            console.log(`user signup attempt with ${email} and ${password}`);
            setEmail("");
            setPassword("");
            console.log(`new values are ${email} and ${password}`);
        }

    }


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
                                    <span className="login100-form-title">{registerMsg}</span>

                                    <div
                                        className="wrap-input100 validate-input"

                                    >
                                        <input
                                            className="input100"
                                            type="text"
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
                                    <div
                                        className="wrap-input100 validate-input"

                                    >
                                        <input
                                            className="input100"
                                            type="password"
                                            name="pass"
                                            password="true"
                                            value={password}
                                            placeholder={passwordMsg === "" ? "Password" : passwordMsg}
                                            onChange={(e) => changeInput(e, "password")}
                                        />
                                        <span className="focus-input100"></span>
                                        <span className="symbol-input100">
                      <i className="zmdi zmdi-lock" aria-hidden="true"></i>
                    </span>
                                    </div>
                                    {/*                                   <label className="custom-control custom-checkbox mt-4">
                                        <input type="checkbox" className="custom-control-input"/>
                                        <span className="custom-control-label">
                      Agree the
                      <Link to={`${process.env.PUBLIC_URL}/pages/terms/`}>
                        terms and policy
                      </Link>
                    </span>
                                    </label>*/}
                                    <div className="container-login100-form-btn">
                                        <button
                                            className="login100-form-btn btn-primary"
                                            onClick={handleSubmit}
                                        >
                                            Register
                                        </button>

                                    </div>
                                    <div className="text-center pt-3">
                                        <p className="text-dark mb-0">
                                            Already have account?
                                            <Link
                                                to="/react"
                                                className="text-primary ms-1"
                                            >
                                                Sign In
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
