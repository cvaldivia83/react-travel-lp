import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../fontawesome";

export default function Card(props) {
  return (
    <div className="card">
      <div className="card--img_container">
        <div
          className="card--image"
          id={`image-${props.id}`}
          style={{ backgroundImage: `url(${props.imageUrl})` }}
        ></div>
      </div>

      <div className="card--description">
        <div className="card--location">
          <span className="card--icon">
            <FontAwesomeIcon icon="fa-solid fa-location-dot" />
          </span>
          <h3 className="card--country">{props.location}</h3>
          <a href={props.googleMapsUrl} className="card--link">
            View on Google Maps
          </a>
        </div>
        <h2 className="card--title">{props.title}</h2>
        <h3 className="card--date">
          {props.startDate} - {props.endDate}
        </h3>
        <p className="card--paragraph">{props.description}</p>
      </div>
    </div>
  );
}
