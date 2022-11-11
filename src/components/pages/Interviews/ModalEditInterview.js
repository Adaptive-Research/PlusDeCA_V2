import React, {useState,useRef} from "react";
import * as formadvanced from "../../../data/Form/formadvanced/formadvanced";
import * as formeditor from "../../../data/Form/formeditor/formeditor";
import * as blogpost from "../../../data/Pages/blogpost/blogpost";
import axios from "axios";
import { FormGroup, Row, Button, Modal} from "react-bootstrap";
import { InterviewQuestions } from "./InterviewQuestions";

export default function ModalEditInterview(props) {


    const storedToken = localStorage.getItem('token');

    console.log("ModalEditInterview") ;
    console.log("props") ;
    console.log(props) ;


    const [lastIsModalOpen,setLastIsModalOpen] = useState(false) ;
    const [isModalOpen,setIsModalOpen] = useState(false) ;

    // pour le reload des infos
    const [reloadInfos, setReloadInfos] = useState(true) ;

    const modeEdit = useRef("") ;
    const [idAncestor,setIdAncestor] = useState("") ;
    const [title, setTitle] = useState("");
    const [category, setCategory] = useState("");


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
        setCategory(props.Category) ;
        setContent(props.Content) ;
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




    const optionsCategorie = [
        {
            value: "technology",
            label: "Technology",
        },
        {
            value: "travel",
            label: "Travel",
        },
        {
            value: "food",
            label: "Food",
        },
        {
            value: "fashion",
            label: "Fashion",
        },
    ];

    

    // Function that sends axios requesst to create a new Interview
    const SaveInterview = async () => {
        //const url = 'https://frozen-cove-79898.herokuapp.com/' + process.env.REACT_APP_API_CREATE_INTERVIEW_URL;
        console.log("SaveInterview") ;
        console.log("modeEdit: " + modeEdit.current) ;

        if (modeEdit.current === "Add")
        {
            const url =  process.env.REACT_APP_API_CREATE_INTERVIEW_URL;
            const response = await axios.post(url, {
                Submit: 1,
                token: storedToken,
                Interview_Title: title,
                Interview_Category: category,
                Interview_Text: texte.current,
                Interview_Html: html,
                Interview_Image: photo
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
                console.log("Interview created");
                if (props.ForceRenderInterview !== null)
                    props.ForceRenderInterview() ;

            }
        }
        else{
            const url =  process.env.REACT_APP_API_EDIT_INTERVIEW_URL;
            const response = await axios.post(url, {
                Submit: 1,
                token: storedToken,
                idAncestor: idAncestor,
                Interview_Title: title,
                Interview_Category: category,
                Interview_Text: texte.current,
                Interview_Html: html,
                Interview_Image: photo
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
                console.log("Interview updated");
                if (props.ForceRenderInterview !== null)
                    props.ForceRenderInterview() ;
            }

        }
    }


    // Function that validates the form
    const inputsValidation = () => {
        console.log("inputsValidation") ;

        //console.log("title: " + title) ;
        //console.log("category: " + category) ;
        //console.log("result") ;
        //console.log(result) ;
        //console.log("html") ;
        //console.log(html) ;

        if (result.blocks !== undefined)
            texte.current = String(result.blocks[0].text) ;
        else
            texte.current = "" ;

        console.log("texte") ;
        console.log(texte.current) ;


        let titleCheck, categoryCheck, descriptionCheck;
        if (title.length > 0) {
            titleCheck = true;
            setTitleMsg("");
        } else {
            titleCheck = false;
            setTitleMsg("Le titre est obligatoire");
        }

        if (category.length > 0) {
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
            SaveInterview();
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
        } finally {
            console.log("Attempted to save Interview")
        }
    }


    return (
        <div>

            <Modal size="xl" show={isModalOpen}>

                <Modal.Body>
                <Row className="mb-4">
                    <InterviewQuestions />
                </Row>
                </Modal.Body>

                <Modal.Footer>

                    <Button variant="secondary" onClick={handleCancel}>
                        Cancel
                    </Button>

                </Modal.Footer>

            </Modal>

        </div>
    );
}
