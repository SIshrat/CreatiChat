import React from "react";
import './PostBox.css';
import GlobalPostList from "../post/GlobalPostList";

const PostBox = (prop) => {
    
    return(
        <div className="container">
            <div className="left-section">
                <GlobalPostList posts={prop.gl}/>
            </div>
            <div className="right-section">
            </div>
        </div>
    );
}

export default PostBox;