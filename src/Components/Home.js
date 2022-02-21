import { Button } from '@mui/material';
import React from 'react';
import img from '../Image/mobile8.jpg'
import './Home.css'
import cart from '../Image/acrt.png'


const Home = (props) => {
    console.warn("Home", props.data)
    return (
        <div>

            <h2>This is home</h2>
            <div className='cart'>
                <div>
                    <img style={{ width: '70px' }} src={img} alt="" />
                </div>
                <div>
                    <span>I phone-15 pro</span>


                </div>
                <div>

                    <Button onClick={() => props.addToCarthandler({ price: '1000', name: 'iphone' })} variant='contained'>Add to cart</Button>
                </div>
            </div>
        </div>
    );
};

export default Home;