import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Todos from "./components/Todos";
import todosLoader from "./loaders/todosLoader";



const router = createBrowserRouter([
  {
    path: "/",
    element: <Todos />,
    loader: todosLoader,
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
