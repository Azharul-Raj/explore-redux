
import { RouterProvider } from 'react-router-dom';
import './App.css'
import { routes } from './layouts/route'


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
