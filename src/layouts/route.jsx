import { createBrowserRouter } from "react-router-dom";
import About from "../components/About";
import Home from "../components/HomePage";
import Main from "./Main";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        children: [
            {
                path: '/',
                element:<Home/>
            },
            {
                path: "/about",
                element:<About/>
            }
        ]
    }
])