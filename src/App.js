import React,{useEffect,useContext} from 'react';
import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import Signup from './Pages/Signup'
import Login from './Pages/Login'
import {AuthContext, FirebseContext} from './store/firebaseContext'
/**
 * ?  =====Import Components=====
 */
import Home from './Pages/Home';

function App() {
  const {setUser}=useContext(AuthContext)
  const {firebase}=useContext(FirebseContext)
  useEffect(()=>{
    firebase.auth().onAuthStateChanged((user)=>{
      setUser(user)
    })
  },[])
  return (
    <div>

      <Routes>
        <Route exact path='/' element={ <Home />}>
       
        </Route>
        <Route exact path="/signup" element={<Signup/>}>
        
        </Route>
        <Route exact path="/login" element={ <Login/>}>
         
        </Route>
     
      </Routes>
    </div>
  );
}

export default App;
