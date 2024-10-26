import { createRoot } from "react-dom/client";

import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./components/Login.jsx";
import Home from "./components/Home.jsx";
import Error from "./components/Error.jsx";
import Verify from "./components/Verify.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Login />,
      },
      {
        path: "/verify",
        element: <Verify />,
      },
      {
        path: "/home",
        element: <Home />,
      },
    ],
    errorElement: <Error />,
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
