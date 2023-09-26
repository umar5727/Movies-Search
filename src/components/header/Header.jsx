import React from 'react'
import './Header.css';
import Themes from '../theme/Themes';

const Header = () => {
let theme_name='light';

  return (
    <header>
        <div className="logo">
            <img src="./logo.jpg" alt="logo" />
            <h1>Movie Search</h1>
        </div>
        <div className="theme">
            <Themes />
        </div>
    </header>
  )
}

export default Header