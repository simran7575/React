import React from "react";
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from "reactstrap";
import '../App.css';

   
    
    function RenderComments({comments}){
        const com = comments.map((comment) => {
            return(
                <div>
                    <ul className="list-unstyled">
                    <li>{comment.comment}</li>
                    <br/>
                    <li>-- {comment.author}, {new Intl.DateTimeFormat("en-US", {year: 'numeric', month:'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}</li>
                    </ul>
                </div>
            )
        })
        return(
            <div className="a" >
                <h1>Comments</h1>
                {com}
            </div>
        )
    }

    function RenderDish({dish}){
        if(dish.dish!= null){
            return(
               <div className="row">
                <div className="col-12 col-md-5 m-1">
                    <Card>
                    <CardBody>
                        <CardImg width="100%" object src={dish.dish.image} alt={dish.dish.name}/>
                            
                                <CardTitle>{dish.dish.name}</CardTitle>
                                <CardText>{dish.dish.description}</CardText>
                        </CardBody>
                        
                    </Card>
                   
                </div>
                 <div className="col-12 col-md-5 m-1">
                     <RenderComments comments = {dish.dish.comments}/>
              </div>
            </div>
            );
        }
        else{
            return(
                <div> </div>
            )
        }
    };
            
    const Dishdetail = (props) => {
        return(
            <div className="container"><RenderDish dish={props}/></div>  
        )
    }



export default Dishdetail;