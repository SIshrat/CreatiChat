import React from "react";
import EditPost from "./EditPost";

const EditBox = (props) => {

    return(
        <div className="create-container">
            <div className="c-left-section">
                <EditPost user={props.user} post={props.postItem}/>
            </div>
            <div className="c-right-section">
                <div className="attachments">
                    <h1>Attachments</h1>
                </div>
                <div className="review">
                    <h1>Current Post</h1>
                    <h4>Title:</h4>
                    <h5> {props.postItem.title} </h5>                   
                    <h4>Description:</h4>
                    <h6>{props.postItem.description}</h6> 
                </div>
            </div>
        </div>
    );
}

export default EditBox;