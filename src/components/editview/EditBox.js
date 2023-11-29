import React from "react";
import EditPost from "./EditPost";

const EditBox = (props) => {

    return(
        <div className="create-container">
            <div className="c-left-section">
                <EditPost user={props.user} />
            </div>
            <div className="c-right-section">
                <div className="attachments">
                    <h1>Attachments</h1>
                </div>
                <div className="drafts">
                    <h1>Drafts</h1>
                </div>
            </div>
        </div>
    );
}

export default EditBox;