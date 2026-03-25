import React from 'react'
import './css/header.css'

const Header_muji = () => {
  return (
    <header>
      <div className='header_top'>
        <p>MUJI APP 다운받고, 다양한 혜택을 경험해보세요.</p>
      </div>
      <div className='nav_inner'>
      <nav className='web_nav'>
        <div className='logoimg'><a href='#'><img src='./header/logo.svg' alt='headerlogo'/></a></div>
        <ul className='header_nav'>
          <li>BEST</li>
          <li>의복</li>
          <li>생활</li>
          <li>식품</li>
          <li>MUJI GIFT CARD</li>
          <li>MUJI Support</li>
          <li>From MUJI</li>
        </ul>
        <div className='right_icons'>
          <img src='./header/search.svg' alt='search'/>
          <img src='./header/user.svg' alt='user'/>
          <img src='./header/cart.svg' alt='cart'/>
        </div>
      </nav>
      </div>

      <nav className='mob_nav'>
         <div className='logoimg'><img src='./header/logo.svg' alt='headerlogo'/></div>
          <div className='right_icons'>
          <img src='./header/search.svg' alt='search'/>
          <img src='./header/cart.svg' alt='cart'/>
        </div>
      </nav>
      <ul className='header_nav_mob'>
          <li>From MUJI</li>
          <li>MUJI Support │ </li>
          <li>BEST</li>
          <li>의복</li>
          <li>생활</li>
          <li>식품</li>
          <li>MUJI GIFT CARD</li>
        </ul>
    </header>
  )
}

export default Header_muji
