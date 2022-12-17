import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { increment } from '../features/counter/CounterSlice';
import { fetchPosts } from '../features/PostSlice/PostSlice';

const About = () => {
    const dispatch=useDispatch()
    const data = useSelector(state => console.log(state.posts))
    useEffect(() => {
        dispatch(fetchPosts())
    }, [])
    const count =useSelector(state=>state.counter.value)
    return (
        <div>
            <div className="">{ count}</div>
            <button onClick={()=>dispatch(increment())} className='btn btn-secondary'>INC</button>
        </div>
    );
};

export default About;