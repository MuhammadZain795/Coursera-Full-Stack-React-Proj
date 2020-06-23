import React, { Component, Fragment } from "react";
import { Card, CardImg, CardText, CardBody,
    CardTitle } from 'reactstrap';

  function RenderDish({dish}) {
    return (
      <Card>
        <CardImg width="100%" src={dish.image} alt={dish.name} />
        <CardBody>
          <CardTitle>{dish.name}</CardTitle>
          <CardText>{dish.description}</CardText>
        </CardBody>
      </Card>
    );
  }

  function RenderComments({comments}) {
    if (comments != null) {
      const commentsList = comments.map(comment => {
        return (
          <ul className="list-unstyled">
            <li key={comment.id}>
              {comment.comment}
              <br />
              {comment.author} , {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}
            </li>
          </ul>
        );
      });
      return (
        <Fragment>
          <h4>Comments</h4>
          {commentsList}
        </Fragment>
      );
    } else {
      return <div></div>;
    }
  }

  const  DishDetail = (props) => {
    if(props.dish != null){
      return (          
      <div className="container row">
          <div className="col-12 col-md-5 m-5"><RenderDish dish={props.dish}/></div>
          <div className="col-12 col-md-5 m-1"><RenderComments comments={props.dish.comments}/></div>
      </div>
      );
    }
    else{
      return(
        <div></div>
      )
    }
  }
export default DishDetail;
