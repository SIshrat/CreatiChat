import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Button from '../common/Button';
import '../common/Button.css';

const EditPost = (props) => {
    const navigate = useNavigate();
    const today = new Date();
    const currentDate = 
    (today.getMonth() + 1) + '/' + today.getDate() + '/' + today.getFullYear();

    const [enteredTitle, setEnteredTitle] = useState(props.post.title);
    const [enteredDescription, setEnteredDescription] = useState(props.post.description);
    const [enteredDate, setEnteredDate] = useState(currentDate);

    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value);
    }
    const descriptionChangeHandler = (event) => {
        setEnteredDescription(event.target.value);
    }

    const submitHandler = (event) => {
        event.preventDefault();
        
        // Create post object and clear form
        props.post.title = enteredTitle;
        props.post.description = enteredDescription;

        if(props.post.title.trim() === '') {
            alert('Title is required!');
        } else if (props.post.description.trim() === '') {
            alert('Please add a description!');
        } else {
            console.log("Changed post!");
            setEnteredTitle(props.post.title);
            setEnteredDescription(props.post.description);
            setEnteredDate(enteredDate);
            navigate(-1);
        }
    }

    return(
        <div className="form-layout">
            <form onSubmit={submitHandler}>
                <input
                    placeholder='Title'
                    id="title"
                    type="text"
                    value={enteredTitle}
                    onChange={titleChangeHandler}
                />
                <textarea
                    placeholder='Text (optional)'
                    id="description"
                    type="text"
                    value={enteredDescription}
                    onChange={descriptionChangeHandler}
                ></textarea>
                <Link to={`/delete-post/${props.post.postId}`} className="delete-btn"> Delete</Link>
                <Button className="post-btn" type="submit">Confirm</Button>
            </form>
        </div>
    )
}

export default EditPost;