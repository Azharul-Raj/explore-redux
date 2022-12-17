import React from 'react';
import './Head.css'

const Head = () => {
    return (
        <div className='flex lg:justify-between mx-10'>
            {/* logo */}
            <div className="">
                <h1>LOGO</h1>
            </div>
            {/* nav */}
            <div className="">
                <ul className='inline-flex flex-row space-x-4'>
                    <li className='btn btn-sm focus:btn-info focus:bg-green-500'>Home</li>
                    <li className='btn btn-sm active:btn-secondary focus:btn-info'>About</li>
                    <li className='btn btn-sm active:btn-secondary focus:btn-info'>Contact</li>
                    <li className='btn btn-sm active:btn-secondary focus:btn-info'>Blog</li>
                </ul>
            </div>
            {/* button */}
            <div className="">
                <button className='btn focus:text-6xl focus:bg-red-500'>Get Started</button>
            </div>
        </div>
    );
};

export default Head;