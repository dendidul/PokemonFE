import React from 'react';
import { Link } from 'react-router-dom';
// import { HashRouter, Route, Switch } from 'react-router-dom';
// import Detail from "../containers/Detail";

const NormalCard = ({ content }) => {
  
  return (
    <Link to={`detail/${content.name}`}>
    <div className="custom-card normal-card">
      <div className="row">
         <img src={content.image} 
    className="image-thumbnail" alt={content.name} />
      </div>
      <div className="row">
          <div className="text-holder">
          
          <p className="name">{content.name}</p>
          {/* <p style={{fontSize: "px"}}>Total Owned : 20</p> */}
        </div>
      </div>
     
     
    </div>
    </Link>
  );
};

export default NormalCard;