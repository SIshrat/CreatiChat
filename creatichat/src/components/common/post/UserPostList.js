import React from "react";
import Post from "./Post"
import User from "../user/User";
import Content from "./Content";
import { Link } from "react-router-dom";

import './Post.css'
import './PostList.css'
import AddIcon from '../../../images/addIcon.png';

const UserPostList = (props) => {
    return (
        <>
            <Post className="posts">
                <ul>
                    {props.userPosts.map((post) => (
                    <>
                        <Content 
                            key={post.postId}
                            title={post.title}
                            description={post.description}
                            date={post.date}
                        />
                        <User
                            key={post.id}
                            username={post.username}
                            avatar={post.avatar}
                        />
                    </>
                    ))}
                </ul>
                <Link to="/createview:id}"><img src={AddIcon}/></Link>
            </Post>
        </>
    );
}

export default UserPostList;