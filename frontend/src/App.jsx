import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Cup from "./Pages/Product/Cup"; 
import Homepage from "./Pages/Homepage";
import Combo from "./Pages/Product/Combo";
import Bulk from './Pages/Product/Bulk'
import Cone from './Pages/Product/Cone'
import Frozen from './Pages/Product/Frozen'
import Jumbo from './Pages/Product/Jumbo'
import Kulfi from './Pages/Product/Kulfi'
import Stick from './Pages/Product/Stick'

const Route = createBrowserRouter([
  {
    path: "/order/cup",
    element: <Cup />,
  },
  {
    path:'/order/combo',
    element:<Combo />
  },
  {
    path:'/order/bulk',
    element:<Bulk />
  },
  {
    path:'/order/cone',
    element:<Cone />
  },
  {
    path:'/order/frozen',
    element:<Frozen />
  },
  {
    path:'/order/jumbo',
    element:<Jumbo />
  },
  {
    path:'/order/kulfi',
    element:<Kulfi />
  },
  {
    path:'/order/stick',
    element:<Stick />
  },
  {
    path:'/',
    element:<Homepage />
  }
]);

function App() {
  return <RouterProvider router={Route} />;
}

export default App;
