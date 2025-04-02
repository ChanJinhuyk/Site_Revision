import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className="home">
            <h1>Bienvenue sur le site de révision</h1>
            <p>Préparez-vous pour vos examens avec nos cours interactifs.</p>
            <h2>Cours disponibles :</h2>
            <ul>
                <li><Link to="/courses/python">Programmation en Python</Link></li>
                <li><Link to="/courses/html">HTML</Link></li>
                <li><Link to="/courses/css">CSS</Link></li>
                <li><Link to="/courses/javascript">JavaScript</Link></li>
                <li><Link to="/courses/insertion-professionnelle">Insertion professionnelle</Link></li>
                <li><Link to="/courses/tef">T.E.F</Link></li>
                <li><Link to="/courses/reseau-informatique">Réseau informatique</Link></li>
                <li><Link to="/courses/se">S.E</Link></li>
                <li><Link to="/courses/si">S.I</Link></li>
                <li><Link to="/courses/architecture-ordinateurs">Architecture des ordinateurs</Link></li>
            </ul>
        </div>
    );
};

export default Home;