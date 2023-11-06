import React, { useState ,useContext} from 'react';
// import { useContext } from 'react';
import Logo from '../../olx-logo.png';
import {FirebseContext} from '../../store/firebaseContext'
import './Login.css';
import { useNavigate } from 'react-router-dom';
function Login() {
const {firebase}=useContext(FirebseContext)
  const [email,setEmail]=useState('');
  const [error, setError] = useState(null);

  const [password,setPassword]=useState('');
const history=useNavigate()
const handleSubmit = (e) => {
  e.preventDefault();
  setError(null); // Clear any previous errors
  firebase.auth().signInWithEmailAndPassword(email, password)
    .then(() => {
      history('/');
    })
    .catch((err) => {
      setError(err.message);
      setEmail('');
      setPassword('');
    });
};
  return (
    <div>
      <div className="loginParentDiv">
        <img width="200px" height="200px" src={Logo}></img>
        <form onSubmit={handleSubmit}>
          <label htmlFor="fname">Email</label>
          <br />
          <input
            className="input"
            type="email"
            id="fname"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            name="email"
            defaultValue="John"
          />
          <br />
          <label htmlFor="lname">Password</label>
          <br />
          <input
  className="input"
  type="password"
  id="password"
  value={password}
  onChange={(e) => setPassword(e.target.value)}
  name="password"
  defaultValue="Doe"
/>
          <br />
          <br />
          <button type='submit'>Login</button>
        </form>




        <a onClick={() => history('/signup')}>Signup</a>



        <br/>
       
      </div>
      {error && <p className="error-message">{error}</p>}
    </div>

  );
}

export default Login;
