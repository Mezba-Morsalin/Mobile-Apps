import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Layout from './assets/Components/Layout/Layout.jsx';
import Home from './Pages/Home/Home.jsx';
import Error from './Err/Error.jsx';
import AllApps from './Pages/AllApps/AllApps.jsx';
import Installation from './Pages/Installation/Installation.jsx';
import Dashboard from './Pages/Dashboard/Dashboard.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    Component : Layout,
    children : [{
      index : true,
      element : <Home></Home>
    },
    {
      path : '/apps',
      element : <AllApps></AllApps>
    },
    {
      path : '/installation',
      element : <Installation></Installation>
    },
    {
      path : '/dashboard',
      element : <Dashboard></Dashboard>
    }
  ],
    errorElement : <Error></Error>
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}>
    </RouterProvider>
  </StrictMode>,
)
