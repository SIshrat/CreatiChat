import React from 'react';

const Content = props => {
    return(
        <li key={props.postId} className="post-info">
            <h5>{props.title}</h5>
            <p>{props.description}</p>
            <h6>{props.date}</h6>
        </li>
    );
}

export default Content;