import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './AddPost.css';
import Button from '../common/Button';
import '../common/Button.css';

const AddPost = (props) => {
    const navigate = useNavigate();
    const today = new Date();
    const currentDate = 
    (today.getMonth() + 1) + '/' + today.getDate() + '/' + today.getFullYear();
    // ID generator for the postId attribute
    const generateIDHandler= (length) => {
        const characters ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let result = '';        
        for ( let i = 0; i < length + 1; i++ ) {
            result += characters.charAt(Math.floor(Math.random() * characters.length));
        }
        return result;
    }

    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredDescription, setEnteredDescription] = useState('');
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
        const postData = {
            postId: generateIDHandler(10),
            title: enteredTitle,
            description: enteredDescription,
            date: enteredDate,
            userId: props.user.userId,
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
            setEnteredDate(currentDate);
            props.onSavePostData(postData);
            navigate(-1);
        }
    }

    return(
        <div className="form-layout">
            <form onSubmit={submitHandler}>
                <input
                    placeholder='Title (Required)'
                    id="title"
                    type="text"
                    value={enteredTitle}
                    onChange={titleChangeHandler}
                />
                <textarea
                    placeholder='Text (Required)'
                    id="description"
                    type="text"
                    value={enteredDescription}
                    onChange={descriptionChangeHandler}
                ></textarea>
                <Button className="post-btn" type="submit">Post</Button>
            </form>
        </div>
    )


}

export default AddPost;