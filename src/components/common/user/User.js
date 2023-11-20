import React from 'react';

import '../../../defaultAvatar.jpg'

const User = props => {
    <li key={props.id} className="user-info">
        <img src={props.img} className="user-img" alt={props.username} />
        <h6>{props.username}</h6>
    </li>
}

export default User