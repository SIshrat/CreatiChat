import React from 'react';
import { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Route } from 'react-router-dom';
import { Routes } from 'react-router-dom';

import GuestHomeView from './components/homeview/GuestHomeView';
import HomeView from './components/homeview/HomeView';
import CreatePostView from './components/createview/CreatePostView';
import EditPostView from './components/editview/EditPostView';
import DeletePostView from './components/editview/DeletePostView';
import Footer from './components/common/footer/Footer';
import defaultAvatar from './images/defaultAvatar.jpg';
import ErrorPage from './components/homeview/ErrorPage';

function App() {

  // Setup dummy posts, userId is username + mmddyyyy + hhmmss as postId is 10 random characters
  const DUMMY_POSTS = [
    {
      userId: 'Squakgull0001',
      postId: 'a3',
      title: 'Updates so far on this site',
      description: 'This site needs more work, but we could try giving more ideas!',
      date: "11-15-2023",
      username: 'Squawkgull',
      avatar: 'https://images.pexels.com/photos/56618/seagull-sky-holiday-bird-56618.jpeg?cs=srgb&dl=pexels-pixabay-56618.jpg&fm=jpg',
    },
    {
      userId: 'Shi10312023',      
      postId: 'a2bcdefghi',
      title: 'Looking for idea to make a new site!',
      description: 'I am looking forward to make a new website, particularly something involving-well, whatever it is...what do you guys think?',
      date: "11-01-2023",
      username: 'Shi',
      avatar: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/196f8baa-9221-435a-ab11-4c1f7a7b0e65/dbojulg-42d5ac0a-ddd3-44d7-8c24-a27780d153c7.png/v1/fill/w_894,h_894,q_70,strp/pixel_profile_by_chibi_creatorshi_dbojulg-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTAwMCIsInBhdGgiOiJcL2ZcLzE5NmY4YmFhLTkyMjEtNDM1YS1hYjExLTRjMWY3YTdiMGU2NVwvZGJvanVsZy00MmQ1YWMwYS1kZGQzLTQ0ZDctOGMyNC1hMjc3ODBkMTUzYzcucG5nIiwid2lkdGgiOiI8PTEwMDAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.ktNNjFzUBRpSgdqDNKtrquDGipv4Fx7FHJ_bG_kQI6c',
    },
    {
      userId: 'Toucanucan10202023112233',
      postId: 'a1bcdefghi',
      title: 'Making new section in web',
      description: 'So I think this site could use some re-adjustment, the user logged in could see their posts in their feed.',
      date: "10-31-2023",
      username: 'Toucanucan',
      avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3xh2m4bT6AiPkeH4C2_ObAKw1eb37pufGGA&usqp=CAU',      
    },
  ]

  // Setup user's original posts
  const [postList, setPostList] = useState([]);
  const addNewPostHandler = (newPost) => {
      setPostList((prevUserPosts) => {
          return [newPost,...prevUserPosts]
      });
      addPostHandler(newPost);
  }

  // Set the dummy posts to the list and handle new posts
  const[globalList, setGlobalList] = useState(DUMMY_POSTS);
  const addPostHandler = (post) => {
    setGlobalList((prevPosts) => {
      return [post, ...prevPosts]
    });
  }

    // Setup user for their post list
    const generateUserId = (name) => {
      const accountStart = new Date();
      const accStartDate = (accountStart.getMonth() + 1) + accountStart.getDate()+ accountStart.getFullYear();
      const accStartTime = accountStart.getHours() + accountStart.getMinutes + accountStart.getSeconds(); 
      return name + accStartDate +  accStartTime;
    }

    const [currentUser, setCurrentUser] = useState({
      userId: generateUserId('DefaultUsername'),
      username: 'DefaultUsername',
      avatar: defaultAvatar,
    }); 


  // Setup state of isLoggedIn
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const logStateHandler = () => {
    setIsLoggedIn(!isLoggedIn);
  }

  // Function to find post item from existing list and send it to EditPostView 
  const getPostById = (searchedPostId, postList) => {
    return postList.find((post) => post.postId === searchedPostId);
  }

  // Handler to delete item from user's list as well as global post list
  const deleteHandler = (id) => {
    const newUserPostList = postList.filter((item) => item.postId != id);
    const newGlobalPostList = globalList.filter((item) => item.postId != id)
    setPostList(newUserPostList);
    setGlobalList(newGlobalPostList);
  }

  // Update handler to change the contents of a post when edited

  return (
    <Router> 
      <div>
        <Routes>
          <Route exact path='/' element={<GuestHomeView posts={globalList} logState={isLoggedIn} toggleLogin={logStateHandler} user={currentUser}/>}/>
          <Route path='/home' element={<HomeView posts={globalList} userPosts={postList} logState={isLoggedIn} toggleLogin={logStateHandler} user={currentUser}/>}/>
          <Route path='/create-post/' element={<CreatePostView onSavePostData={addNewPostHandler} user={currentUser}/>}/>
          <Route path='/update-post/:postId' element={<EditPostView user={currentUser} userPosts={postList} getPostId={getPostById}/>}/>
          <Route path='/delete-post/:postId' element={<DeletePostView user={currentUser} userPosts={postList} getPostId={getPostById} onDelete={deleteHandler}/>}/>
          <Route path='*' element={<ErrorPage />}/>
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;