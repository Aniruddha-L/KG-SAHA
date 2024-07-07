import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Cup from "./Pages/Product/Cup 100";
import Homepage from "./Pages/Homepage";
const Route = createBrowserRouter([
  {
    path: "/order/cup",
    element: <Cup />,
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
