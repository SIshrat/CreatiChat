import React from 'react';
import avatar from '../../../images/defaultAvatar.jpg';

const User = props => {
    return(
        <li key={props.id} className="user-info">
            <img src={props.avatar} className="user-img" alt={props.username} />
            <h6>{props.username}</h6>
    </li>
    );
}

export default User;