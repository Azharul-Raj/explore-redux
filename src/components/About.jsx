import React from 'react';
import { useSelector } from 'react-redux';
import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { failed, fetching, success } from "../features/data_fetch/DataSlice";

const About = () => {

    
    const data = useSelector(state => state.data?.value);
    console.log(data);
    return (
        <div>
            
        </div>
    );
};

export default About;