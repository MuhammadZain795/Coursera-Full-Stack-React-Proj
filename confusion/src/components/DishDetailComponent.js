import React, { Component, Fragment } from "react";
import { Card, CardBody, CardText, CardTitle, CardImg } from "reactstrap";

export class DishDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dish: this.props.dish
    };
  }

  renderComments(comments) {
    if (comments) {
      const commentsList = comments.map(comment => {
        return (
          <ul className="list-unstyled">
            <li>
              {comment.comment}
              <br />
              {comment.author} {comment.date}
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

  renderDish(dish) {
    if (dish !== null) {
      const comments = dish.comments.map(comment => {
        return <p>{comment.comment}</p>;
      });
      return (
        <Card>
          <CardImg width="100%" src={dish.image} alt={dish.name} />
          <CardBody>
            <CardTitle>{dish.name}</CardTitle>
            <CardText>{dish.description}</CardText>
          </CardBody>
        </Card>
      );
    } else {
      return <div></div>;
    }
  }

  render() {
    return (
      <div className="row">
        <div className="col-12 col-md-5 m-1">
          <div>{this.renderDish(this.state.dish)}</div>
        </div>
        <div className="col-12 col-md-5">{this.renderComments(this.state.dish.comments)}</div>
      </div>
    );
  }
}

export default DishDetail;
