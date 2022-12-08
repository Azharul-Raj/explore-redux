import React from 'react';
import { useState } from 'react';
import { useData } from '../contexts/TodoProvider';
import { ADD_LIST } from '../state/ActionList/ActionList';

const HomePage = () => {
  const {state:{todos}, dispatch } = useData();
  
  const handleSubmit = (e) => {
    e.preventDefault()
    const info = {
      name:e.target.name.value,
      todo:e.target.todo.value,
    }
    dispatch({type:ADD_LIST,payload:info})
  }
  
  return (
    <>
    <div className='flex justify-center items-center '>
        <form onSubmit={(e)=>handleSubmit(e) } className='space-y-3' action="">
        <input type="text" name='name' placeholder="Your Name" className="input input-bordered input-sm w-full max-w-xs" />
          <input type="text" name='todo' placeholder="Type todo" className="input input-bordered input-sm w-full max-w-xs" />
          <button type='submit' className='btn btn-sm btn-primary block'>Add todo</button>
        </form>
        {/* showing todo */}
    </div>
        {
          todos.map(todo => <li>{ todo.name}</li>)
        }
  </>
        );
};

export default HomePage;
