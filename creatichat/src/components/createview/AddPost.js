import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './AddPost.css';
import Button from '../common/Button';
import '../common/Button.css';

const AddPost = (props) => {
    const navigate = useNavigate();

    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredDescription, setEnteredDescription] = useState('');

    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value);
    }
    const descriptionChangeHandler = (event) => {
        setEnteredDescription(event.target.value);
    }

    const submitHandler = (event) => {
        event.preventDefault();
        
            // Create post object and clear form
        const postData = {
            id: Math.random().toString(),
            title: enteredTitle,
            description: enteredDescription,
            date: Date.now,
            username: props.user.username,
            avatar: props.user.avatar
        };
        if(postData.title.trim() === '') {
            alert('Title is required!');
        } else if (postData.description.trim() === '') {
            alert('Please add a description!');
        } else {
            console.log(postData);
            setEnteredTitle('');
            setEnteredDescription('');
            props.onSavePostData(postData);
            navigate(-1);
        }
    }

    return(
        <div className="form-layout">
            <form onSubmit={submitHandler}>
                <label> Title </label>
                <input
                    id="title"
                    type="text"
                    value={enteredTitle}
                    onChange={titleChangeHandler}
                />
                <label> Description</label>
                <input
                    id="description"
                    type="text"
                    value={enteredDescription}
                    onChange={descriptionChangeHandler}
                />
                <Button className="post-btn" type="submit">Post</Button>
            </form>
        </div>
    )


}

export default AddPost;