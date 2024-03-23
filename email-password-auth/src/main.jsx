import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Layout from './assets/component/Layout';
import Home from './assets/component/Home';
import Login from './assets/component/Login';
import Register from './assets/component/Register';
import RegisterRBS from './assets/component/RegisterRBS';
import RejesterBS from './assets/component/RejesterBS';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children:[
      {
        path:'/',
        element:<Home></Home>
      },
      {
        path:'/login',
        element:<Login></Login>
      },
      {
        path:'/register',
        element: <Register></Register>
      },
      {
        path:'/registerRBS',
        element: <RegisterRBS></RegisterRBS>
      },
      {
        path:'/registerBS',
        element: <RejesterBS></RejesterBS>
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
