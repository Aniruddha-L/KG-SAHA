import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Cup from "./Pages/Product/Cup"; 
import Homepage from "./Pages/Homepage";
import Combo from "./Pages/Product/Combo";

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
    path:'/',
    element:<Homepage />
  }
]);

function App() {
  return <RouterProvider router={Route} />;
}

export default App;
