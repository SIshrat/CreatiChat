import React from "react";
import Post from "./Post"
import User from "../user/User";
import Content from "./Content";
import { Link, useParams } from "react-router-dom";

import './Post.css'
import './PostList.css'
import AddIcon from '../../../images/addIcon.png';

const UserPostList = (props) => {
    const params = useParams();
    const postId = params.id;
    const getPostById = (id) => {
        return props.userPosts.find((post) => post.postId === id);
    };
    const post = getPostById(postId);

    return (
        <>
            <Link to='/create-post' className="add-btn"><img src={AddIcon}/></Link>
            <Post className="posts">
                <ul>
                    {props.userPosts.map((post) => (
                    <>
                        <User
                            key={post.id}
                            username={post.username}
                            avatar={post.avatar}
                        />
                        <Content 
                            key={post.postId}
                            title={post.title}
                            description={post.description}
                            date={post.date}
                        />
                        <Link to={`/update-post/${post.postId}`} className="post-btn">Edit</Link>
                    </>
                    ))}
                </ul>
            </Post>
        </>
    );
}

export default UserPostList;