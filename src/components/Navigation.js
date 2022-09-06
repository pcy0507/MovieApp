import React from 'react';
import {Link} from 'react-router-dom'
import './navigation.scss';


const Navigation = () => {
    return (
        <div className='nav'>
            <ul>
                <li><Link to='/'>Home</Link></li>
               <li> <Link to='/about'>about</Link></li>
            </ul>
        </div>
    );
};

export default Navigation;