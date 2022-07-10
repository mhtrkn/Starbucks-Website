import React from 'react'
import './header.css';
import search from '../assets/search.png';
import Logo from '../assets/logo.png';

function Header() {
    return (
        <React.Fragment>
            <div className="circle"></div>
            <header>
                <a href="/" className="logo"><img src={Logo} alt='' /></a>
                <div className="search">
                    <input className="info-input" type="text" placeholder="Search" />
                    <img className='fa-search' aria-hidden="true" src={search} alt='' />
                </div>
                <div id="menuToggle">
                    <input type="checkbox" />
                    <span className='spanone'></span>
                    <span className='spantwo'></span>
                    <span className='spanthree'></span>
                    <ul id="menu">
                        <li><a href="/home">home</a></li>
                        <li><a href="/mylist">about</a></li>
                        <li><a href="/contact">what's new</a></li>
                        <li><a href='/'>contact</a></li>
                    </ul>
                </div>
            </header>
        </React.Fragment>
    )
}

export default Header