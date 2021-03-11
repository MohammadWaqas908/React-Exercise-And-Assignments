import React,{Component} from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody,CardTitle } from 'reactstrap';

class DishDetail extends Component{
    constructor(props){
        super(props);
        
    }
    renderDish(dish) {
        if (dish != null)
            return(
                <Card>
                    <CardImg top src={dish.image} alt={dish.name} />
                    <CardBody>
                      <CardTitle>{dish.name}</CardTitle>
                      <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            );
        else
            return(
                <div></div>
            );
    }
    renderComments(array) {
        if (array.length != 0) {
            return (
                <div>
                    <h4>Comments</h4>
                    {array.map(comment => (
                        <ul className="list-unstyled">
                            <li>
                                <p>{comment.comment}</p>
                                <p>-- {comment.author} , 
                                {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', 
                                day: '2-digit'}).format(new Date(Date.parse(comment.date)))}</p>
                            </li>
                        </ul>
                    ))}
                </div>
            );
        }
        else {
            return (
                <div></div>
            );

        }
    }
    render(){

        let dish;
        if (this.props.selectedDish) {
            dish = this.renderDish(this.props.selectedDish);
        } else {
            dish = <div></div>
        }
        let dishcomments;
        if (this.props.selectedDish) {
            dishcomments = this.renderComments(this.props.selectedDish.comments);
        } else {
            dishcomments = <div></div>
        }


        return(
            <div className="container">
                <div className="row">
                  <div  className="col-12 col-md-5 m-1">
                    {dish}
                  </div>
                  <div  className="col-12 col-md-5 m-1">
                    {dishcomments}
                  </div>
                </div>
            </div>
        );
    }

}

export default DishDetail;