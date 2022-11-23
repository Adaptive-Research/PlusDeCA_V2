import React, {useState,useRef} from "react";
import * as formadvanced from "../../../data/Form/formadvanced/formadvanced";
import * as formeditor from "../../../data/Form/formeditor/formeditor";
import { FormGroup, Row, Button, Modal} from "react-bootstrap";
import {SaveBusinessCard,UpdateBusinessCard} from "../../../data/customlibs/api";






export default function ModalEditBusinessCard(props) {

    const storedToken = localStorage.getItem('token');

    console.log("ModalEditBusinessCard") ;
    //console.log("props") ;
    //console.log(props) ;


    const [lastIsModalOpen,setLastIsModalOpen] = useState(false) ;
    const [isModalOpen,setIsModalOpen] = useState(false) ;

    // pour le reload des infos
    const [reloadInfos, setReloadInfos] = useState(true) ;

    const modeEdit = useRef("") ;
    const [idAncestor,setIdAncestor] = useState("") ;
    const [title, setTitle] = useState("");
    const category = useRef("");


    const [content, setContent] = useState(""); // ceci est utilise pour initialiser l'Editor
    const [result, setResult] = useState("");   // ceci est ce que l'on recoit en sortie de l'editor
    const [html, setHtml] = useState("");  // ceci est ce que l'on recoit en sortie de l'editor
    const texte = useRef("");   // ceci est le texte contenu dans l'objet Result 

    const [photo, setPhoto] = useState("");
    const [titleMsg, setTitleMsg] = useState("");
    const [categoryMsg, setCategoryMsg] = useState("");
    const [photoMsg, setPhotoMsg] = useState("");
    const [Msg, setMsg] = useState("");




    if (reloadInfos === true)
    {
        modeEdit.current = props.ModeEdit ;
        setIdAncestor(props.idAncestor) ;
        setTitle(props.Title) ;
        category.current = props.Category ;
        setContent(props.Html) ;
        setHtml(props.Html) ;
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






    


    // Function that validates the form
    const inputsValidation = () => {
        console.log("inputsValidation") ;

        
        console.log("title: " + title) ;
        console.log("category: " + category.current) ;
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


        let titleCheck, categoryCheck, descriptionCheck;
        if (title.length > 0) {
            titleCheck = true;
            setTitleMsg("");
        } else {
            titleCheck = false;
            setTitleMsg("Le titre est obligatoire");
        }

        if (category.current.length > 0) {
            categoryCheck = true;
            setCategoryMsg("");
        } else {
            categoryCheck = false;
            setCategoryMsg("La categorie est obligatoire");
        }

        if (texte.current.length > 0) {
            descriptionCheck = true;
            //setDescriptionMsg("");
        } else {
            descriptionCheck = false;
            //setDescriptionMsg("La description est obligatoire");
        }

        if (titleCheck && categoryCheck && descriptionCheck) {
            if (modeEdit.current === "Add")
                SaveBusinessCard(storedToken,title,category,texte.current,html,photo, props.ForceRenderBusinessCard);
            else
                UpdateBusinessCard(storedToken,idAncestor, title,category,texte.current,html,photo, props.ForceRenderBusinessCard);
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
                        <label className="col-md-3 form-label">Titre :</label>
                        <div className="">
                            <input
                                type="text"
                                className="form-control"
                                placeholder={titleMsg === "" ? "Titre ..." : titleMsg}
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                            />
                        </div>
                    </Row>

                    <Row className="mb-4">
                        <label className="col-md-3 form-label">Categorie :</label>
                        <div className="">
                            <select id="Categories"  className="form-control"  onChange={(e) =>  category.current = e.target.value}>
                            <option value="1">Techno</option>
                            <option value="2">Juridique</option>
                            <option value="3">Compta</option>
                            <option value="4">News</option>
                            <option value="5">Autre</option>
                            </select>
                        </div>


                    </Row>



                    <Row>
                        <label className="col-md-3 form-label mb-4">
                            Content:
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
                            Photo :
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
                        Cancel
                    </Button>

                    <Button variant="primary" onClick={handleSave}>
                        Save
                    </Button>

                </Modal.Footer>

            </Modal>

        </div>
    );
}
