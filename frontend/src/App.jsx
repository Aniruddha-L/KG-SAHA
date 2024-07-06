import {createBrowserRouter, Router} from 'react-router-dom'
import Products from './Pages/Products'
import Item from './Components/Item'
const Route = createBrowserRouter(
    {
        path:'/order',
        element:<Products />
    }
)

function App() {
    return <Router route = {Route} />
}

export default App