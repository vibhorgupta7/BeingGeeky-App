import React from 'react';

const navigation = () => {
    return(
            <nav className="navbar navbar-expand-sm bg-dark navbar-dark fixed-top">
                <ul className="navbar-nav">
                    <li className="nav-item success">
                        <a className="nav-link text-light" href="#">Being Geeky</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link text-light" href="#2">Tutorials</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link text-light" href="#3">Videos</a>
                    </li>
                    <li className="nav-item">
                         <a className="nav-link text-light" href="#4">Coupons</a>
                    </li>
                </ul>
            </nav>
    );
}

export default navigation;