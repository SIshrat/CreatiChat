import React from 'react';

const Content = props => {
    return(
        <div key={props.postId} className="user-content">
            <h5>{props.title}</h5>
            <div className="description-container" >
                <p>{props.description}</p>
            </div>
            <h6>{props.date}</h6>
        </div>
    );
}

export default Content;