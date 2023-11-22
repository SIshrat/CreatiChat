import React from "react";
import './Post.css';


const Post = (props) => {
    const classes = 'post' + props.className;

    return <div className={classes}>{props.children}</div>;
}

export default Post;