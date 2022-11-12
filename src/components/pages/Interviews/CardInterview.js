import {Link} from "react-router-dom";
import {BsPencilSquare} from "react-icons/bs";
import {FaPenAlt,FaEye,FaRegThumbsUp} from "react-icons/fa";
import {AiOutlineSave} from "react-icons/ai";
import '../../../assets/css/InterviewsList.css';
import {Card} from "react-bootstrap";
import axios from "axios";


export default function CardInterview(props) {
    const storedToken = localStorage.getItem('token') ;

    // props.Interview provient directment de ce qui a ete charge de la base de donnees


    function EditInterview(Interview) {
        if (props.SendInterviewData !== null)
            props.SendInterviewData(true, Interview) ;
    }


        if(props.TypeInterview == 'A_Repondre'){
                return  <Card key={props.Interview.id}>
                            <img
                                className="card-img-top br-tr-7 br-tl-7"
                                src={require("../../../assets/images/media/19.jpg")}
                                alt="Card cap"
                            />
                            <Card.Header>
                                <Card.Title as="h5">Titre Interview</Card.Title>
                                <div className='Interview_Card_Btns_Container'>
                                    <button className="btn Valide-Interview">
                                            <Link
                                                to={`${process.env.PUBLIC_URL}/MesInterviews`}
                                                className="QuestionsDetailsView">
                                            <AiOutlineSave/>
                                            </Link>
                                    </button>
                                    <button className="btn Edit-Interview"
                                    onClick={() => EditInterview(props.Interview)}
                                    >
                                            <Link
                                                to={`${process.env.PUBLIC_URL}/QuestionsForInterview`}
                                                className="QuestionsDetailsView">
                                                <BsPencilSquare/>
                                            </Link>
                                    </button>
                                </div>
                            </Card.Header>
                        </Card>
        }else  if(props.TypeInterview == 'Valide'){
            return  <Card key={props.Interview.id}>
                        <img
                            className="card-img-top br-tr-7 br-tl-7"
                            src={require("../../../assets/images/media/19.jpg")}
                            alt="Card cap"
                        />
                        <Card.Header>
                            <Card.Title as="h5">Titre Interview</Card.Title>
                                <button className="btn Edit-Valid-Interview"
                                 onClick={() => EditInterview(props.Interview)}
                                >
                                    <FaPenAlt/>
                                </button>
                        </Card.Header>
                    
                    </Card>
        }else  if(props.TypeInterview == 'Public'){
            return  <Card key={props.Interview.id}  className="Public-Interview">
                        <Card.Title as="h5">Question Interview</Card.Title>
                        <p>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda, dolor atque?
                        </p>
                        <div className='Public-Interview-Btns'>
                            <button className="btn Like-Public-Interview">
                                <Link
                                    to={`${process.env.PUBLIC_URL}/MesInterviews`}
                                    className="QuestionsDetailsView">
                                    <FaRegThumbsUp/>
                                </Link>
                            </button>
                            <button className="btn View-Public-Interview">
                                <Link
                                    to={`${process.env.PUBLIC_URL}/MesInterviews`}
                                    className="QuestionsDetailsView">
                                    <FaEye/>
                                </Link>
                            </button>
                        </div>
                </Card>
        }
    

    


}



/*

    const DeleteInterview = async (id) => {
        //const url = 'https://frozen-cove-79898.herokuapp.com/' + process.env.REACT_APP_API_DELETE_Interview_URL;
        const url = process.env.REACT_APP_API_DELETE_Interview_URL;
        await axios.post(url, {
            Submit: 1,
            token: storedToken,
            debug: 1,
            idAncestor: id
        }, {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            }
        }).then(
            (response) => {
                console.log(response.data);
                if (props.ForceRenderInterview !== null)
                    props.ForceRenderInterview() ;
            }
        )

    }

*/
