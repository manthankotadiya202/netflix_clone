import React from "react";
import Heading from "./Heading";
function Card(props) {
  return (
    <>
      <div className="cards">
        <div className="card">
          <img src={props.imgsrc} alt="movieImage" className="card_img" />
          <div className="card_info">
            <span className="card_category">{props.title}</span>
            <Heading sname={props.sname} />
            <a href={props.links} target="_blank">
              <button> Watch Now </button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
