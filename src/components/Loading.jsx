import React from "react";
import * as LoadingGif from "../assets/images/loading.gif";

function Loading() {
    return (
      <div className="blank-page">
        <div className="img-container">
          <img src={LoadingGif} alt="loading" width="200" />
        </div>
      </div>
    );
  }
  
  export default Loading;