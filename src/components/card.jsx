import React from "react";
import pic from "../images/logo512.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

export class Card extends React.Component {
  render() {
    return (
      <div className="card">
        <img src={pic} alt="card-pic" className="card-picture"></img>
        <div className="star-rating">
          <FontAwesomeIcon className="font-awesome-icon" icon={faStar} />
          <span>{this.props.rating}</span>
        </div>
        <div className="card-content">
          <h4 className="card-title">Lessons from {this.props.name}</h4>
          <p className="card-price">Price goes here</p>
        </div>
      </div>
    );
  }
}
