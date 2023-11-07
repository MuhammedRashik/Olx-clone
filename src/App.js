import React,{useEffect,useContext} from 'react';
import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import Signup from './Pages/Signup'
import Login from './Pages/Login'
import ViewPost from './Pages/ViewPost'
import {AuthContext, FirebseContext} from './store/firebaseContext'
import Post from './store/postContext';
/**
 * ?  =====Import Components=====
 */
import Home from './Pages/Home';
import Create from './Components/Create/Create'

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

      <Post>

      <Routes>
        <Route exact path='/' element={ <Home />}>
       
        </Route>
        <Route exact path="/signup" element={<Signup/>}>
        
        </Route>
        <Route exact path="/login" element={ <Login/>}>
         
        </Route>

        <Route exact path='/create' element={<Create/>}></Route>
        <Route exact path='/ViewPost' element={<ViewPost/>}></Route>
      </Routes>
      </Post>
    </div>
  );
}

export default App;
