import React from 'react';
import {Link} from 'react-router-dom';

function Header(){
    return(
        <header className="header">
            <h1>Todo List</h1>
            <Link className="menu-list" to="/">Home</Link> | <Link className="menu-list" to="/about">About</Link>
        </header>
    )
}
export default Header;