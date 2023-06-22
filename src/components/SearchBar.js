import React from "react";
import "./SearchBar.css";
import search from '../icons/search.svg'

function SearchBar() {
    return (
        <div className='header'>
            <div className='searchBar'>
                <img src={search} className='searchIcon' alt='search-icon'/>
                <input type='text'
                       placeholder='Поиск'
                       className='inputSearch'/>
                <button className='btn-search'>Найти</button>
            </div>
        </div>
    );
}

export default SearchBar;