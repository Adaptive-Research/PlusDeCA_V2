import {Link} from "react-router-dom";
import {FaEye,FaRegThumbsUp} from "react-icons/fa";
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



    // Function that sends axios requesst to save an answer for am Interview
    async function ValidateInterview (tok, idInter ) {
        //const url = 'https://frozen-cove-79898.herokuapp.com/' + process.env.REACT_APP_API_CREATE_INTERVIEW_URL;
        console.log("ValidateInterview: " + idInter) ;

      
        const url =  process.env.REACT_APP_API_VALIDATE_INTERVIEW_URL;
        const response = await axios.post(url, {
            Submit: 1,
            token: tok,
            idInterview: idInter

        }, {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            }
        });


        if (response.data.includes("ERROR:")) 
            console.log(response.data);
         else {
            console.log("Interview validated");
            if (props.ForceRenderInterview !== null)
                props.ForceRenderInterview() ;

         }
           
    }


    // Function that sends axios requesst to save an answer for am Interview
    async function UnvalidateInterview (tok, idInter ) {
        //const url = 'https://frozen-cove-79898.herokuapp.com/' + process.env.REACT_APP_API_CREATE_INTERVIEW_URL;
        console.log("ValidateInterview: " + idInter) ;

      
        const url =  process.env.REACT_APP_API_INVALIDATE_INTERVIEW_URL;
        const response = await axios.post(url, {
            Submit: 1,
            token: tok,
            idInterview: idInter

        }, {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            }
        });


        if (response.data.includes("ERROR:")) 
            console.log(response.data);
         else {
            console.log("Interview validated");
            if (props.ForceRenderInterview !== null)
                props.ForceRenderInterview() ;

         }
           
    }



    function ShowInterview(Interview) {
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
                        <Card.Title as="h5">{props.Interview.titre}</Card.Title>
                        <Card.Body>
                            <button className='btn btn-primary'  onClick={() =>  EditInterview(props.Interview)}>
                                <i className="fa fa-edit"></i>
                            </button>

                            <button className='btn btn-success add-hspace-10'  onClick={() =>  ValidateInterview(storedToken, props.Interview.idInterview)}>
                                <i className="fa fa-chevron-down"></i>
                            </button>                            
                    </Card.Body>
                        
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
                        <Card.Title as="h5">{props.Interview.titre}</Card.Title>
                        <Card.Body>
                            <button className='btn btn-primary' onClick={() =>  ShowInterview(props.Interview)}>
                                    <i className="fe fe-eye"></i>
                            </button>

                            <button className='btn btn-warning add-hspace-10'  onClick={() =>  UnvalidateInterview(storedToken, props.Interview.idInterview)}>
                                <i className="fa fa-history"></i>
                            </button>       
                         </Card.Body>
                    </Card.Header>
                </Card>
    }else  {
        return  <Card key={props.Interview.id}>
                    <img
                        className="card-img-top br-tr-7 br-tl-7"
                        src={require("../../../assets/images/media/19.jpg")}
                        alt="Card cap"
                    />
                    <Card.Header>
                        <Card.Title as="h5">{props.Interview.titre}</Card.Title>
                        <Card.Body>
                            <button className='btn btn-primary' onClick={() =>  ShowInterview(props.Interview)}>
                                    <i className="fe fe-eye"></i>
                            </button>
                        </Card.Body>
                    </Card.Header>
                </Card>
    }
    

    


}

