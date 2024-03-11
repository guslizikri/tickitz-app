import { createBrowserRouter } from 'react-router-dom'
import Home from '../pages/home/home.jsx'
import Movie from '../pages/movie/movie.jsx'
import Login from '../pages/login/login.jsx'
import Register from '../pages/register/register.jsx'
import Detail from '../pages/detail/detail.jsx'

import Admin from '../pages/admin/admin.jsx'
import Add from '../pages/addmovie/add.jsx'
import Edit from '../pages/editmovie/edit.jsx'


export default createBrowserRouter([
    {
        path: '/',
        element: <Home />
    },
    {
        path: '/movie',
        element: <Movie />
    },
    {
        path: '/login',
        element: <Login />
    },
    {
        path: '/register',
        element: <Register />
    },
    {
        path: '/movie/:id',
        element: <Detail />
    },

    {
        path: '/admin',
        element: <Admin />
    },
    {
        path: '/admin/add',
        element: <Add />
    },
    {
        path: '/admin/edit/:id',
        element: <Edit />
    }
])