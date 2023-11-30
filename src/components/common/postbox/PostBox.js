import React, {useState} from "react";
import './PostBox.css';
import GlobalPostList from '../post/GlobalPostList';
import UserPostList from '../post/UserPostList';

const PostBox = (props) => {

    return(
        <div className="container">
            <div className="left-section">
                <h2>Recent Posts</h2>
                <GlobalPostList posts={props.posts}/>
            </div>
            <div className="right-section">
                <h2>Your Posts</h2>
                {(props.logState) ? 
                (<UserPostList userPosts={props.userPosts}/>)
                : (<p>Please sign in to see and make your posts</p>)
                }
            </div>
        </div>
    );
}

export default PostBox;