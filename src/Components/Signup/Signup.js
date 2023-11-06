import React, { useState,useContext } from 'react';

import Logo from '../../olx-logo.png';
import './Signup.css';
import { FirebseContext } from '../../store/firebaseContext';
import { useNavigate } from 'react-router-dom';
export default function Signup() {
  const history=useNavigate()
  const [username,setUsername]=useState('')
  const [email,setEmail]=useState('')
  const [phone,setPhone]=useState('')
  const [password,setPassword]=useState('')
const {firebase}=useContext(FirebseContext)
  const handleSubmit=(e)=>{
    console.log('hai ia here submitt');
    e.preventDefault()
firebase.auth().createUserWithEmailAndPassword(email,password).then((result)=>{
  console.log('hai ia here ???????????');
  result.user.updateProfile({displayName:username}).then(()=>{
    console.log('hai ia here starting');
    firebase.firestore().collection('users').add({
      id:result.user.uid,
      username:username,
    
      phone:phone,
     
    }).then(()=>{
      console.log('hai ia here mid');
      history('/login')
    })

  })
})
    console.log('hello',firebase);
  }

  return (
    <div>
      <div className="signupParentDiv">
        <img width="200px" height="200px" src={Logo}/>
        <form onSubmit={handleSubmit}>
          <label htmlFor="fname">Username</label>
          <br />
          <input
            className="input"
            type="text"
            value={username}
            onChange={(e)=>setUsername(e.target.value)}
            id="fname"
            name="name"
            defaultValue="John"
          />
          <br />
          <label htmlFor="fname">Email</label>
          <br />
          <input
            className="input"
            type="email"
            id="email"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            name="email"
            defaultValue="John"
          />
          <br />
          <label htmlFor="lname">Phone</label>
          <br />
          <input
            className="input"
            type="number"
            id="password"
            value={phone}
            onChange={(e)=>setPhone(e.target.value)}

            name="phone"
            defaultValue="Doe"
          />
          <br />
          <label htmlFor="lname">Password</label>
          <br />
          <input
            className="input"
            type="password"
            id="lname"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            name="password"
            defaultValue="Doe"
          />
          <br />
          <br />
          <button type='submit'>Signup</button>
        </form>
        <a>Login</a>
      </div>
    </div>
  );
}
