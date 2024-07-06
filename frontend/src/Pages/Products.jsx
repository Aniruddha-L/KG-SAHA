import Cup from "./Product/Cup"
import { createBrowserRouter, Router } from "react-router-dom"

const route = createBrowserRouter(
    {
        'path':'/cup',
        'element':<Cup/>
    }
)

function Products(){
    return <Router route={route}></Router>
}

export default Products