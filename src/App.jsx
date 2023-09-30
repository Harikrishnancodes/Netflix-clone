 
 import React from "react"
import Navbar from "./components/Navbar"
import {orginals,action,Trending,Romance,horrorMovies,Documentries,comedyMovies} from './components/urls'
import "./app.css"
import Banner from "./components/Banner"
import RowPost from "./components/RowPost/RowPost"

function App() {


  return (
    
      <div >
        <Navbar/>
         <Banner/>
         <RowPost url={orginals} title="Netflix Orginals" />
         <RowPost url={action} title= "Action" isSmall/>
         <RowPost url={Trending} title="Trending" isSmall/>
         <RowPost url={Romance} title="Romance" isSmall/>
         <RowPost url={horrorMovies} title="Horror" />
         <RowPost url={comedyMovies} title="Comedy" isSmall/>
         <RowPost url={Documentries} title="Documentries" isSmall/>
         
        </div>
     
    
  )
}

export default App



/*
import React, { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import loginPage  from './components/loginpage'
import {
  orginals,
  action,
  Trending,
  Romance,
  horrorMovies,
  Documentries,
  comedyMovies,
} from './components/urls';
import "./app.css";
import Banner from "./components/Banner";
import RowPost from "./components/RowPost/RowPost";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Set initial login state

  return (
    <Router>
      <div>
        <Navbar />
        <Route exact path="/">
          {isLoggedIn ? (
            <>
              <Banner />
              <RowPost url={orginals} title="Netflix Orginals" />
              <RowPost url={action} title="Action" isSmall />
              <RowPost url={Trending} title="Trending" isSmall />
              <RowPost url={Romance} title="Romance" isSmall />
              <RowPost url={horrorMovies} title="Horror" />
              <RowPost url={comedyMovies} title="Comedy" isSmall />
              <RowPost url={Documentries} title="Documentaries" isSmall />
            </>
          ) : (
            <loginPage setIsLoggedIn={setIsLoggedIn} />
          )}
        </Route>
      </div>
    </Router>
  );
}

export default App; */