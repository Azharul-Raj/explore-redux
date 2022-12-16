
import { configureStore } from '@reduxjs/toolkit';
import { RouterProvider } from 'react-router-dom';
import './App.css'
import counterReducer  from './features/counter/CounterSlice';
import PostReducer from './features/PostSlice/PostSlice';
import { routes } from './layouts/route';
export const store = configureStore({
  reducer: {
    counter: counterReducer,
    posts:PostReducer,
  }
});

console.log('store',store.getState());
function App() {
  const router = routes;
  return (
    <div className="">
    <RouterProvider router={router}>

        </RouterProvider>
      </div>
  )
}

export default App
