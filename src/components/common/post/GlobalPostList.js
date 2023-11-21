import React from 'react';
import Post from './Post';
import User from "../user/User";
import Content from './Content';
import './Post.css';
import './PostList.css';

const GlobalPostList = (props) => {
    return (
        <Post className="posts">
            <ul>
                {props.posts.map((post) => (
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
                    </>
                ))}
            </ul>
        </Post>
    );
}

export default GlobalPostList;