import React from 'react';
import './Content.css';

const Content = props => {
    return(
        <div key={props.postId} className="post-info">
            <h5>{props.title}</h5>
            <p>{props.description}</p>
            <h6>{props.date}</h6>
        </div>
    );
}

export default Content;