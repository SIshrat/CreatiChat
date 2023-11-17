import {BrowserRouter as Router} from 'react-router-dom';


function App() {
  return (
    <Router> 
      <div>
        <Routes>
          <Route exact path='/' element={GuestHomeView}/>
          <Route path='/home' element={LoggedHomeview}/>
          <Route path='/create-post' element={CreatePostView}/>
          <Route path='/update' element={EditPostView}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
