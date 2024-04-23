import React from "react";
import { useLanguage } from '../context/LanguageContext.js';

function NavBar() {
    const { texts } = useLanguage();

    return (
        <div>
            <ul style={{ listStyleType: 'none', padding: '0', margin: '0', display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                <li style={{ marginRight: '30px' }}><a href="#profile" style={{ color: 'black', textDecoration: 'none' }}>{texts.navbar}</a></li>
                <li style={{ marginRight: '20px' }}><a href="#skills" style={{ color: 'black', textDecoration: 'none' }}>{texts.navbar1}</a></li>
                <li style={{ marginRight: '20px' }}><a href="#projects" style={{ color: 'black', textDecoration: 'none' }}>{texts.navbar2}</a></li>
                <li><a href="#otros" style={{ color: 'black', textDecoration: 'none' }}>{texts.navbar3}</a></li>
            </ul>
        </div>
    );
}

export default NavBar;