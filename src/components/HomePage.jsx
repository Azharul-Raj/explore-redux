import { configureStore } from '@reduxjs/toolkit';
import React from 'react';

export const store = configureStore({ reducer: {} });
const HomePage = () => {
  // const counterReducer = () => {
  //   console.log('here');
  // }
  console.log(store.getState());
  return (
    <>
      <div className='flex justify-center items-center '>
        <h2></h2>
        <button>Inc</button>
        <button>Dec</button>
        </div>
  </>
        );
};

export default HomePage;
