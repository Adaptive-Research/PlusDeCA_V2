
import {Card} from "react-bootstrap";
import {DeleteArticle} from "../../../data/customlibs/api";





export default function CardArticle(props) {
    const storedToken = localStorage.getItem('token') ;

    // props.Article provient directment de ce qui a ete charge de la base de donnees


    function EditArticle(Article) {
        if (props.SendArticleData !== null)
            props.SendArticleData(true, Article) ;
    }




    return (
        
            <Card key={props.Article.id}>
                <img
                    className="card-img-top br-tr-7 br-tl-7"
                    src={require("../../../assets/images/media/19.jpg")}
                    alt="Card cap"
                />
                <Card.Header>
                    <Card.Title as="h5"> {props.Article.Article_Title} </Card.Title>
                    <button className="btn btn-success" style={{marginLeft: "50%"}}>
                        {props.Article.props_Category}
                    </button>
                </Card.Header>
                <Card.Body>
                    <Card.Text>
                        {props.Article.Article_Text.length > 100 ? props.Article.Article_Text.substring(0, 100) + "..." : props.Article.Article_Text}
                    </Card.Text>
                    <button className='btn btn-primary' onClick={() => EditArticle(props.Article)}>
                        <i className="fa fa-edit"></i>
                    </button>
                    <button className='m-2 btn btn-danger' onClick={() => DeleteArticle(storedToken, props.Article.idAncestor,props.ForceRenderArticle)}>
                        <i className="fa fa-trash"></i>
                    </button>
                    {/*
                    <Link
                        to={`${process.env.PUBLIC_URL}/pages/propsDetail`}
                        className="float-end">
                        Read more <i
                        className="fa fa-angle-double-right"></i>
                    </Link>
                    */}
                </Card.Body>
            </Card>

    )
    


}