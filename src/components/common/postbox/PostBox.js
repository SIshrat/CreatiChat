import React, {useState} from "react";
import './PostBox.css';
import GlobalPostList from '../post/GlobalPostList';
import UserPostList from '../post/UserPostList';

const PostBox = (props) => {
    // Setup user's original posts
    const [postList, setPostList] = useState([]);
    const addNewPostHandler = (newPost) => {
        setPostList((prevUserPosts) => {
            return [newPost,...prevUserPosts]
        });
    }
    
    return(
        <div className="container">
            <div className="left-section">
                <GlobalPostList posts={props.posts}/>
            </div>
            <div className="right-section">
                {(props.logState) ? 
                (<UserPostList userPosts={postList} onSaveUserPostData={addNewPostHandler}/>)
                : (<p> Please sign in to see and make your posts</p>)
                }
            </div>
        </div>
    );
}

export default PostBox;