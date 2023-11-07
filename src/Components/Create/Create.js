import React, { Fragment, useContext, useState } from 'react';
import './Create.css';
import Header from '../Header/Header';
import {AuthContext,FirebseContext} from '../../store/firebaseContext'
import { useNavigate } from 'react-router-dom';
const Create = () => {
  //state
const [prname,setPrname]=useState('')
const [catogary,setCatogary]=useState('')
const [price,setPrice]=useState(null)
const [image,setImage]=useState('');


//navigarore
const navigate=useNavigate()

//context
const {firebase}=useContext(FirebseContext)
const {user}=useContext(AuthContext)
const date= new Date()
const handleSubmit=()=>{
 console.log('hello');

 firebase.storage().ref(`/image/${image.name}`).put(image).then(({ref})=>{
  ref.getDownloadURL().then((url)=>{
    firebase.firestore().collection('products').add({
      prname,
      catogary,
      price,
      url,
      userId:user.uid,
      createdAt:date.toDateString()
    })
    navigate('/')
  })
})


}


  return (
    <Fragment>
      <Header />
      <card>
        <div className="centerDiv">
          
            <label htmlFor="fname">Name</label>
            <br />
            <input
              className="input"
              type="text"
              id="fname"
              value={prname}
              onChange={((e)=>setPrname(e.target.value))}
              name="Name"
              defaultValue="John"
            />
            <br />
            <label htmlFor="category">Category</label>
            <br />
            <input
              className="input"
              type="text"
              id="category"
              name="category"
              value={catogary}
              onChange={(e)=>setCatogary(e.target.value)}
              defaultValue="John"
            />
            <br />
            <label htmlFor="fname">Price</label>
            <br />
            <input className="input" type="number" id="price" value={price} onChange={(e)=>setPrice(e.target.value)} name="Price" />
            <br />
          
          <br />
          <img alt="Posts" width="200px" height="200px" src={image ? URL.createObjectURL(image) : ''}></img>
         
            <br />
            <input type="file" onChange={(e)=> setImage(e.target.files[0])} />
            <br />
            <button onClick={handleSubmit} type='submit' className="uploadBtn">upload and Submit</button>
          
        </div>
      </card>
    </Fragment>
  );
};

export default Create;
