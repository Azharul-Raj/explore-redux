import { configureStore } from '@reduxjs/toolkit';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import counterReducer, { decrement, increment } from '../features/counter/CounterSlice';

export const store = configureStore({
  reducer: {
    counter:counterReducer
  }
});
const HomePage = () => {
  const count = useSelector((state) => state.counter.value)
    const dispatch = useDispatch()
  // const counterReducer = () => {
  //   console.log('here');
  // }
  console.log(store.getState());
  return (
    <>
      <div className='flex justify-center items-center '>
        <h2 className='text-4xl font-bold'>{ count}</h2>
        <button className='btn btn-primary' onClick={()=>dispatch(increment())}>Inc</button>
        <button className='btn btn-primary' onClick={()=>dispatch(decrement())}>Dec</button>
        </div>
  </>
        );
};

export default HomePage;
