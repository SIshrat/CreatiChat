import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../common/Button';
import { Link } from 'react-router-dom';

const DeleteBox = (props) => {
    const navigate = useNavigate();
    const navigateHandler = () => navigate(-1);
    const deletePostHandler = () => {
        props.onDelete(props.postItem.postId);
        navigate(-1);
        navigate(-1);
    }

    return(
        <div className="create-container">
            <div className="c-left-section">
                <h2>Are you sure?</h2>
                <Button onClick={navigateHandler}>No</Button>
                <Button onClick={deletePostHandler}>Yes</Button>
            </div>
            <div className="c-right-section">
                <div className="review">
                    <h2>The Post You will Delete</h2>
                    <h4>Title:</h4>
                    <h5> {props.postItem.title} </h5>                   
                    <h4>Description:</h4>
                    <h6>{props.postItem.description}</h6> 
                </div>
            </div>
        </div>
    );
}

export default DeleteBox;