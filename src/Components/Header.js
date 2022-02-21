import React from 'react';
import { Button } from '@mui/material';
import img from '../Image/mobile8.jpg'
import './Home.css'
import cart from '../Image/acrt.png'

const Header = (props) => {
    return (
        <div>
            <div>
                <span className='notify'>{props.data.length}</span>
                <img className='carticon' src={cart} alt="" />
            </div>
        </div>
    );
};

export default Header;