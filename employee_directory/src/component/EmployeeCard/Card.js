import React from 'react';


function Card(props) {
    return (
        <div className = "card" style={{width: 18+"rem"}}>
        <img src={props.image} class="card-img-top" alt="online_image"/>
        <div className="card-body">
          <h5 className="card-title">{props.name}</h5>
          <p className="card-text">{props.rank}</p>
          
        </div>
      </div>
    );
  }
  
  export default Card;
