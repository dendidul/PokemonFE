import React from 'react';
import { Link } from 'react-router-dom';

// import { HashRouter, Route, Switch } from 'react-router-dom';
// import Detail from "../containers/Detail";

const ProfileCard = ({ content }) => {
  
  return (
    <Link to={`PokemonUpdate/`+ content.id }>
    <div className="custom-card normal-card">
      <div className="row">
         <img src={content.pokemon_img} 
    className="image-thumbnail" alt={content.pokemon_origin_name} />
      </div>
      <div className="row">
          <div className="text-holder">
          
          <p className="name">{content.pokemon_nickname}</p>
          {/* <p style={{fontSize: "px"}}>Total Owned : 20</p> */}
        </div>
      </div>
     
     
    </div>
    </Link>
  );
};

export default ProfileCard;