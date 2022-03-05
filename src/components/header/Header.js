import React from 'react';
import Logo from '../../images/logo.png';
import SearchLogo from '../../images/search.png';
import './style.css';

export default function Header() {
  return (
    <header>
      <div className='logo-bar'>
        <div className='logo-bar-content container'>
          <div className='logo-content'>
            <a href='/'>
              <img src={Logo} alt='Logo' />
            </a>
          </div>
        <div className='nav-search'>
          <form>
            <div className='search-box'>
              <div className='search-box-bar'>
                <input
                type='text'
                className='input-search-box'
                placeholder='Search by Book Names, author and Title' />
              </div>
              <div className='search-box-search'>
                <button className='button-search-box'>
                  <img src={SearchLogo} alt='search' />
                </button>
              </div>
            </div>
          </form>
        </div>
        <div className="cart-container">
          <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'>
              <path d='M16 6v2h2l2 12H0L2 8h2V6a6 6 0 1 1 12 0zm-2 0a4 4 0 1 0-8 0v2h8V6zM4 10v2h2v-2H4zm10 0v2h2v-2h-2z' />
          </svg>
          <div className="amount-container">
              <p className="total-amount">5</p>
          </div>
        </div>
        </div>
      </div>
    </header>
  )
}
