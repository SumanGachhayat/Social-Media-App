import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Container } from 'semantic-ui-react';

import 'semantic-ui-css/semantic.min.css';
import './App.css';
import './pages/About.css'; // Import the About.css file

import { AuthProvider } from './context/auth';
import AuthRoute from './util/AuthRoute';

import MenuBar from './components/MenuBar';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import SinglePost from './pages/SinglePost';
import UserProfile from './components/UserProfile';
import About from './pages/About'; // Import About page

function App() {
  return (
    <AuthProvider>
      <Router>
        <Container className='posts-container'>
          <MenuBar />
        
          <Route exact path="/" component={Home} />
          <AuthRoute exact path="/login" component={Login} />
          <AuthRoute exact path="/register" component={Register} />
          <Route exact path="/posts/:postId" component={SinglePost} />
          <Route exact path="/profile/:username" component={UserProfile} /> {/*Profile Route*/ }
          <Route exact path="/about" component={About} /> {/* About Route */}
        </Container>
      </Router>
    </AuthProvider>
  );
}

export default App;