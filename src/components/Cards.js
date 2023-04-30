import React from "react";

const Cards = (props) => {
  return (
    <div  >
      <div className="card" style={{width: "18rem"}}>
        <img className="card-img-top" src={props.src} alt="Card  cap" />
        <div className="card-body">
          <h5 className="card-title"> {props.tittle}</h5>
          <p className="card-text">
           {props.prag}
          </p>
          <a href="/" className="btn btn-primary">
            {props.btn}
          </a>
        </div>
      </div>
    </div>
  );
};

export default Cards;
