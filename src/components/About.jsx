import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts } from '../features/PostSlice/PostSlice';

const About = () => {
    const dispatch=useDispatch()
    const data = useSelector(state => console.log(state.posts))
    useEffect(() => {
        dispatch(fetchPosts())
    },[])
    return (
        <div>
            
        </div>
    );
};

export default About;