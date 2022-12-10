import React , { useState } from "react";
//import * as formelement from "../../../data/Form/formelement/formelement";
//import * as editprofile from "../../../data/Pages/editprofile/editprofile";
import {useNavigate} from "react-router";
import {Col,Row,Card,Form,Button,FormGroup} from "react-bootstrap";

import  { FindTranslation, getIDFromToken } from "../../../functions_Dan.js" ;
import {getProfile,SaveProfile,SaveLanguage} from "../../../data/customlibs/api";
import ReactFlagsSelect from "react-flags-select";







export default function EditProfile(props) {

  const storedToken = localStorage.getItem('token') ;
  const idUser = getIDFromToken(storedToken) ;
  const AllTranslations = JSON.parse(localStorage.getItem('AllTranslations')) ;

  //console.log(storedToken) ;  
  //console.log(idUser) ;


  const sLanguage = "Language" ;
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
  const [profile, setProfile] = useState(sProfile) ;
  const [editProfile, setEditProfile] = useState(sEditProfile) ;
  const [aboutMe, setAboutMe] = useState(sAboutMe) ;
  const [contactNumber, setContactNumber] = useState(sContactNumber) ;
  const [emailAddress, setEmailAddress] = useState(sEmailAddress) ;
  const [firstName, setFirstName] = useState(sFirstName) ;
  const [lastName, setLastName] = useState(sLastName) ;
  const [visibility, setVisibility] = useState(sVisibility) ;
  const [language, setLanguage] = useState(sLanguage) ;

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
  const [reloadInfos, setReloadInfos] = useState(true) ;
  const [reloadTraductions, setReloadTraductions] = useState(true) ;



 


  function TranslateAll(data,Page){
    console.log(data) ;

    let t = FindTranslation(data,Page, sProfile) ;
    if (t !== "Not Found")
      setProfile(t) ;

    t = FindTranslation(data,Page, sEditProfile) ;
    if (t !== "Not Found")
      setEditProfile(t) ;

    t = FindTranslation(data,Page, sAboutMe) ;
    if (t !== "Not Found")
      setAboutMe(t) ;

    t = FindTranslation(data,Page, sContactNumber) ;
    if (t !== "Not Found")
      setContactNumber(t) ;

    t = FindTranslation(data,Page, sEmailAddress) ;
    if (t !== "Not Found")
      setEmailAddress(t) ;

    t = FindTranslation(data,Page, sFirstName) ;
    if (t !== "Not Found")
      setFirstName(t) ;

    t = FindTranslation(data,Page, sLastName) ;
    if (t !== "Not Found")
      setLastName(t) ;

    t = FindTranslation(data,Page, sVisibility) ;
    if (t !== "Not Found")
      setVisibility(t) ;
  }


 

  if (reloadTraductions === true) {
    TranslateAll(AllTranslations,"EditProfile") ;
    setReloadTraductions(false) ;
  }
  




  function RenderAfterLoad(response){
    console.log("response.data") ;
    console.log(response.data) ;
    let pos = response.data.indexOf("ERROR") ;
    if (pos !== 0)
    {
      setPrenom(response.data[0].Prenom) ;
      setNom(response.data[0].Nom) ;
      setEmail(response.data[0].Email) ;
      setTelephone(response.data[0].Telephone) ;
      setBio(response.data[0].Bio) ;

      setBioVisible(false) ;
      if (response.data[0].BioVisible === "1")
        setBioVisible(true) ;

      setTelephoneVisible(false) ;
      if (response.data[0].TelephoneVisible === "1")
        setTelephoneVisible(true) ;

      setEmailVisible(false) ;
      if (response.data[0].EmailVisible === "1")
        setEmailVisible(true) ;
    }

  }

  
 
  if (reloadInfos === true) {
    getProfile(storedToken,idUser,RenderAfterLoad) ;
    setReloadInfos(false) ;
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
      navigate(`${process.env.PUBLIC_URL}/pages/profile`)
    } catch (e) {
      console.log(e);
    } finally {
      console.log("Login attempt");
    }
  }


  const handleCancel = (event) => {
    event.preventDefault();
    console.log("Cancel") ;
    setReloadInfos(true) ;
    navigate(-1);
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

  }



  return (
    <div>
      <div className="page-header">
        <div>
          <h1 className="page-title">{editProfile}</h1>
        </div>
      </div>

      <Row>

        <Col lg={12} xl={8} md={12} sm={12}>
          <Card>
            <Card.Header>
              <Card.Title as="h3">{profile}</Card.Title>
            </Card.Header>
            <Card.Body>
              <Row>
                <Col lg={6} md={12}>
                  <FormGroup>
                    <label htmlFor="exampleInputname">{firstName}</label>
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
                    <label htmlFor="exampleInputname1">{lastName}</label>
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
                <label htmlFor="exampleInputEmail1">{emailAddress}</label>
                <input
                  className="form-control"
                  type="email"
                  value={email}
                  onChange={(e) =>  setEmail(e.target.value) }
                />
              </FormGroup>

              <FormGroup className="mt-2">
                <label htmlFor="exampleInputnumber">{contactNumber}</label>
                 <input
                  className="form-control"
                  type="text"
                  value={telephone}
                  onChange={(e) =>  setTelephone(e.target.value)  }
                />
              </FormGroup>


              <FormGroup>
                <Form.Label className="form-label">{aboutMe}</Form.Label>
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
              <Card.Title>{visibility}</Card.Title>
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
                  {emailAddress}
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
                  {contactNumber}
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
                  {aboutMe}
                  </span>
                </label>
              </div>

             
             
            </Card.Body>

          </Card>

          <Card className="profile-edit">
            <Card.Header>
              <Card.Title>{language}</Card.Title>
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

    </div>
  );
}
