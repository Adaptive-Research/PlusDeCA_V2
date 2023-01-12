import React, {useEffect, useState,useRef} from "react";
import {Link} from "react-router-dom";
import {Card} from "react-bootstrap";
import {checkDuplicate, checkEmail,remove_linebreaks} from "../../../data/customlibs/utils";
import {getAllUsersEmail,requestLogin} from "../../../data/customlibs/api";
import {encrypt} from "../../../data/customlibs/hasher.js";



import {getTranslations_Text, getTranslations_SelectBox,getLanguage,getProfile,getActivitiesForUser,getCompaniesForUser} from "../../../data/customlibs/api";
import {getEntrepriseUtilisateur,getEventsForUser} from "../../../data/customlibs/api";
import {getUtilisateurPayant} from "../../../data/customlibs/api_daniel";

import  {getIDFromToken} from  "../../../data/customlibs/utils" ;
import {searchCompanies} from "../../../data/customlibs/api";
import {PrintLog} from  "../../../data/customlibs/utils";





export default function Login() {
    const [email, setEmail] = useState("");
    const [emailMsg, setEmailMsg] = useState("");
    const [password, setPassword] = useState("");
    const [passwordMsg, setPasswordMsg] = useState("");



    const downloaded_Translations_Text = useRef(false) ;
    const downloaded_Translations_SelectBox = useRef(false) ;
    const downloaded_EntrepriseUtilisateur = useRef(false) ;
    const downloaded_userCompanies = useRef(false) ;
    const downloaded_userActivities = useRef(false) ;
    const downloaded_CompanyList = useRef(false) ;
    const downloaded_userEvents = useRef(false) ;
    const downloaded_Profile = useRef(false) ;
    const downloaded_userAccess = useRef(false) ;


    const [reloadLogin, setReloadLogin] = useState(true);


    

    if (reloadLogin === true) {
        localStorage.removeItem("token");
        localStorage.removeItem("userMail");
        localStorage.removeItem("logged");
        localStorage.removeItem("lastLogin");
        localStorage.removeItem("ValueLangue") ;
        localStorage.removeItem("Translations_Text") ;
        localStorage.removeItem("Translations_SelectBox") ;
        localStorage.removeItem("EntrepriseUtilisateur");
        localStorage.removeItem("userCompanies");
        localStorage.removeItem("userActivities");
        localStorage.removeItem("userAccess");
        localStorage.removeItem("userEvents");
        localStorage.removeItem("CompanyList");
        localStorage.removeItem("Profile");



        getAllUsersEmail();
        setReloadLogin(false);
    }






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
        } 
        else {
            setPasswordMsg("");
            passwordCheck = true;
        }


        function RenderAfterLoad(variable) {
            if (variable === "Translations_Text")
                downloaded_Translations_Text.current = true ;

            if (variable === "Translations_SelectBox")
                downloaded_Translations_SelectBox.current = true ;    
            
            if (variable === 'EntrepriseUtilisateur')
                downloaded_EntrepriseUtilisateur.current = true ;    

            if (variable === 'userCompanies')
                downloaded_userCompanies.current = true ;                    

            if (variable === 'userActivities')
                downloaded_userActivities.current = true ;    

            if (variable === 'CompanyList')
                downloaded_CompanyList.current = true ;    

            if (variable === 'Profile')
                downloaded_Profile.current = true ;             

            if (variable === 'userEvents')
                downloaded_userEvents.current = true ;            
            
            if (variable === 'userAccess')
                downloaded_userAccess.current = true ;                         


            if (downloaded_Translations_Text.current && downloaded_Translations_SelectBox.current && downloaded_EntrepriseUtilisateur.current &&
                downloaded_userCompanies.current && downloaded_userActivities.current && downloaded_CompanyList.current && downloaded_Profile.current
                && downloaded_userEvents.current  && downloaded_userAccess.current )
            {
                // window.location.href comme la fonction navigate utilisent le server side routing 
                let url = `${process.env.PUBLIC_URL}/Journal/Page1` ;
                window.location.href= url ;
            }
        }


        function LoadTranslations(variable) {
            PrintLog("Login LoadTranslations")
            
            const VL = localStorage.getItem('ValueLangue') ;
            PrintLog("ValueLangue: " +VL) ;

            getTranslations_Text("Translations_Text",VL,RenderAfterLoad) ;
            getTranslations_SelectBox("Translations_SelectBox",VL,RenderAfterLoad) ;

          
        } 


        if (emailCheck && passwordCheck) {
            if (checkEmail(email) )
            {
                let values = await requestLogin(email,encrypt(password));
                res = values[0];
                temp = values[1];

                if (res === false) {
                    PrintLog("Password or User unknown") ;
                }
                else {
                    PrintLog("User logged");
        
                    var storedToken  = remove_linebreaks(temp); // le token contient des retours chariots, on doit les eliminer
    
                    const now = new Date();
    
                    localStorage.setItem('token', storedToken);
                    localStorage.setItem('userMail', email);
                    localStorage.setItem('lastLogin', now.toString());
                    
                    storedToken = temp ;
                    const idUser = getIDFromToken(storedToken) ;

                    getLanguage( "ValueLangue",storedToken,LoadTranslations) ;  // C'est pour charger la langue et les traductions

                    getProfile("Profile",storedToken,idUser,RenderAfterLoad) ;                      // Ce sont les infos personnelles
                    getUtilisateurPayant("userAccess",storedToken,RenderAfterLoad)
                    getEventsForUser("userEvents",storedToken,RenderAfterLoad) ;
                    getEntrepriseUtilisateur('EntrepriseUtilisateur',storedToken,RenderAfterLoad) ; // Ce sont les droits d'acces et les infos de l'utilisateur pour les enteprises avec lesquelles il a un lien 
                    getCompaniesForUser("userCompanies",storedToken, idUser,RenderAfterLoad) ;      // Ce sont toutes les boites auxquelles est associe l'utilisateur
                    getActivitiesForUser("userActivities", storedToken,idUser,RenderAfterLoad) ;    // Ce sont toutes les activites des boites de l'utilisateur
                    searchCompanies("CompanyList",storedToken,"",RenderAfterLoad) ;                 // C'est pour la selectbox de la fenetre linking avec une boite 
                  
                }
            }
        }
    }
        

    


    const handleSubmit = (event) => {
        event.preventDefault();
        try {
            inputsValidation();
        } catch (e) {
            PrintLog(e);
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
                                                to={`${process.env.PUBLIC_URL}/forgotPassword`}
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
                                                to={`${process.env.PUBLIC_URL}/register`}
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
