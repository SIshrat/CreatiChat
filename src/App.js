import React, { useEffect } from 'react';
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
import LoginView from './components/auth/LoginView';
import SignupView from './components/auth/SignupView';
import UserContext from './components/auth/UserContext';
import axios from 'axios';

function App() {

  // Setup dummy posts, userId is username as postId is 10 random characters
  const DUMMY_POSTS = [
    {
      postId: 'a3',
      title: 'Updates so far on this site',
      description: 'This site needs more work, but we could try giving more ideas!',
      date: "11-15-2023",
      username: 'Squawkgull',
      avatar: 'https://images.pexels.com/photos/56618/seagull-sky-holiday-bird-56618.jpeg?cs=srgb&dl=pexels-pixabay-56618.jpg&fm=jpg',
    },
    {
      postId: 'a2bcdefghi',
      title: 'Looking for idea to make a new site!',
      description: 'I am looking forward to make a new website, particularly something involving-well, whatever it is...what do you guys think?',
      date: "11-01-2023",
      username: 'Shi',
      avatar: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/196f8baa-9221-435a-ab11-4c1f7a7b0e65/dbojulg-42d5ac0a-ddd3-44d7-8c24-a27780d153c7.png/v1/fill/w_894,h_894,q_70,strp/pixel_profile_by_chibi_creatorshi_dbojulg-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTAwMCIsInBhdGgiOiJcL2ZcLzE5NmY4YmFhLTkyMjEtNDM1YS1hYjExLTRjMWY3YTdiMGU2NVwvZGJvanVsZy00MmQ1YWMwYS1kZGQzLTQ0ZDctOGMyNC1hMjc3ODBkMTUzYzcucG5nIiwid2lkdGgiOiI8PTEwMDAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.ktNNjFzUBRpSgdqDNKtrquDGipv4Fx7FHJ_bG_kQI6c',
    },
    {
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

    const [currentUser, setCurrentUser] = useState({
      username: 'DefaultUsername',
      avatar: defaultAvatar,
    }); 


  // Setup state of isLoggedIn
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const logStateHandler = () => {
    if(isLoggedIn) {
      setIsLoggedIn(false);
    } else {
      setIsLoggedIn(true);
    }
  }

  // Function to find post item from existing list and send it to EditPostView 
  const getPostById = (searchedPostId, postList) => {
    return postList.find((post) => post.postId === searchedPostId);
  }

  // Handler to delete item from user's list as well as global post list
  const deleteHandler = (id) => {
    const newUserPostList = postList.filter((item) => item.postId !== id);
    const newGlobalPostList = globalList.filter((item) => item.postId !== id)
    setPostList(newUserPostList);
    setGlobalList(newGlobalPostList);
  }

  // Maintain user state using userData state variable
  const [userData, setUserData] = useState({
    token: undefined,
    user: undefined,
  });
  useEffect(() => {
    const checkLoggedIn = async () => {
      let token = localStorage.getItem("auth-token");
      if(token === null) {
        localStorage.setItem("auth-token", "");
        token = "";
      }
      const tokenResponse = await axios.post(
        "http://localhost:8080/users/tokenIsValid",
        null,
        { headers: { "x-auth-token": token } }
      );
      if (tokenResponse.data) {
        const userRes = await axios.get("http://localhost:8080/", {
          headers: { "x-auth-token": token },
        });
        setUserData({
          token,
          user: userRes.data,
        });
      }
    };
    checkLoggedIn();
  }, []);

  return (
    <UserContext.Provider value={{ userData, setUserData }}> 
    <Router>
        <Routes>
          <Route exact path='/' element={<GuestHomeView posts={globalList} logState={false}/>}/>
          <Route path='/home' element={<HomeView posts={globalList} userPosts={postList} logState={true}/>}/>
          <Route path='/login' element={<LoginView posts={globalList} logState={false}/>}/>
          <Route path='/signup'element={<SignupView posts={globalList} logState={false}/>}/>
          <Route path='/create-post/' element={<CreatePostView onSavePostData={addNewPostHandler} logState={true}/>}/>
          <Route path='/update-post/:postId' element={<EditPostView userPosts={postList} getPostId={getPostById} logState={true}/>}/>
          <Route path='/delete-post/:postId' element={<DeletePostView userPosts={postList} getPostId={getPostById} onDelete={deleteHandler} logState={true}/>}/>
          <Route path='*' element={<ErrorPage />}/>
        </Routes>
        <Footer />
    </Router>
    </UserContext.Provider>
  );
}

export default App;