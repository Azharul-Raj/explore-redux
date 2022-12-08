
import { RouterProvider } from 'react-router-dom';
import './App.css'
import TodoProvider from './contexts/TodoProvider';
import { routes } from './layouts/route'


function App() {
  const router = routes;
  return (
    <div className="">
      <TodoProvider>
    <RouterProvider router={router}>

        </RouterProvider>
        </TodoProvider>
      </div>
  )
}

export default App
