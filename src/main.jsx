import {createRoot} from "react-dom/client"
import { createBrowserRouter,RouterProvider } from "react-router-dom"
import App from "./App"
import Homepage from "./pages/Homepage"
import Contact from "./pages/Contact"
import AllInfo from "./pages/AllInfo"
import './index.css'
import './App.css'

const route  = createBrowserRouter([
    {
        path:"/",
        element:<App/>,
        children:[
            {
                path:"/",
                element:<Homepage/>
            },
            {
                path:"/contact",
                element:<Contact/>
            },
            {
                path:"/information",
                element:<AllInfo/>
            }
        ]
    }
])

const root = createRoot(document.querySelector('#root'))
root.render(<RouterProvider router={route}/>)