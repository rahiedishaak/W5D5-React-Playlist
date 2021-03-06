import React from 'react';
import { NavLink } from 'react-router-dom';

const navigation = () => {
    const styleUl = {
        listStyleType: 'none',
        display: 'flex',
        justifyContent: 'center',
        marginBottom: '20px'
    };

    const styleLi = {
        border: '1px solid #ccc',
        boxShadow: '0 2px 2px #eee',
        padding: '10px',
        marginRight: '10px'
    };

    const styleLiLast = {
        border: '1px solid #ccc',
        boxShadow: '0 2px 2px #eee',
        padding: '10px',
        marginRight: '0'
    }

    return (
        <nav>
            <ul style={styleUl}>
                <li style={styleLi}>
                    <NavLink to="/" exact>Home</NavLink>
                </li>
                <li style={styleLi}>
                    <NavLink to="/about" exact>Over ons</NavLink>
                </li>
                <li style={styleLiLast}>
                    <NavLink to="/add" exact>Nummer toevoegen</NavLink>
                </li>
            </ul>
        </nav>
    
    );
}



export default navigation;