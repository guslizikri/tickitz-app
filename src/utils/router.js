import { createBrowserRouter } from "react-router-dom";
import PrivateRoute from "../midlleware/privateRoute.js";

import Home from "../pages/home/home.jsx";
import Movie from "../pages/movie/movie.jsx";
import Login from "../pages/login/login.jsx";
import Register from "../pages/register/register.jsx";
import Detail from "../pages/detail/detail.jsx";

import Profile from "../pages/profile/profile.jsx";

import Admin from "../pages/admin/admin.jsx";
import Dashboard from "../pages/admin/dashboard.jsx";
import Add from "../pages/addmovie/add.jsx";
import Edit from "../pages/editmovie/edit.jsx";
import NotFound from "../pages/notFound/index.jsx";

export default createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/movie",
    element: <Movie />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/movie/:id",
    element: <Detail />,
  },

  {
    path: "/profile",
    element: (
      <PrivateRoute>
        <Profile />
      </PrivateRoute>
    ),
  },
  {
    path: "/admin",
    element: (
      <PrivateRoute>
        <Admin />
      </PrivateRoute>
    ),
  },
  {
    path: "/admin/dashboard",
    element: (
      <PrivateRoute>
        <Dashboard />
      </PrivateRoute>
    ),
  },
  {
    path: "/admin/add",
    element: (
      <PrivateRoute>
        <Add />
      </PrivateRoute>
    ),
  },
  {
    path: "/admin/edit/:id",
    element: (
      <PrivateRoute>
        <Edit />
      </PrivateRoute>
    ),
  },
  {
    path: "/notfound",
    element: <NotFound />,
  },
]);
