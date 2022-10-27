import Card from "@mui/material/Card";
import {Col} from "react-bootstrap";
import {Link} from "react-router-dom";

export default function ArticleCard(props)
{
    return (
        <Col md={4}>
            <Card>
                <img
                    className="card-img-top br-tr-7 br-tl-7"
                    src={require("../../../../assets/images/media/19.jpg")}
                    alt="Card cap"
                />
                <Card.Header>
                    <Card.Title as="h5"> {props.articleTitle} </Card.Title>
                    <button className={props.colorArticle}
                            style={{marginLeft: "50%"}}>
                        {props.articleCategory}
                    </button>
                </Card.Header>
                <Card.Body>
                    <Card.Text>
                        {props.articleText}
                    </Card.Text>
                    <Link
                        to={`${process.env.PUBLIC_URL}/pages/ArticleDetail`}
                        className="float-end">
                        Read more <i
                        className="fa fa-angle-double-right"></i>
                    </Link>
                </Card.Body>
            </Card>
        </Col>
    )
}
