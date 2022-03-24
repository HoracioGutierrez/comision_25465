import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { contexto } from './miContexto';
import Nav from './Nav';

const Header = () => {
    const { cantidad } = useContext(contexto);

    return (
        <header id="layout-header" className="header">
            <Link to="/">
                <h1 className="header__title">Mi E-Commerce</h1>
            </Link>
            <Link to="/carrito">
                <span className="material-icons">shopping_cart</span>
                <b className="cantidad-carrito">{cantidad}</b>
            </Link>
            <Nav />
        </header>
    );
};

export default Header;
