import { StrictMode, Suspense, lazy } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import { createBrowserRouter, RouterProvider } from "react-router";
import Layout from './assets/Components/Layout/Layout.jsx';
import Home from './Pages/Home/Home.jsx';
import Error from './Err/Error.jsx';
import Installation from './Pages/Installation/Installation.jsx';
import Dashboard from './Pages/Dashboard/Dashboard.jsx';
import AppsShow from './assets/Components/Shared/Apps/AppsShow.jsx';
const AllApps = lazy(() => import('./Pages/AllApps/AllApps.jsx'));
const appsPromise = fetch('appsdata.json').then(res => res.json())

const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: '/apps',
        element: (
          <Suspense fallback={<span className="loading loading-spinner loading-xl flex justify-center min-h-screen mx-auto"></span>}>
            <AllApps />
          </Suspense>
        ),
        loader : () => fetch('/appsdata.json').then(res=> res.json())
      },
      {
        path: 'apps',
        element : <AppsShow appsPromise = {appsPromise}></AppsShow>,
      },
      {
        path: '/installation',
        element: <Installation />
      },
      {
        path: '/dashboard',
        element: <Dashboard />
      }
    ],
    errorElement: <Error />
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
