import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <div style = {headerStyle}>
            <h1 style={{margin : '10px 0px 20px 0px'}}>Nick's React.js Practice App</h1>
            <Link style={linkStyle} to="/">TodoList</Link> |
            <Link style={linkStyle} to="/tic-tac-toe"> Tic-Tac-Toe</Link> |
            <Link style={linkStyle} to='/about'> About</Link>
        </div>
    )
}

const headerStyle = {
    background: '#333',
    color: '#fff',
    textAlign: 'center',
    padding: '10px'
}

const linkStyle = {
    color: '#fff',
    textDecoration: 'none'
}

export default Header;
