import React from "react";
import User from "../user/User";
import Post from "./Post";

const GlobalPostList = (props) => {
    return (
        <Post className="posts">
            {/* <ul>                
                {props.posts.map((post) => (
                    <User
                    key={props.id}
                    username={props.username}
                    />
                ))}
            </ul> */}
        </Post>
    );
}

export default GlobalPostList;