import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { startLogout } from '../../actions/auth';

export const Navbar = () => {

    const dispatch = useDispatch();

    const handleLogout = () => {
        dispatch(startLogout());
    };

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                <Link to="/home" className="navbar-brand text-white" href="#">Auth App</Link>
                <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                    <li className="nav-item active">
                        <Link to="/home" className="btn btn-outline-primary text-white" type="button">Home</Link>
                    </li>
                </ul>
            </div>
            <button
                type="button"
                className="btn btn-lg btn-primary"
                onClick={handleLogout}
            >
                Logout
            </button>
        </nav>
    );
};