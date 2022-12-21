import React, {useState,useRef} from "react";
import * as formadvanced from "../../../data/Form/formadvanced/formadvanced";
import * as formeditor from "../../../data/Form/formeditor/formeditor";
import { FormGroup, Row, Button, Modal} from "react-bootstrap";
import {SaveFormation,UpdateFormation} from "../../../data/customlibs/api";






export default function ModalEditFormation(props) {

    const storedToken = localStorage.getItem('token');
    const Formations_groupes = JSON.parse(localStorage.getItem('Formations_groupes')); 
    const Formations_categories = JSON.parse(localStorage.getItem('Formations_categories')); 


    

    console.log("ModalEditFormation") ;
    //console.log("props") ;
    //console.log(props) ;


    const [lastIsModalOpen,setLastIsModalOpen] = useState(false) ;
    const [isModalOpen,setIsModalOpen] = useState(false) ;

    // pour le reload des infos
    const [reloadInfos, setReloadInfos] = useState(true) ;

    const modeEdit = useRef("") ;
    const [idAncestor,setIdAncestor] = useState("") ;
    const [title, setTitle] = useState("");
    const idcategorie = useRef("");
    const idgroupe = useRef("") ;
    const [duree, setDuree] = useState("");
    const [tarif, setTarif] = useState("");


    const [content, setContent] = useState(""); // ceci est utilise pour initialiser l'Editor
    const [result, setResult] = useState("");   // ceci est ce que l'on recoit en sortie de l'editor
    const [html, setHtml] = useState("");  // ceci est ce que l'on recoit en sortie de l'editor
    const texte = useRef("");   // ceci est le texte contenu dans l'objet Result 

    const [photo, setPhoto] = useState("");
    const [titleMsg, setTitleMsg] = useState("");
    const [categorieMsg, setCategoryMsg] = useState("");
    const [photoMsg, setPhotoMsg] = useState("");
    const [Msg, setMsg] = useState("");




    if (reloadInfos === true)
    {
        console.log("reloadInfos") ;
        modeEdit.current = props.ModeEdit ;
        setIdAncestor(props.idAncestor) ;
        setTitle(props.Title) ;

        idcategorie.current = props.idCategorie ;
        if (props.idCategorie === "") {
            if ( Formations_categories.length > 0)
                idcategorie.current = Formations_categories[0].idCategorie ;
        }
        //console.log("categorie.current") ;
        //console.log(categorie.current) ;
           
        setContent(props.Html) ;
        setHtml(props.Html) ;
        setDuree(props.Duree) ;
        setTarif(props.Tarif) ;
        idgroupe.current = props.idGroupe ;


        texte.current = props.Text ;
        setPhoto(props.Photo) ;
        setReloadInfos(false) ;
    }


    if (props.show !== lastIsModalOpen)
    {
        setIsModalOpen(props.show) ;
        setLastIsModalOpen(props.show) ;
        if (props.show === true)
            setReloadInfos(true) ;
    }



    function renderSelectOption(tableau, colValue, colTexte) {
        let so = "" ;
        if (tableau !== null)
            so  = tableau.map((Ligne) => {
                return <option value={Ligne[colValue]}> {Ligne[colTexte]} </option>
            }) ;

        return so ;
    }

        



    


    // Function that validates the form
    const inputsValidation = () => {
        console.log("inputsValidation") ;

        
        console.log("title: " + title) ;
        console.log("categorie: " + idcategorie.current) ;
        console.log("result") ;
        console.log(result) ;
        console.log("html") ;
        console.log(html) ;
        console.log("texte") ;
        console.log(texte.current) ;
        

        if (result !== "")
        {
            if (result.blocks !== undefined)
                texte.current = String(result.blocks[0].text) ;
        }

        console.log("texte2") ;
        console.log(texte.current) ;


        let titleCheck, categorieCheck, descriptionCheck;
        if (title.length > 0) {
            titleCheck = true;
            setTitleMsg("");
        } else {
            titleCheck = false;
            setTitleMsg("Le titre est obligatoire");
        }

        if (idcategorie.current.length > 0) {
            categorieCheck = true;
            setCategoryMsg("");
        } else {
            categorieCheck = false;
            setCategoryMsg("La categorie est obligatoire");
        }

        if (texte.current.length > 0) {
            descriptionCheck = true;
            //setDescriptionMsg("");
        } else {
            descriptionCheck = false;
            //setDescriptionMsg("La description est obligatoire");
        }

        if (titleCheck && categorieCheck && descriptionCheck) {
            if (modeEdit.current === "Add")
                SaveFormation(storedToken,title,duree,idgroupe.current, tarif,idcategorie.current,texte.current,html,photo, props.ForceRenderFormation);
            else
                UpdateFormation(storedToken,idAncestor, title,duree,idgroupe.current, tarif,idcategorie.current,texte.current,html,photo, props.ForceRenderFormation);
        }
    }



    const handleCancel = () => {
        if (props.SendCloseMessage !== null)
            props.SendCloseMessage() ;
    }



    // Function that handle the submit event on the form
    const handleSave = (e) => {
        e.preventDefault();
        try {
            inputsValidation();
        } catch (e) {
            console.log(e);
        } 
    }


    return (
        <div>

            <Modal size="xl" show={isModalOpen}>

                <Modal.Body>
                    <Row className="mb-4">
                        <label className="col-md-3 form-label">{props.TitleField} :</label>
                        <div className="">
                            <input
                                type="text"
                                className="form-control"
                                placeholder={titleMsg === "" ? props.TitleField+"..." : titleMsg}
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                            />
                        </div>
                    </Row>

                    <Row className="mb-4">
                        <label className="col-md-3 form-label">{props.DurationField} :</label>
                        <div className="">
                            <input
                                type="text"
                                className="form-control"
                                placeholder={props.DurationField+"..."}
                                value={duree}
                                onChange={(e) => setDuree(e.target.value)}
                            />
                        </div>
                    </Row>

                    <Row className="mb-4">
                        <label className="col-md-3 form-label">{props.NumberOfPeople} :</label>
                        <div className="">                            
                            <select id="Groupes"  className="form-control"  defaultValue={idgroupe.current} onChange={(e) =>  idgroupe.current = e.target.value}>
                            {renderSelectOption(Formations_groupes,"idGroupe","groupe")}
                            </select>
                        </div>
                    </Row>

                    <Row className="mb-4">
                        <label className="col-md-3 form-label">{props.PricePerson} :</label>
                        <div className="">
                            <input
                                type="text"
                                className="form-control"
                                placeholder={props.Rate+'...'}
                                value={tarif}
                                onChange={(e) => setTarif(e.target.value)}
                            />
                        </div>
                    </Row>

                    <Row className="mb-4">
                        <label className="col-md-3 form-label"> {props.CategoryField} :</label>
                        <div className="">
                            
                            <select id="Categories"  className="form-control" defaultValue={idcategorie.current} onChange={(e) =>  idcategorie.current = e.target.value}>
                            {renderSelectOption(Formations_categories,"idCategorie","categorie")}
                            </select>
                        </div>
                    </Row>



                    <Row>
                        <label className="col-md-3 form-label mb-4">
                            {props.ContentsField}:
                        </label>
                        <div className="mb-4">

                            <formeditor.EditorConvertToHTML Content={content} 
                                onEditorChange={(v) => {
                                    setHtml(v) ;
                                    console.log("onEditorChange") ;
                                    console.log("Html") ;
                                    console.log(html) ;
                                }}
                                
                                onChange={(v) => {
                                    setResult(v) ;
                                    console.log("onChange") ;
                                    console.log("result") ;
                                    console.log(result) ;
                                }}
                                

                            />
                        </div>

                    </Row>

                    <FormGroup className="mb-0 file">
                        <label className="col-md-3 form-label mb-4">
                            {props.PhotoField} :
                        </label>
                        <formadvanced.OuterDropzone
                            id="demo"
                            type="file"
                            name="files"
                            accept=".jpg, .png, image/jpeg, image/png"
                            multiple
                            onChange={(e) => setPhoto(e.target.value)}
                        />
                    </FormGroup>    




                </Modal.Body>

                <Modal.Footer>

                    <Button variant="secondary" onClick={handleCancel}>
                        {props.CancelButton}
                    </Button>

                    <Button variant="primary" onClick={handleSave}>
                        {props.SaveButton}
                    </Button>

                </Modal.Footer>

            </Modal>

        </div>
    );
}
