import React, {useState} from "react";
import './PostBox.css';
import GlobalPostList from '../post/GlobalPostList';
import UserPostList from '../post/UserPostList';

const PostBox = (props) => {

    return(
        <div className="container">
            <div className="left-section">
                <GlobalPostList posts={props.posts}/>
            </div>
            <div className="right-section">
                {(props.logState) ? 
                (<UserPostList userPosts={props.userPosts}/>)
                : (<p>Please sign in to see and make your posts</p>)
                }
            </div>
        </div>
    );
}

export default PostBox;