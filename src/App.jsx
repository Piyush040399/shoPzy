import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./app/Home";
import Cart from "./app/Cart";
import Layout from "./app/Layout";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <Layout>
          <Home />
        </Layout>
      ),
    },
    {
      path: "/cart",
      element: (
        <Layout>
          <Cart />
        </Layout>
      ),
    },
  ]);

  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
