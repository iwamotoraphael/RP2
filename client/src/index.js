import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";

//import pages
import FrontPage from "./pages/FrontPage";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element = {<FrontPage/>}/>
        <Route path="/login" element = {<h1>Login</h1>}/>
        <Route path="/signup" element = {<h1>signup</h1>}/>
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
