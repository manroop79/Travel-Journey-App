import React from "react";

function Journal(props) {
    return (
        <div className="travel">

  <div className="travel-img-container">
    <img className="travel-img" src={props.img} alt="travel" />
  </div>

  <div className="travel-details">

    <div className="travel-location">
      <img className="icon" src="https://media.istockphoto.com/id/1148705812/vector/location-icon-vector-pin-sign-isolated-on-white-background-navigation-map-gps-direction.jpg?s=612x612&w=0&k=20&c=lqEIzW3QedZfytsX30NoBJbHxZZbWnlLsvEiwOSbaow=" alt="icon" />
      <h4>{props.location}</h4>
    <p>
      <a className="go" href={props.maps} target="_blank" rel="noopener noreferrer">
        View on Google Maps
      </a>
    </p>
    </div>

    <div className="travel-description">
    <h2>{props.title}</h2>
    <p>
      <span className="bold">{props.startDate} - {props.endDate}</span>
    </p>
    <p>{props.description}</p>
  </div>
  <hr />
  </div>

</div>
      
    )
}

export default Journal;