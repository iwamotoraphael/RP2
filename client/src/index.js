import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";

//import pages
import FrontPage from "./pages/FrontPage";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import HomePage from "./pages/HomePage";
import NetworkPage from "./pages/NetworkPage";
import MessagesPage from "./pages/MessagesPage";
import PostPage from './pages/PostPage'

import "./css/Global.css";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element = {<FrontPage/>}/>
        <Route path="/login" element = {<LoginPage/>}/>
        <Route path="/signup" element = {<SignUpPage/>}/>
        <Route path="/home" element = {<HomePage/>}/>
        <Route path="/network" element = {<NetworkPage/>}/>
        <Route path="/messages" element = {<MessagesPage/>}/>
        <Route path="/post/:postid" element = {<PostPage/>}/>
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
