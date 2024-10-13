import {createRoot} from "react-dom/client"
import { createBrowserRouter,RouterProvider } from "react-router-dom"
import App from "./App"
import Homepage from "./pages/Homepage"
import Contact from "./pages/Contact"
import AllInfo from "./pages/AllInfo"
import Projects from "./pages/Projects"
import Counter from "./projects/Counter"
import Stopwatch from "./projects/Stopwatch"
import Error from "./error/Error"
import Jokes from "./projects/Jokes"
import AllAccessories from "./projects/mobile/AllAccessories"
import AccessoryDetail from "./projects/mobile/AccessoryDetail"
import Allgrocery from "./projects/grocery/Allgrocery"
import GroceryDetail from "./projects/grocery/GroceryDetail"
import MixProduct from "./projects/MixProduct"
import CatImages from "./projects/CatImages"
import DogImages from "./projects/DogImages"
import AllCountry from "./projects/countries/AllCountry"
import CountryDetail from "./projects/countries/CountryDetail"
import './index.css'
import './App.css'

const route  = createBrowserRouter([
    {
        path:"/",
        element:<App/>,
        errorElement:<Error/>,
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
            },
            {
                path:"/project",
                element:<Projects/>
            },
            {
                path:"/counter",
                element:<Counter/>
            },
            {
                path:"/stopwatch",
                element:<Stopwatch/>
            },
            {
                path:"/jokes",
                element:<Jokes/>
            },
            {
                path:"/accessory",
                element:<AllAccessories/>
            },
            {
                path:"/accessorydetail/:producttitle",
                element:<AccessoryDetail/>
            },
            {
                path:"/grocery",
                element:<Allgrocery/>
            },
            {
                path:"/grocerydetail/:producttitle",
                element:<GroceryDetail/>
            },
            {
                path:"mix",
                element:<MixProduct/>
            },
            {
                path:"/cat",
                element:<CatImages/>
            },
            {
                path:"/dog",
                element:<DogImages/>
            },
            {
                path:"/allcountry",
                element:<AllCountry/>
            },
            {
                path:"/country/:title",
                element:<CountryDetail/>
            }
        ]
    }
])

const root = createRoot(document.querySelector('#root'))
root.render(<RouterProvider router={route}/>)