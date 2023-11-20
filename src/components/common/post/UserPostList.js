import React from "react";
import Post from "./Post"
import User from "../user/User";

import './Post.css'
import './PostList.css'

const UserPostList = (props) => {
    return (
        <Post className="posts">
            <ul>
                {props.posts.map((user) => (
                    <User
                    key={user.id}
                    title={user.title}
                    description={user.description}
                    date={user.date}
                    username={user.username}
                    avatar={user.avatar}
                    />
                ))}
            </ul>
        </Post>
    );
}

export default UserPostList;