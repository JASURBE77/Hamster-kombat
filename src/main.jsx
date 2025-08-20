import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from './App.jsx'
import Home from './pages/Home.jsx';
import Mine from '../src/pages/Mine.jsx'
import Friends from '../src/pages/Friend.jsx'
import Earn from '../src/pages/Earn.jsx'
import Airdrop from '../src/pages/Airdrop.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path:"/",
        element: <Home />,
      },
        {
        path:"/mine",
        element: <Mine />,
      }, 
      {
        path:"/friends",
        element: <Friends />,
      }, 
       {
        path:"/earn",
        element: <Earn />,
      },
         {
        path:"/airdrop",
        element: <Airdrop />,
      },
    ]
  },
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
