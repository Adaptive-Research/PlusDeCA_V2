import React, {useState, useRef} from "react";
import {Button, Col, FormGroup, Row, Modal,Form } from "react-bootstrap";
import AsyncSelect from 'react-select/async'
import {searchCompanies, getDataFromResponse,LinkCompany} from "../../../data/customlibs/api";
import {PrintLog} from  "../../../data/customlibs/utils";




export default function ModalLinkCompany(props) {

    const storedToken = localStorage.getItem("token");


    const [lastIsModalOpen,setLastIsModalOpen] = useState(false) ;
    const [isModalOpen,setIsModalOpen] = useState(false) ;

    const [name,setName] = useState("") ;
    const Company = useRef("") ; 
    

    const idEntreprise = useRef("-1") ;
    const Founder = useRef("1") ;
    const [job, setJob] = useState("") ;


    // pour le reload des infos
    const [reloadInfos, setReloadInfos] = useState(true) ;

    const sCompanyList = localStorage.getItem("CompanyList");
    let CompanyList = [] ;

    if (sCompanyList !== null)
        CompanyList = JSON.parse(sCompanyList) ; 
   


    if (props.show !== lastIsModalOpen)
    {
        setIsModalOpen(props.show) ;
        setLastIsModalOpen(props.show) ;
        if (props.show === true)
            setReloadInfos(true) ;
    }


    async function loadOptions(inputValue, callback) {
        // perform a request
        const response = await searchCompanies(storedToken,inputValue) ;        
        const data =  getDataFromResponse(response) ;
    
        let pos = data.indexOf("ERROR") ;
        if (pos < 0) 
            callback(data) ;
      }
    
    

    

    
    function renderFounder() {
        PrintLog("renderFounder") ;   
        const ListeReponses = [{"id":"1","reponse":""} , {"id":"2","reponse":"Fondateur"},{"id":"3","reponse":"Co Fondateur"}  ] ;
        let options =  ListeReponses.map( (Ligne) => 
                {
                    if (Ligne.sexe !== null) {
                        if (Ligne.id !== Founder.current)
                            return <option value={Ligne.id}> {Ligne.reponse}</option> ;
                        else 
                            return <option value={Ligne.id} selected> {Ligne.reponse}</option> ;
                    }
                })

                PrintLog("options") ;
                PrintLog(options) ;
                return options ;
    }    


    function ForceRender() {
        if (props.SendCloseMessage !== undefined)
            if (props.SendCloseMessage !== null)
                props.SendCloseMessage() ;
        if (props.ForceRender !== undefined)
            if (props.ForceRender !== null)
                props.ForceRender() ;

    }

    const handleSave = (e) => {
        e.preventDefault();

        PrintLog ("ModalEditLink Company handleSave: " ) ;
        PrintLog ("idEntreprise: "+ idEntreprise.current ) ;
        PrintLog ("Founder: "+ Founder.current ) ;
        PrintLog ("Job: "+ job ) ;


        LinkCompany(storedToken,idEntreprise.current,Founder.current,job, ForceRender) ;

    }

    const handleCancel = () => {
        if (props.SendCloseMessage !== null)
            props.SendCloseMessage() ;
    }


    return (
        <div>

            <Modal size="lg" show={isModalOpen}>

                <Modal.Header closeButton>

                <Modal.Title> {props.Titre}</Modal.Title>

                </Modal.Header>

                <Modal.Body>


                    
                    <Row className="add-space">
                        <Col lg={12} md={12}>
                            <Form.Group className="form-group row">
                                <Form.Label className="col-md-12 form-label">
                                    {props.companyLabel}
                                </Form.Label>
                                <Col md={12}>
                                    <AsyncSelect
                                        defaultOptions={CompanyList}
                                        loadOptions={loadOptions}
                                        onChange = {(e) => idEntreprise.current = e.value }
                                    />
                                </Col>
                            </Form.Group>
                           
                        </Col>
                    </Row>
                    



                    <Row className="add-space">
                        <Col lg={12} md={12}>
                            <FormGroup>
                                <label>{props.founderLabel} ?</label>
                                <div className="">
                                        <select id="Fondateur"  className="form-control" onChange={(e) =>  Founder.current = e.target.value}>
                                            {renderFounder()} 
                                        </select>
                                    </div>
                            </FormGroup>
                        </Col>
                    </Row>

                    <Row className="add-space">
                        <Col lg={12} md={12}>
                            <FormGroup>
                                <label>{props.jobLabel}</label>
                                <input
                                    className="form-control"
                                    type="text"
                                    value={job}
                                    placeholder={props.jobLabel}
                                    onChange={(e) => setJob(e.target.value)}
                                />
                            </FormGroup>
                        </Col>
                    </Row>


                </Modal.Body>

                <Modal.Footer>

                    <Button variant="secondary" onClick={handleCancel}>
                        {props.cancelBtn}
                    </Button>

                    <Button variant="primary" onClick={handleSave}>
                        {props.saveBtn}
                    </Button>

                </Modal.Footer>

            </Modal>


        </div>
    );
}
