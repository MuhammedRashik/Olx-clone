import React, { useContext, useEffect, useState } from 'react';

import './View.css';
import { PostContext } from '../../store/postContext';
import { FirebseContext } from '../../store/firebaseContext';

function View() {


//state
const [user,setUser]=useState()


//constext
const {postDetails}=useContext(PostContext)
const {firebase}=useContext(FirebseContext)


//useefect 
useEffect(()=>{
  const {userId}=postDetails
  firebase.firestore().collection("users").where("id","==",userId).get().then((res)=>{
    res.forEach(doc => {
      setUser(doc.data())
      
    });
  })
},[postDetails,firebase])


  return (
    <div className="viewParentDiv" key={postDetails?.id}>
    <div className="imageShowDiv">
      <img src={postDetails?.url&&postDetails?.url} alt="nop" className="ml-5" style={{width:'50rem'}} />
    </div>
    <div className="rightSection">
      <div className="productDetails">
        <p>&#x20B9; {postDetails?.price} </p>
        <span>{postDetails?.prname}</span>
        <p>{postDetails?.catogary}</p>
        <span>{postDetails?.createdAt}</span>
      </div>
      {user && (
        <div className="contactDetails">
          <p>Seller details</p>
          <p>{user?.username}</p>
          <p>{user?.phone}</p>
        </div>
      )}
    </div>
  </div>
  );
}
export default View;
