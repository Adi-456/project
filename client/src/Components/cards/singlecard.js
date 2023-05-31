import React from "react";

function SingleCard(props){
    return(
        <div>
         
          <div>
            <img src={props.src} />
            <p>{props.name}</p>
            <p>{props.position}</p>
            <p>{props.content}</p>
          </div>
        </div>
    );

} 
export default SingleCard;