import React , { useState, useRef,useCallback } from "react";
//import * as formelement from "../../../data/Form/formelement/formelement";
//import * as editprofile from "../../../data/Pages/editprofile/editprofile";
import {useNavigate} from "react-router";
import {Col,Row,Card,Form,Button,FormGroup} from "react-bootstrap";

import  { FindTranslation, getIDFromToken } from  "../../../data/customlibs/utils" ;
import {getProfile,SaveProfile,SaveLanguage,getTranslations_Text} from "../../../data/customlibs/api";
import ReactFlagsSelect from "react-flags-select";




export default function EditProfile(props) {

  
  const compteur  = useRef(0) ;
  compteur.current = compteur.current+1 ;
  console.log("\n\nEditProfile:" + compteur.current) ;

  const storedToken = localStorage.getItem('token') ;
  const idUser = getIDFromToken(storedToken) ;
  const Profile =  localStorage.getItem('Profile') ;
  
  //console.log(storedToken) ;  
  //console.log(idUser) ;


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
    console.log("EditProfile TranslateAll") ;
    let t ;
    //console.log(data) ;

    t = FindTranslation(data,Page, sTitle) ;
    if (t !== "Not Found")
      title.current = t ;

    t = FindTranslation(data,Page, sProfile) ;
    if (t !== "Not Found")
      profile.current = t ;
  

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
  }


 
  function InitEnglishTraductions() {
    console.log("InitEnglishTraductions: " + compteur.current) ;
   
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
  }


  function LoadTranslations() {
    InitEnglishTraductions() ;
    Translations_Text.current = JSON.parse(localStorage.getItem('Translations_Text')) ;
    TranslateAll(Translations_Text.current,"EditProfile") ;
  }

  




  function InitInfosFromProfile(){
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

  

 
  if (reloadInfos.current === true) {
    console.log("reloadInfos.current === true") ;
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
      console.log("Save") ;

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
      console.log(e);
    } finally {
      console.log("Login attempt");
    }
  }


  const handleCancel = (event) => {
    event.preventDefault();
    console.log("Cancel") ;
    reloadInfos.current= true ;
    navigate(-1);
  }

  const handleChangePassword = (event) => {
    event.preventDefault();
    console.log("handleChangePassword") ;
  }

  const handleAddPhoto = (event) => {
    event.preventDefault();
    console.log("handleAddPhoto") ;
  }



  function SelectFlag(code) {
      console.log("SelectFlag") ;
      setSelectedFlag(code) ;

      // le composant transmet un code pays et pas une langue
      // il faut faire une modification
      let VL = code ;
      if (code === 'GB')
        VL = "EN" ;

      SaveLanguage(storedToken,VL) ;
      localStorage.setItem('ValueLangue', VL);
      ValueLangue.current = VL ;

      console.log("SelectFlag: ValueLangue " + ValueLangue.current) ;

  }


  


  function Render() {
    console.log("Render: " + compteur.current) ;
    console.log("\n\n") ;
    return (
      <>
        <div className="page-header">
          <div>
            <h1 className="page-title"> {title.current} </h1>
          </div>
          <div>
            <Button onClick={handleAddPhoto} variant="primary" style={{marginRight: "15px"}}>
                  Add a photo
            </Button>
            <Button onClick={handleChangePassword} variant="primary">
                    Change Password
            </Button>
          </div>
        </div>

        
        <Row>
          <Col lg={12} xl={8} md={12} sm={12}>

        
            <Card>
              <Card.Header>
                <Card.Title as="h3">{profile.current}</Card.Title>
              </Card.Header>
              <Card.Body>
                <Row>
                  <Col lg={6} md={12}>
                    <FormGroup>
                      <label htmlFor="exampleInputname">{firstName.current}</label>
                      <input
                        className="form-control"
                        type="text"
                        value={prenom}
                        onChange={(e) =>  setPrenom(e.target.value) }
                      />
                    </FormGroup>
                  </Col>
                  <Col lg={6} md={12}>
                    <FormGroup>
                      <label htmlFor="exampleInputname1">{lastName.current}</label>
                      <input
                        className="form-control"
                        type="text"
                        value={nom}
                        onChange={(e) =>  setNom(e.target.value) }
                      />
                    </FormGroup>
                  </Col>
                </Row>
                <FormGroup className="mt-2">
                  <label htmlFor="exampleInputEmail1">{emailAddress.current}</label>
                  <input
                    className="form-control"
                    type="email"
                    value={email}
                    onChange={(e) =>  setEmail(e.target.value) }
                  />
                </FormGroup>

                <FormGroup className="mt-2">
                  <label htmlFor="exampleInputnumber">{contactNumber.current}</label>
                  <input
                    className="form-control"
                    type="text"
                    value={telephone}
                    onChange={(e) =>  setTelephone(e.target.value)  }
                  />
                </FormGroup>


                <FormGroup>
                  <Form.Label className="form-label">{aboutMe.current}</Form.Label>
                  <textarea
                    className="form-control"
                    rows="6"
                    value={bio}
                    onChange={(e) =>  setBio(e.target.value) }
                  ></textarea>
                </FormGroup>


              </Card.Body>

              <Card.Footer className="text-end">
              <Button onClick={handleCancel} variant="secondary" style={{marginRight: "15px"}}>
                  Cancel
              </Button>
              <Button onClick={handleSubmit} variant="primary">
                      Save
              </Button>
              </Card.Footer>
            </Card>
          </Col>
    


          <Col lg={12} xl={4} md={12} sm={12}>


            <Card className="profile-edit">
              <Card.Header>
                <Card.Title>{visibility.current}</Card.Title>
              </Card.Header>
              <Card.Body>

                

                <div className="form-group mg-b-10">
                  <label className="custom-switch ps-0">
                    <input
                      type="checkbox"
                      name="EmailVisible"
                      className="custom-switch-input"
                      checked={emailVisible}
                      onChange={(e) => setEmailVisible(!emailVisible)}
                    />
                    <span className="custom-switch-indicator"></span>
                    <span className="custom-switch-description mg-l-10">
                    {emailAddress.current}
                    </span>
                  </label>
                </div>

                <div className="form-group mg-b-10">
                  <label className="custom-switch ps-0">
                    <input
                      type="checkbox"
                      name="TelephoneVisible"
                      className="custom-switch-input"
                      checked={telephoneVisible}
                      onChange={(e) => setTelephoneVisible(!telephoneVisible)}
                    />
                    <span className="custom-switch-indicator"></span>
                    <span className="custom-switch-description mg-l-10">
                    {contactNumber.current}
                    </span>
                  </label>
                </div>

                <div className="form-group mg-b-10">
                  <label className="custom-switch ps-0">
                    <input
                      type="checkbox"
                      name="BioVisible"
                      className="custom-switch-input"
                      checked={bioVisible}
                      onChange={(e) => setBioVisible(!bioVisible)}
                    />
                    <span className="custom-switch-indicator"></span>
                    <span className="custom-switch-description mg-l-10">
                    {aboutMe.current}
                    </span>
                  </label>
                </div>
                
              
              
              </Card.Body>

            </Card>
            

            <Card className="profile-edit">
              <Card.Header>
                <Card.Title>{language.current}</Card.Title>
              </Card.Header>
              <Card.Body>
                <ReactFlagsSelect
                  countries={["FR", "GB",  "DE", "ES","IT"]}
                  customLabels={{ FR: "FR", GB: "EN",  DE: "DE", ES:"ES", IT: "IT" }}
                  placeholder="Select Language"
                  selected={selectedFlag}
                  onSelect={(code) => SelectFlag(code)}
                />

              </Card.Body>

            </Card>


          </Col>

        </Row>
    

      </>
    );
  }



  return Render() ;
}
