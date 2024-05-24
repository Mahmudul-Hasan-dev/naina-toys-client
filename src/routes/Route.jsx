import { createBrowserRouter } from "react-router-dom";
import Main from "../components/layout/Main";
import Home from "../components/pages/Home/Home/Home";
import Blog from "../components/pages/Blog/Blog";
import Login from "../components/pages/Login/Login/Login";
import Register from "../components/pages/Login/Register/Register";
import ErrorPage from "../components/404/ErrorPage";
import SingleToy from "../components/pages/SingleToy/SingleToy";
import PrivateRoute from "./PrivateRoute";
import AddToy from "../components/pages/AddToy/AddToy";
import MyToys from "../components/pages/MyToys/MyToys";
import AllToys from "../components/pages/AllToys/AllToys";
import UpdateToy from "../components/pages/UpdateToy/UpdateToy";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage />,
    children: [

      {
        path: "/",
        element: <Home></Home>,

      },
      {
        path: "/login",
        element: <Login></Login>,

      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
      {
        path: "/toy/:id",
        element: <PrivateRoute><SingleToy></SingleToy></PrivateRoute>,
        loader: ({ params }) => fetch(`https://naina-toys-server.vercel.app/toy/${params.id}`)
      },
      {
        path: "/add-toys",
        element: <PrivateRoute><AddToy></AddToy></PrivateRoute>,
      },
      {
        path: "/update-toy/:id",
        element: <PrivateRoute><UpdateToy></UpdateToy></PrivateRoute>,
        loader: ({ params }) => fetch(`https://naina-toys-server.vercel.app/toy/${params.id}`)
      },
      {
        path: "/my-toys",
        element: <PrivateRoute><MyToys></MyToys></PrivateRoute>,
      },
      {
        path: "/all-toys",
        element: <AllToys></AllToys>,
      },
    ],
  },
]);

export default router;