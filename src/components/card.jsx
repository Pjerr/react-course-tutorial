import React from "react";
import pic from "../images/logo512.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

export class Card extends React.Component {
  render() {
    return (
      <div className={this.props.darkMode ? "card dark" : "card light"}>
        {this.props.openSpots === 0 && (
          <div
            className={
              this.props.darkMode ? "card-badge dark" : "card-badge light"
            }
          >
            SOLD OUT
          </div>
        )}
        <img src={pic} alt="card-pic" className="card-picture"></img>
        <div className="star-rating">
          <FontAwesomeIcon className="font-awesome-icon" icon={faStar} />
          <span>{this.props.rating}</span>
        </div>
        <div className="card-content">
          <h4 className="card-title">Lessons from {this.props.firstName}</h4>
          <p className="card-price">Price goes here</p>
        </div>
      </div>
    );
  }
}
