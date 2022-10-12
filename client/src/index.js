import React, {useContext} from 'react'
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

import "./css/Global.css";

import {AuthProvider, AuthContext} from "./contexts/auth/auth"

const Private = ({children}) => {
    const {authenticated} = useContext(AuthContext)

    if(!authenticated){
        return <Navigate to='/'/>
    }

    return children
}

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <AuthProvider>
        <Routes>
          <Route path="/" element = {<FrontPage/>}/>
          <Route path="/login" element = {<LoginPage/>}/>
          <Route path="/signup" element = {<SignUpPage/>}/>
          <Route path="/home" element = {<Private><HomePage/></Private>}/>
          <Route path="/network" element = {<Private><NetworkPage/></Private>}/>
          <Route path="/messages" element = {<Private><MessagesPage/></Private>}/>
          <Route path="/post/:postid" element = {<Private><PostPage/></Private>}/>
        </Routes>
      </AuthProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
