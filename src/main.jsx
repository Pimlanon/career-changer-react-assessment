import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './Home'
import Owner from './Owner';
import HomeUser from './HomeUser';
import HomeAdmin from './HomeAdmin';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: '/',
    element:  <Home />
  },
  {
    path: '/owner',
    element:  <Owner />
  },
  {
    path: '/homeuser',
    element:  <HomeUser />
  },
  {
    path: '/homeadmin',
    element:  <HomeAdmin />
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
