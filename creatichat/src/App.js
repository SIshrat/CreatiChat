import React from 'react';
import { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Route } from 'react-router-dom';
import { Routes } from 'react-router-dom';

import GuestHomeView from './components/homeview/GuestHomeView';
import LoggedHomeview from './components/homeview/LoggedHomeView';
import CreatePostView from './components/createview/CreatePostView';
import EditPostView from './components/editview/EditPostView';

function App() {

  const DUMMY_POSTS = [
    {
      // id: 'a1'
      // title: '',
      // description: '',
      // date:
      // username: 'Toucanucan',
      // avatar: {property.img},      
    }
  ]

  return (
    <Router> 
      <div>
        <Routes>
          <Route exact path='/' element={<GuestHomeView />}/>
          <Route path='/home' element={<LoggedHomeview />}/>
          <Route path='/create-post' element={<CreatePostView />}/>
          <Route path='/update' element={<EditPostView />}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;