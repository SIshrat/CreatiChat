
import React from "react";
import './CreateBox.css';
import AddPost from "./AddPost";

const CreateBox = (props) => {

    return(
        <div className="create-container">
            <div className="c-left-section">
                <AddPost user={props.user} onSavePostData={props.onSavePostData}/>
            </div>
            <div className="c-right-section">
                <div className="attachments">
                </div>
                <div className="drafts">
                </div>
            </div>
        </div>
    );
}

export default CreateBox;