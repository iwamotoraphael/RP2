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
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
