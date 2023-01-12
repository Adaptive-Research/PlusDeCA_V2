import React, {useState,useRef} from "react";
import * as formadvanced from "../../../data/Form/formadvanced/formadvanced";
import * as formeditor from "../../../data/Form/formeditor/formeditor";
import { FormGroup, Row, Button, Modal,Image,Col} from "react-bootstrap";
import {SaveArticle,UpdateArticle,PublishArticle} from "../../../data/customlibs/api";
import {UploadFile} from "../../../data/customlibs/api2";
import '../../../assets/css/GlobalInputbackground.css';
import '../../../assets/css/ArticleModale.css';
import { useFormState } from "react-hook-form";
import {PrintLog} from  "../../../data/customlibs/utils";


export default function ModalEditArticle(props) {

    const storedToken = localStorage.getItem('token');

    PrintLog("ModalEditArticle") ;
    //PrintLog("props") ;
    PrintLog(props) ;


    const [lastIsModalOpen,setLastIsModalOpen] = useState(false) ;
    const [isModalOpen,setIsModalOpen] = useState(false) ;

    // pour le reload des infos
    const [reloadInfos, setReloadInfos] = useState(true) ;

    const modeEdit = useRef("") ;
    const [idAncestor,setIdAncestor] = useState("") ;
    const [title, setTitle] = useState("");
    const [tags,setTags] = useState("");


    const [content, setContent] = useState(""); // ceci est utilise pour initialiser l'Editor
    const [result, setResult] = useState("");   // ceci est ce que l'on recoit en sortie de l'editor
    const [html, setHtml] = useState("");  // ceci est ce que l'on recoit en sortie de l'editor
    const texte = useRef("");   // ceci est le texte contenu dans l'objet Result 

    const [photo, setPhoto] = useState("");
    const [titleMsg, setTitleMsg] = useState("");
    const [tagsMsg, setTagsMsg] = useState("");
    const [photoMsg, setPhotoMsg] = useState("");
    const [Msg, setMsg] = useState("");




    if (reloadInfos === true)
    {
        modeEdit.current = props.ModeEdit ;
        setIdAncestor(props.idAncestor) ;
        setTitle(props.Title) ;
        setTags(props.Tagss) ;
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
        PrintLog("inputsValidation") ;

        
        PrintLog("title: " + title) ;
        PrintLog("tags: " + tags) ;
        PrintLog("result") ;
        PrintLog(result) ;
        PrintLog("html") ;
        PrintLog(html) ;
        PrintLog("texte") ;
        PrintLog(texte.current) ;
        

        if (result !== "")
        {
            if (result.blocks !== undefined)
                texte.current = String(result.blocks[0].text) ;
        }

        PrintLog("texte2") ;
        PrintLog(texte.current) ;


        let titleCheck, tagsCheck, descriptionCheck;
        if (title.length > 0) {
            titleCheck = true;
            setTitleMsg("");
        } else {
            titleCheck = false;
            setTitleMsg("Le titre est obligatoire");
        }

        if (tags.length > 0) {
            tagsCheck = true;
            setTagsMsg("");
        } else {
            tagsCheck = false;
            setTagsMsg("Le tag est obligatoire");
        }

        if (texte.current.length > 0) {
            descriptionCheck = true;
            //setDescriptionMsg("");
        } else {
            descriptionCheck = false;
            //setDescriptionMsg("La description est obligatoire");
        }

        if (titleCheck && tagsCheck && descriptionCheck) {
            if (modeEdit.current === "Add")
                SaveArticle(storedToken,title,tags,texte.current,html,photo, props.ForceRenderArticle);
            else
                UpdateArticle(storedToken,idAncestor, title,tags,texte.current,html,photo, props.ForceRenderArticle);
        }
    }



    function handleCancel() {
        if (props.SendCloseMessage !== null)
            props.SendCloseMessage() ;
    }



    // Function that handle the submit event on the form
    function handleSave(e){
        e.preventDefault();
        try {
            inputsValidation();
        } catch (e) {
            PrintLog(e);
        } 
    }

    function handlePublish(e) {
        e.preventDefault();

        if (modeEdit.current !== "Add") {
            PublishArticle(storedToken,idAncestor, props.ForceRenderArticle);
            if (props.SendCloseMessage !== null)
                props.SendCloseMessage() ;
        }

    }


    function RenderUpload(NomFichierUploade){
        PrintLog("NomFichierUploade") ;
        PrintLog(NomFichierUploade) ;

        setPhoto(NomFichierUploade) ;
    }

    const submitForm = (files) => {
        PrintLog("submitForm") ;
        PrintLog(files);
       
        let Fichier = files[0].file ;

        UploadFile(process.env.REACT_APP_API_UPLOAD_IMAGE_ARTICLE_URL, storedToken, Fichier,RenderUpload) ;
      };



    return (
        <div className="ModalEditArticle">

            <Modal size="xl" show={isModalOpen}>

                <Modal.Body>
                    <Row className="mb-4">
                        <label className="col-md-3 form-label">{props.FieldTitle} :</label>
                        <div className="">
                            <input
                                type="text"
                                className="form-control"
                                placeholder={titleMsg === "" ? " ..." : titleMsg}
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                            />
                        </div>
                    </Row>

                    <Row className="mb-4">
                        <label className="col-md-3 form-label">{props.FieldTags} :</label>
                        <div className="">
                            <input
                                type="text"
                                className="form-control"
                                placeholder={titleMsg === "" ? "..." : titleMsg}
                                value={tags}
                                onChange={(e) => setTags(e.target.value)}
                            />
                        </div>


                    </Row>



                    <Row>
                        <label className="col-md-3 form-label mb-4">
                        {props.FieldContent}:
                        </label>
                        <div className="mb-4">

                            <formeditor.EditorConvertToHTML Content={content} 
                                onEditorChange={(v) => {
                                    setHtml(v) ;
                                    PrintLog("onEditorChange") ;
                                    PrintLog("Html") ;
                                    PrintLog(html) ;
                                }}
                                
                                onChange={(v) => {
                                    setResult(v) ;
                                    PrintLog("onChange") ;
                                    PrintLog("result") ;
                                    PrintLog(result) ;
                                }}
                                

                            />
                        </div>

                    </Row>


                    <Row>
                        <label className="col-md-3 form-label mb-4">
                            {props.FieldPicture}:
                        </label>
                        {photo}
                    </Row>



                    
                    <FormGroup className="mb-0 file">
                        <label className="col-md-3 form-label mb-4">
                            {props.FieldSendPhoto}:
                        </label>

                        <formadvanced.OuterDropzone
                            id="demo"
                            type="file"
                            name="files"
                            accept=".jpg, .png, image/jpeg, image/png"
                            maxFiles={1}
                            multiple={false}
                            inputContent={props.AddPicture}
                            submitButtonContent="Envoyer l'image"
                            onSubmit={submitForm}
                        />
                    </FormGroup>    
                    



                </Modal.Body>


                

                <div style={{width:'100%'}}>
                
                    <div style={{float:'left',padding:'10px'}}>
                        <Button variant="primary"  style={{margin:'10px'}} onClick={handlePublish}>
                            Publier
                        </Button>
                    </div>

                    <div style={{float:'right',padding:'10px'}}>
                        <Button variant="secondary"  style={{margin:'10px'}} onClick={handleCancel}>
                            {props.CancelButton}
                        </Button>

                        <Button variant="primary" onClick={handleSave}>
                            {props.SaveButton}
                        </Button>

                    </div>
                </div>

            </Modal>

        </div>
    );
}
