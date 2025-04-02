import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header>
            <h1>Site de Révision</h1>
            <nav>
                <ul>
                    <li><Link to="/">Accueil</Link></li>
                    <li><Link to="/courses">Cours</Link></li>
                    <li><Link to="/quiz">Quiz</Link></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;