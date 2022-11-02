import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter as Router, Navigate, Route, Routes} from "react-router-dom";

//import pages
import FrontPage from "./pages/FrontPage";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";

import HomePage from "./pages/HomePage";
import NetworkPage from "./pages/NetworkPage";
import MessagesPage from "./pages/MessagesPage";
import PostPage from './pages/PostPage'
import ProfilePage from './pages/ProfilePage'

import "./css/Global.css";

const Private = ({children}) => {
    const recoveredUser = localStorage.getItem('user')
    if(recoveredUser == null || recoveredUser == ''){
        return <Navigate to='/'/>
    }

    return children
}

ReactDOM.render(
  <React.StrictMode>
    <Router>
        <Routes>
          <Route path="/" element = {<FrontPage/>}/>
          <Route path="/login" element = {<LoginPage/>}/>
          <Route path="/signup" element = {<SignUpPage/>}/>
          <Route path="/home" element = {<Private><HomePage/></Private>}/>
          <Route path="/network" element = {<Private><NetworkPage/></Private>}/>
          <Route path="/messages" element = {<Private><MessagesPage/></Private>}/>
          <Route path="/post/:postid" element = {<Private><PostPage/></Private>}/>
          <Route path="/profile" element = {<Private><ProfilePage/></Private>}/>
        </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
