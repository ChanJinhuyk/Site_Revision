import React from 'react';

const Footer = () => {
    return (
        <footer>
            <p>&copy; {new Date().getFullYear()} Site de Révision. Tous droits réservés.</p>
            <nav>
                <ul>
                    <li><a href="/about">À propos</a></li>
                    <li><a href="/contact">Contact</a></li>
                    <li><a href="/privacy">Politique de confidentialité</a></li>
                </ul>
            </nav>
        </footer>
    );
};

export default Footer;