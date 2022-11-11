import React, {useState,useRef} from "react";
import * as formadvanced from "../../../data/Form/formadvanced/formadvanced";
import * as formeditor from "../../../data/Form/formeditor/formeditor";
import * as blogpost from "../../../data/Pages/blogpost/blogpost";
import axios from "axios";
import { FormGroup, Row, Button, Modal} from "react-bootstrap";

export default function ModalEditArticle(props) {


    const storedToken = localStorage.getItem('token');

    console.log("ModalEditArticle") ;
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





    // Function that sends axios requesst to create a new article
    const SaveArticle = async () => {
        //const url = 'https://frozen-cove-79898.herokuapp.com/' + process.env.REACT_APP_API_CREATE_ARTICLE_URL;
        console.log("SaveArticle") ;
        console.log("modeEdit: " + modeEdit.current) ;

        if (modeEdit.current === "Add")
        {
            const url =  process.env.REACT_APP_API_CREATE_ARTICLE_URL;
            const response = await axios.post(url, {
                Submit: 1,
                token: storedToken,
                Article_Title: title,
                Article_Category: category,
                Article_Text: texte.current,
                Article_Html: html,
                Article_Image: photo
            }, {
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                }
            });

            //console.log(response.data)

            if (response.data.includes("ERROR:")) {
                console.log(`Error found: ${response.data}`);
                setMsg("Une erreur est survenue, veuillez reessayer")
            } else {
                console.log("Article created");
                if (props.ForceRenderArticle !== null)
                    props.ForceRenderArticle() ;

            }
        }
        else{
            const url =  process.env.REACT_APP_API_EDIT_ARTICLE_URL;
            const response = await axios.post(url, {
                Submit: 1,
                token: storedToken,
                idAncestor: idAncestor,
                Article_Title: title,
                Article_Category: category,
                Article_Text: texte.current,
                Article_Html: html,
                Article_Image: photo
            }, {
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                }
            });

            //console.log(response.data)

            if (response.data.includes("ERROR:")) {
                console.log(`Error found: ${response.data}`);
                setMsg("Une erreur est survenue, veuillez reessayer")
            } else {
                console.log("Article updated");
                if (props.ForceRenderArticle !== null)
                    props.ForceRenderArticle() ;
            }

        }
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
            SaveArticle();
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
