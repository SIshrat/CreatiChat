import React from 'react';
import { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Route } from 'react-router-dom';
import { Routes } from 'react-router-dom';

import HomeView from './components/homeview/HomeView';
import CreatePostView from './components/createview/CreatePostView';
import EditPostView from './components/editview/EditPostView';
import Footer from './components/common/footer/Footer';

function App() {

  const DUMMY_POSTS = [
    {
      id: 'a1',
      postId: 'b1',
      title: 'Making new section in web',
      description: 'So I think this site could use some re-adjustment, the user logged in could see their posts in their feed.',
      date: "10-31-2023",
      username: 'Toucanucan',
      avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3xh2m4bT6AiPkeH4C2_ObAKw1eb37pufGGA&usqp=CAU',      
    },
    {
      id: 'a2',      
      postId: 'b2',
      title: '',
      description: 'I am looking forward to make a new website, particularly something involving-well, whatever it is...what do you guys think?',
      date: "11-01-2023",
      username: 'Shi',
      avatar: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/196f8baa-9221-435a-ab11-4c1f7a7b0e65/dbojulg-42d5ac0a-ddd3-44d7-8c24-a27780d153c7.png/v1/fill/w_894,h_894,q_70,strp/pixel_profile_by_chibi_creatorshi_dbojulg-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTAwMCIsInBhdGgiOiJcL2ZcLzE5NmY4YmFhLTkyMjEtNDM1YS1hYjExLTRjMWY3YTdiMGU2NVwvZGJvanVsZy00MmQ1YWMwYS1kZGQzLTQ0ZDctOGMyNC1hMjc3ODBkMTUzYzcucG5nIiwid2lkdGgiOiI8PTEwMDAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.ktNNjFzUBRpSgdqDNKtrquDGipv4Fx7FHJ_bG_kQI6c',
    },
    {
      id: 'a3',
      postId: 'b3',
      title: 'Updates so far on this site',
      description: 'This site needs more work, but we could try giving more ideas!',
      date: "11-15-2023",
      username: 'Squawkgull',
      avatar: 'https://images.pexels.com/photos/56618/seagull-sky-holiday-bird-56618.jpeg?cs=srgb&dl=pexels-pixabay-56618.jpg&fm=jpg',
    },
  ]

  // Set the dummy posts to the list and handle new posts
  const[globalList, setGlobalList] = useState(DUMMY_POSTS);
  const addPostHandler = (post) => {
    setGlobalList((prevPosts) => {
      return [post, ...prevPosts]
    });
  }

  // Setup state of isLoggedIn
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const logStateHandler = () => {
    setIsLoggedIn(!isLoggedIn);
  }


  return (
    <Router> 
      <div>
        <Routes>
          <Route exact path='/' element={<HomeView posts={globalList} logState={isLoggedIn} toggleLogin={logStateHandler}/>}/>
          <Route path='/create-post:id' element={<CreatePostView onSavePostData={addPostHandler}/>}/>
          <Route path='/update/:id' element={<EditPostView />}/>
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;