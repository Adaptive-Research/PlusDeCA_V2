import React , { useState, useRef,useCallback } from "react";
import {useNavigate} from "react-router";
import {Col,Row,Card,Form,Button,FormGroup} from "react-bootstrap";
import  { FindTranslation, getIDFromToken } from  "../../../data/customlibs/utils" ;
import {SaveProfile,SaveLanguage} from "../../../data/customlibs/api";
import ReactFlagsSelect from "react-flags-select";
import {PrintLog} from  "../../../data/customlibs/utils";
import "./profileStyles.css";
import Banner from './banner.jfif';
import ProfilePic from './profile.jfif';


export default function ShowProfile(props) {

  
  const compteur  = useRef(0) ;
  compteur.current = compteur.current+1 ;
  PrintLog("\n\nEditProfile:" + compteur.current) ;

  const storedToken = localStorage.getItem('token') ;
  const idUser = getIDFromToken(storedToken) ;



  const lsProfile =  localStorage.getItem('Profile') ;
  let Profile = null ;
  if (lsProfile !== undefined)
    Profile = JSON.parse(lsProfile) ;
  
  //PrintLog(storedToken) ;  
  //PrintLog(idUser) ;






  const sLanguage = "Language" ;
  const sTitle = "Who am I" ;
  const sProfile = "Profile" ;
  const sEditProfile = "Edit Profile" ;
  const sAboutMe = "About Me" ;
  const sContactNumber = "Contact Number" ;
  const sEmailAddress = "Email Address" ;
  const sFirstName = "First Name" ;
  const sLastName = "Last Name" ;
  const sVisibility = "Visible by everyone" ;
  const sAddPhotoBtn = "Add a photo";
  const sChangePasswordBtn = "Change Password";
  const sSaveBtn = "Save";
  const sCancelBtn = "Cancel";

  const navigate = useNavigate() ;

  // pour les titres
  const title = useRef(sTitle) ;
  const profile = useRef(sProfile) ;
  const editProfile = useRef(sEditProfile) ;
  const aboutMe = useRef(sAboutMe) ;
  const contactNumber = useRef(sContactNumber) ;
  const emailAddress = useRef(sEmailAddress) ;
  const firstName = useRef(sFirstName) ;
  const lastName = useRef(sLastName) ;
  const visibility = useRef(sVisibility) ;
  const language = useRef(sLanguage) ;
  const addPhotoBtn = useRef(sAddPhotoBtn);
  const changePassWordBtn = useRef(sChangePasswordBtn);
  const saveBtn = useRef(sSaveBtn);
  const cancelBtn = useRef(sCancelBtn);
  const Translations_Text = useRef(null) ;
  const ValueLangue = useRef("") ;

  

  // pour le contenu des champs
  const [prenom, setPrenom] = useState("") ;
  const [nom, setNom] = useState("") ;
  const [email, setEmail] = useState("") ;
  const [emailVisible, setEmailVisible] = useState(false) ;
  const [telephone, setTelephone] = useState("") ;
  const [telephoneVisible, setTelephoneVisible] = useState(false) ;
  const [bio, setBio] = useState("") ;
  const [bioVisible, setBioVisible] = useState(false) ;
  const [selectedFlag, setSelectedFlag] = useState("");


  // pour le reload des infos
  const reloadInfos = useRef(true) ;





 


  function TranslateAll(data,Page){
    PrintLog("EditProfile TranslateAll") ;
    let t ;
    //PrintLog(data) ;

    t = FindTranslation(data,Page, sTitle) ;
    if (t !== "Not Found")
      title.current = t ;

    t = FindTranslation(data,Page, sProfile) ;
    if (t !== "Not Found")
      profile.current = t ;
  
    t = FindTranslation(data,Page, sAddPhotoBtn) ;
    if (t !== "Not Found")
      addPhotoBtn.current = t ;
  
    t = FindTranslation(data,Page, sChangePasswordBtn) ;
    if (t !== "Not Found")
      changePassWordBtn.current = t ;

    t = FindTranslation(data,Page, sEditProfile) ;
    if (t !== "Not Found")
      editProfile.current = t ;

    t = FindTranslation(data,Page, sLanguage) ;
    if (t !== "Not Found")
      language.current = t ;      

    t = FindTranslation(data,Page, sAboutMe) ;
    if (t !== "Not Found")
      aboutMe.current = t ;

    t = FindTranslation(data,Page, sContactNumber) ;
    if (t !== "Not Found")
      contactNumber.current = t ;

    t = FindTranslation(data,Page, sEmailAddress) ;
    if (t !== "Not Found")
      emailAddress.current = t ;

    t = FindTranslation(data,Page, sFirstName) ;
    if (t !== "Not Found")
      firstName.current = t ;

    t = FindTranslation(data,Page, sLastName) ;
    if (t !== "Not Found")
      lastName.current = t ;

    t = FindTranslation(data,Page, sVisibility) ;
    if (t !== "Not Found")
      visibility.current = t ;

    t = FindTranslation(data,Page, sSaveBtn) ;
    if (t !== "Not Found")
      saveBtn.current = t ;

    t = FindTranslation(data,Page, sCancelBtn) ;
    if (t !== "Not Found")
      cancelBtn.current = t ;
  }


 
  function InitEnglishTraductions() {
    PrintLog("InitEnglishTraductions: " + compteur.current) ;
   
    title.current = sTitle ;
    profile.current = sProfile ;
    language.current =sLanguage ;
    editProfile.current = sEditProfile ;
    aboutMe.current = sAboutMe ;
    contactNumber.current = sContactNumber ;
    emailAddress.current = sEmailAddress ;
    firstName.current = sFirstName ;
    lastName.current = sLastName ;
    visibility.current = sVisibility ;
    changePassWordBtn.current = sChangePasswordBtn;
    addPhotoBtn.current = sAddPhotoBtn;
  }


  function LoadTranslations() {
    InitEnglishTraductions() ;
    Translations_Text.current = JSON.parse(localStorage.getItem('Translations_Text')) ;
    TranslateAll(Translations_Text.current,"EditProfile") ;
  }

  function InitInfosFromProfile(){
    if (Profile !== null)
    {
      setPrenom(Profile.Prenom) ;
      setNom(Profile.Nom) ;
      setEmail(Profile.Email) ;
      setTelephone(Profile.Telephone) ;
      setBio(Profile.Bio) ;

      setBioVisible(false) ;
      if (Profile.BioVisible === "1")
        setBioVisible(true) ;

      setTelephoneVisible(false) ;
      if (Profile.TelephoneVisible === "1")
        setTelephoneVisible(true) ;

      setEmailVisible(false) ;
      if (Profile.EmailVisible === "1")
        setEmailVisible(true) ;
    }
  }

  

 
  if (reloadInfos.current === true) {
    PrintLog("reloadInfos.current === true") ;
    reloadInfos.current = false ;



    ValueLangue.current = localStorage.getItem('ValueLangue') ;
  
    if (ValueLangue.current === 'EN') 
      setSelectedFlag('GB') ;
    else
      setSelectedFlag(ValueLangue.current) ;
    
    InitInfosFromProfile()


    LoadTranslations() ;  
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    try {
      PrintLog("Save") ;

      let bv = 0 ;
      if (bioVisible === true)
        bv = 1 ;
      let tv = 0 ;
      if (telephoneVisible === true)
        tv = 1 ;
      let ev = 0 ;
      if (emailVisible === true)
        ev = 1 ;
      SaveProfile(storedToken,prenom,nom,email,ev,telephone,tv,bio,bv) ;
      navigate(`${process.env.PUBLIC_URL}/pages/editProfile`)
    } catch (e) {
      PrintLog(e);
    } finally {
      PrintLog("Login attempt");
    }
  }


  const handleCancel = (event) => {
    event.preventDefault();
    PrintLog("Cancel") ;
    reloadInfos.current= true ;
    navigate(-1);
  }

  const handleChangePassword = (event) => {
    event.preventDefault();
    PrintLog("handleChangePassword") ;
  }

  const handleAddPhoto = (event) => {
    event.preventDefault();
    PrintLog("handleAddPhoto") ;
  }



  function SelectFlag(code) {
      PrintLog("SelectFlag") ;
      setSelectedFlag(code) ;

      // le composant transmet un code pays et pas une langue
      // il faut faire une modification
      let VL = code ;
      if (code === 'GB')
        VL = "EN" ;

      SaveLanguage(storedToken,VL) ;
      localStorage.setItem('ValueLangue', VL);
      ValueLangue.current = VL ;

      PrintLog("SelectFlag: ValueLangue " + ValueLangue.current) ;

  }

  function Render() {
    PrintLog("Render: " + compteur.current) ;
    PrintLog("\n\n") ;
    return (
      <>
          <div className="row mt-5">
            {/* <div className="col-lg-1 col-md-1 col-sm-0"></div> */}
            <div className="firstBlock mx-auto">
              <div className="col-12 bannerImg p-5" style={{ background: `url(${Banner}) no-repeat center center fixed`, WebkitBackgroundSize: "cover", MozBackgroundSize: "cover", OBackgroundSize: "cover", backgroundSize: "cover", }}>
                
                  <img src={ProfilePic} alt="" className="imageProfile" />

              </div>
              <div className="col-12 bg-white pt-5 secondDiv pb-5 mb-5">
                <h3 className="mt-5 pt-5">Surname Name</h3>
                <span className="text-normal">Function ... </span>
                <div className="mt-4 mb-3">
                  <button className="btn btn-primary rounded-5 text-bold btnBorder">Mes objectifs</button>
                  &nbsp; &nbsp;
                  <button className="btn btn-white rounded-5 text-blue btnBorder">Ajouter une section au profil</button>
                  &nbsp; &nbsp;
                  <button className="btn btn-white rounded-5 text-gray btnBorder">Plus</button>
                </div>
                <div className="row">
                  <div className="rowMini p-5 rounded-3 mx-auto">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius doloribus in ratione sunt quas nam sequi voluptatem</p>
                    <h5>Commencer</h5>
                  </div>
                  <div className="rowMini p-5 rounded-3 mx-auto">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius doloribus in ratione sunt quas nam sequi voluptatem</p>
                    <h5>Commencer</h5>
                  </div>
                </div>
              </div>
              <div className="col-12 bg-white pt-5 rounded-4">
                <p className="text-justify">Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page, le texte définitif venant remplacer le faux-texte dès qu'il est prêt ou que la mise en page est achevée. Généralement, on utilise un texte en faux latin, le Lorem ipsum ou Lipsum.Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page, le texte définitif venant remplacer le faux-texte dès qu'il est prêt ou que la mise en page est achevée. Généralement, on utilise un texte en faux latin, le Lorem ipsum ou Lipsum.Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page, le texte définitif venant remplacer le faux-texte dès qu'il est prêt ou que la mise en page est achevée. Généralement, on utilise un texte en faux latin, le Lorem ipsum ou Lipsum.Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page, le texte définitif venant remplacer le faux-texte dès qu'il est prêt ou que la mise en page est achevée. Généralement, on utilise un texte en faux latin, le Lorem ipsum ou Lipsum.Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page, le texte définitif venant remplacer le faux-texte dès qu'il est prêt ou que la mise en page est achevée. Généralement, on utilise un texte en faux latin, le Lorem ipsum ou Lipsum.</p>
              </div>
            </div>
            <div className="secondBlock mx-auto">
              <div className=" bg-white rounded-4 p-4 mb-5 text-center">
                <h4>Modifier le profil public</h4>
                <hr />
                <h4>Ajouter un profil...</h4>
              </div>
              <div className=" bg-white rounded-4 pt-5">
                <h1 className="text-center">Actu</h1>
                <p className="text-justify m-4">Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page, le texte définitif venant remplacer le faux-texte dès qu'il est prêt ou que la mise en page est achevée. Généralement, on utilise un texte en faux latin, le Lorem ipsum ou Lipsum.Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page, le texte définitif venant remplacer le faux-texte dès qu'il est prêt ou que la mise en page est achevée. Généralement, on utilise un texte en faux latin, le Lorem ipsum ou Lipsum. Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page, le texte définitif venant remplacer le faux-texte dès qu'il est prêt ou que la mise en page est achevée. Généralement, on utilise un texte en faux latin, le Lorem ipsum ou Lipsum.Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page, le texte définitif venant remplacer le faux-texte dès qu'il est prêt ou que la mise en page est achevée. Généralement, on utilise un texte en faux latin, le Lorem ipsum ou Lipsum.</p>
              </div>
            </div>
            {/* <div className="col-lg-1 col-md-1 col-sm-0"></div> */}
          </div>

      </>
    );
  }



  return Render() ;
}
