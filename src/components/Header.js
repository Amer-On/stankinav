import React from "react";
import "./Header.css";
import search from '../icons/search.svg'

function Header(props) {
    return (
        <div className='header'>
            <div className='searchBar'>
                <img src={search} className='searchIcon'/>
                <input type='text' placeholder='Поиск' className='inputSearch'/>
                <button className='btn-search'>Найти</button>
            </div>
        </div>
    );
}

export default Header;