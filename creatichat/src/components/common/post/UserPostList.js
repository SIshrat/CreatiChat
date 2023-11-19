import React from "react";
import User from "../user/User";

const PostList = (props) => {
    return (
        <Post className="posts">
            <ul>
                {props.posts.map((post) => (
                    <User
                    key={user.id}
                    username={user.username}
                    />
                ))}
            </ul>
        </Post>
    );
}

export default PostList;