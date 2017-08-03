import {Link} from 'react-router-dom';
import React from 'react';

const Header = () => (
    <div>
        <ul>
            <li>
                <Link to='/'>Home</Link>
            </li>
            <li>
                <Link to='/about'>About</Link>
            </li>
        </ul>
        <hr/>
    </div>
);

export default Header;
