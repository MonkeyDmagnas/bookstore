import React, { useEffect, useState, useCallback } from 'react';
import './style.css';

export default function searchBooks() {

  return (
    <>
      <section>
        <div className="container">
          <div className="searchtitle">
              <h1>"aliasing-in-object-oriented-programming" search results</h1>
            <p>Found <strong>7219</strong> books</p>
          </div>
        </div>
        <div className='contianer search-container'>        
          <div className="search-book-list">
            <img src="https://ecolechezdonald.com/wp-content/uploads/2020/05/book-img2.jpg"
            alt="" title="photo here"  />
            <div className='search-book-desc'>
                <h1>MongoDB Full crashcourse book</h1>
                <p className='author'>by <strong>Alil Maharjan</strong></p>
                <p>This book presents a survey of the state-of-the-art on techniques for dealing with aliasing in object-oriented programming. It marks the 20th anniversary of the paper The Geneva Convention On The Treatment of Object Aliasing by John Hogg, Doug Lea, Alan Wills, Dennis de Champeaux and Richard Holt. The 22 revised papers were carefully revi...</p>
                <p className='desc-tag'>
                    <small>Price: &nbsp;</small><strong class="price">$80.81</strong> &emsp;|&emsp; 
                    <small>Publisher: &nbsp;<strong>Springer</strong> &emsp;|&emsp; 
                    Release: &nbsp;<strong>2013</strong></small></p>                
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
