import React from 'react';
import Post from './Post';
import User from "../user/User";
import Content from './Content';
import './PostList.css';
import './Post.css';
import './Content.css'


const GlobalPostList = (props) => {
    return (
        <Post className="posts">
            <ul className='g-list'>
                {props.posts.map((post) => (
                    <div className='post-border'>
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
                    </div>
                ))}
            </ul>
        </Post>
    );
}

export default GlobalPostList;