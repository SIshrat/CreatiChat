import React, { useState } from 'react';

const AddPost = (props) => {
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredDescription, setEnteredDescription] = useState('');

    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value);
    }
    const descriptionChangeHandler = (event) => {
        setEnteredDescription(event.target.value);
    }

    const submitHandler = (event) => {
        event.prevenDefault();
    }

    // Create post object and clear form
    const postData = {
        id: Math.random().toString(),
        title: enteredTitle,
        description: enteredDescription,
        date: Date.now,
        username: 'DefaultUser',
        img: '../images/defaultAvatar.jpg'
    };
    if(postData.title.trim() === '') {
        alert('Title is required!');
    } else if (postData.description.trim() === '') {
        alert('Please add a description!');
    } else {
        console.log(postData);
        setEnteredTitle('');
        setEnteredDescription('');
        //props.onSavePostData(postData);
    }
}

export default AddPost;