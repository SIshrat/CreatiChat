import React from "react";


const Post = (props) => {
    const classes = 'post' + props.className;

    return <div className={classes}>{props.children}</div>;
}

export default Post;