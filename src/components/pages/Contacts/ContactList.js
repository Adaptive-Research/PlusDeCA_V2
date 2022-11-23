import React, { useState,useRef,useEffect} from "react";
import {Card, Col, Row, Tab, Tabs} from "react-bootstrap";
import {FindTranslation,getIDFromToken} from "../../../functions_Dan.js";
import {getUserContacts} from "../../../data/customlibs/api";
import CardContact from "./CardContact" ;
import ModalEditContact from "./ModalEditContact" ;


    
  



export default function ContactList() {
    console.log("ContactList") ;

    // on recupere les infos sur le token et l'utilisateur
    const storedToken = localStorage.getItem('token') ;
    const idUser = getIDFromToken(storedToken) ;

   


    // pour le Rerender
    const [compteur,setCompteur] = useState(0) ;
    

    // pour l'affichage de la fenetre modale
    const [showEditContact, setShowEditContact] = useState(false) ;

    // pour le ForceRender
    const downloaded_Contacts = useRef(false) ;

    // pour 
    const [modeEdit,setModeEdit]= useState("") ;
    const [idAncestor,setIdAncestor] = useState("") ;
    const [title, setTitle] = useState("");
    const [category, setCategory] = useState("");
    const [text, setText] = useState("");
    const [html, setHtml] = useState("<p>Hey this <strong>test</strong> rocks 😀</p>");
    const [photo, setPhoto] = useState("");

    // pour le reload des infos
    const reloadInfos = useRef(true) ;

   

    

    // recuperation des informations au depart
    if (reloadInfos.current === true)
    {
        console.log("reloadInfos") ;
        getUserContacts("userContacts",storedToken,RenderAfterLoad) ;
            
        reloadInfos.current = false ;
    }




    function RenderAfterLoad(variable) {
        console.log("RenderAfterLoad") ;
        //console.log("downloaded_Contacts.current") ;
        //console.log(downloaded_Contacts.current) ;
        
        if (variable === "userContacts")
            downloaded_Contacts.current = true ;


    
        if (downloaded_Contacts.current === true)
            setCompteur(compteur+1) ; 
    
        downloaded_Contacts.current = false ;      
    }
  





    // Callbacks pour la fenetre ModalEditContact
    // il y en a 3
    // - ModalEditContactClose
    // - SendContactData
    // - ForceRenderContact



    // C'est le callback appele quand on ferme ModalEditContact
    function ModalEditContactClose()
    {
        setShowEditContact(false) ;
    }



    // C'est le callback appele quand on clique sur + ou Edit dans CardCompany, il sert a replir la fenetre ModalEditCompany
    function SendContactData(ShowWindow, Contact) {
        //console.log("SendCompanyData")
        if (Contact === null)
        {
            setModeEdit("Add") ;
            setIdAncestor("") ;
            setTitle("") ;
            setCategory("1") ;
            setText("") ;
            setHtml("") ;
            setPhoto("") ;
        }
        else
        {
            setModeEdit("Edit") ;
            console.log("Mode Edit") ;
            //console.log("Contact") ;
            //console.log(Contact) ;

            setIdAncestor(Contact.idAncestor) ;
            setTitle(Contact.Contact_Title) ;
            setCategory(Contact.Contact_Category) ;
            setText(Contact.Contact_Text) ;
            setHtml(Contact.Contact_Html) ;
            setPhoto(Contact.Contact_Image) ;
        }
        


        if (ShowWindow === "false")
            setShowEditContact(false) ;
        else
            setShowEditContact(true) ;
    }    


    function ForceRenderContact() {
        
        //console.log("ForceRenderContact") ;
        setShowEditContact(false) ;

        getUserContacts("userContacts",storedToken, RenderAfterLoad) ;
    }


















    





    // Separate drafts from published Contacts
    const renderContacts = (TypeContact) => {
        const Contacts = JSON.parse(localStorage.getItem("userContacts"));

        if (Contacts !== null)
        {
            //console.log("Contacts") ;
            //console.log(Contacts);

            return Contacts.map((Ligne) => {
                //console.log("Ligne.id: "+Ligne.id) ;
                if  (TypeContact === "Brouillon") {
                    if (Ligne.iscurrent === "1" && Ligne.isValidated === "0" && Ligne.isPublished === "0") 
                        return <Col md={4}  key={Ligne.id}> 
                                    <CardContact
                                        Contact={Ligne}
                                        TypeContact={TypeContact}
                                        SendContactData={SendContactData}  
                                        ForceRenderContact = {ForceRenderContact}
                                    /> 
                                </Col> ;
                }
                else if(TypeContact === "Valide"){
                    if(Ligne.iscurrent === "1" && Ligne.isValidated === "1" && Ligne.isPublished === "0"){
                        return <Col md={4}  key={Ligne.id}> 
                                    <CardContact
                                        key={Ligne.id}
                                        Contact={Ligne}
                                        TypeContact={TypeContact}
                                        SendContactData={SendContactData}  
                                        ForceRenderContact = {ForceRenderContact}
                                    /> 
                                </Col> ;
                    }
                }
            })
        }
        else
            return "" ;
    }


   






    return (
        <div>

            <div className="page-header" >
                <div>
                    <h1 className="page-title">Contacts</h1>
                </div>
                <div className="ms-auto pageheader-btn">
                    <button className='btn btn-primary' onClick={() => {SendContactData(true, null) ;}}>
                        <span> <i className="fe fe-plus"></i>&nbsp;</span>
                        Ajouter un contact
                    </button>

                </div>
            </div>

            <Row id="user-profile">
                <Col lg={12}>
                    <Card className=" bg-transparent shadow-none border-0">
                        <div className="border-top ">
                            <div className="wideget-user-tab">
                                <div className="tab-menu-heading">
                                    <div className="tabs-menu1 ">


                                        <ModalEditContact
                                            Render={compteur}
                                            show={showEditContact} 
                                            SendCloseMessage={ModalEditContactClose}  
                                            ForceRenderContact={ForceRenderContact}
                                            ModeEdit={modeEdit}
                                            idAncestor={idAncestor}
                                            Title={title} 
                                            Category = {category} 
                                            Html= {html}
                                            Text={text}
                                            Photo = {photo}
                                        />


                                        <Tabs
                                            variant="Tabs"
                                            defaultActiveKey="Brouillon"
                                            id=" tab-51"
                                            className="tab-content tabesbody "
                                        >
                                            <Tab eventKey="Brouillon" title="Réseau PlusDeCA">
                                                <div className="tab-pane " id="tab-61">
                                                    <Row className="row-cards ">
                                                        {renderContacts("Brouillon")}
                                                    </Row>
                                                </div>
                                            </Tab>


                                            <Tab eventKey="Valide" title="Cartes de visite">
                                                <div className="tab-pane profiletab show">
                                                    <Row className="row-cards ">
                                                        {renderContacts("Valide")}
                                                    </Row>
                                                </div>
                                            </Tab>

                                        </Tabs>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Card>
                </Col>
            </Row>
        </div>
    );
}
