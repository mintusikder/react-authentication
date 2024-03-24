import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './assets/component/Home';
import Layout from './assets/component/Layout';
import Login from './assets/component/Login.jsx';
import Regiter from './assets/component/Regiter';
import GoogleAndGitHub from './assets/component/GoogleAndGitHub.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children:[
      {
        path:"/",
        element:<Home></Home>,
      },
      {
        path:"/login",
        element:<Login></Login>,
      },
      {
        path:"/register",
        element:<Regiter></Regiter>,
      },
      {
        path:"/google",
        element:<GoogleAndGitHub></GoogleAndGitHub>,
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
