import React from 'react';
import './Head.css'
import { FaBars } from "react-icons/fa";
import { useState } from 'react';

const Head = () => {
    const [open,setOpen]=useState(false)
    return (
        <div className="flex justify-between mx-10 lg:block">
        <div className='flex flex-col lg:flex-row lg:justify-between '>
            {/* logo */}
            <div className="">
                <h1>LOGO</h1>
            </div>
            {/* nav */}
            <div className={`${open?'block transition duration-300 ease-in-out':'hidden'} lg:block`}>
                <ul className='inline-flex flex-col lg:flex-row space-x-4'>
                    <li className='active:btn-info focus:btn-secondary'>Home</li>
                    <li className='active:btn-secondary focus:btn-info'>About</li>
                    <li className='active:btn-secondary focus:btn-info'>Contact</li>
                    <li className='active:btn-secondary focus:btn-info'>Blog</li>
                </ul>
            </div>
            {/* button */}
            <div className="">
                <button className='btn'>Get Started</button>
            </div>
            {/* hamburger */}
            </div>
            <div className="lg:hidden">
                <FaBars onClick={()=>setOpen(!open)}/>
            </div>
            </div>
    );
};

export default Head;