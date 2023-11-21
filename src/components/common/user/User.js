import React from 'react';
import avatar from '../../../images/defaultAvatar.jpg';
import './User.css';

const User = props => {
    return(
        <li key={props.id} className="user-item">
            <div className="user-info">
                <img src={props.avatar} className="user-img" alt={props.username} />
                <h6>{props.username}</h6>
            </div>
        </li>
    );
}

export default User;