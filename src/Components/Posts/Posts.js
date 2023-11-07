import React, { useContext, useEffect, useState } from 'react';

import Heart from '../../assets/Heart';
import './Post.css';
import { FirebseContext } from '../../store/firebaseContext';
import  { PostContext } from '../../store/postContext';
import { useNavigate } from 'react-router-dom';

function Posts() {
const {firebase}=useContext(FirebseContext)
 const [products,setProduts]=useState([])
 const {setPostdetails}=useContext(PostContext)
 const navigate=useNavigate()
 useEffect(()=>{
 firebase.firestore().collection('products').get().then((snapshot)=>{
  const allpost= snapshot.docs.map((product)=>{
    return {
      ...product.data(),
      id:product.id
    }
  })
  setProduts(allpost)
 })
 },[])

  return (
    <div className="postParentDiv">
      <div className="moreView">
        <div className="heading">
          <span>Quick Menu</span>
          <span>View more</span>
        </div>
        <div className="cards">
        {
  products.map((product) => (
    <div onClick={()=>{
      setPostdetails(product);
      navigate('/ViewPost')
    }
     } className="card" key={product.id}>
      <div className="favorite">
        <Heart></Heart>
      </div>
      <div className="image">
        <img src={product.url} alt="" />
      </div>
      <div className="content">
        <p className="rate">&#x20B9; {product.price} </p>
        <span className="kilometer">{product.catogary}</span>
        <h3 className="name"> {product.prname}</h3>
      </div>
      <div className="date">
        <span>{product.createdAt}</span>
      </div>
    </div>
  ))
}
        </div>
      </div>
      <div className="recommendations">
        <div className="heading">
          <span>Fresh recommendations</span>
        </div>
        <div className="cards">
          <div className="card">
            <div className="favorite">
              <Heart></Heart>
            </div>
            <div className="image">
              <img src="../../../Images/R15V3.jpg" alt="" />
            </div>
            <div className="content">
              <p className="rate">&#x20B9; 250000</p>
              <span className="kilometer">Two Wheeler</span>
              <p className="name"> YAMAHA R15V3</p>
            </div>
            <div className="date">
              <span>10/5/2021</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Posts;
