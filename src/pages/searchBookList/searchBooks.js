import React, { useEffect, useState, useCallback } from 'react';
import { useGlobalContext } from '../../container/context';
import './style.css';

export default function SearchBooks() {
  const {searchBookList, search} = useGlobalContext();
  console.log(searchBookList);

  return (
    <>
      <section>
        <div className="container">
          <div className="searchtitle">
              <h1>{`"${search}" search results`}</h1>
            <p>Found <strong>{searchBookList.total}</strong> books</p>
          </div>
        </div>
        {searchBookList.books.map((bookinfo) => {
          const {title, isbn13, price, subtitle, image} = bookinfo;

          return(
            <div className='contianer search-container' key={isbn13}>        
              <div className="search-book-list">
                <a href={`../books/${isbn13}`}>
                  <img src={image}
                  alt={title} title={title}  />
                </a>
                <div className='search-book-desc'>
                  <a href={`../books/${isbn13}`}>
                    <h1>{title}</h1>
                  </a>
                    <p>{subtitle}</p>
                    <p className='desc-tag'>
                        <small>Price: &nbsp;</small>
                        <strong>
                          <p className='color2'>{price === `$0.00` ? 'Free Book' : `${price}`}</p>
                        </strong>
                    </p>              
                </div>
              </div>
            </div>
          );
        })}
      </section>
    </>
  )
}
