import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './assets/component/Main.jsx';
import Home from './assets/component/Home.jsx';
import Login from './assets/component/Login.jsx';
import Register from './assets/component/Register.jsx';
import RehesterRbs from './assets/component/RehesterRbs.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children:[
      {
          path:"/",
          element: <Home></Home>
      },
      {
          path:"/login",
          element: <Login></Login>
      },
      {
          path:"/register",
          element: <Register></Register>
      },
      {
          path:"/registerrbs",
          element: <RehesterRbs></RehesterRbs>
      },
      {
          path:"/register",
          element: <Register></Register>
      },
    ]
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
