import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import InventoryState from './components/context/InventoryState.jsx'
import 'bootstrap-icons/font/bootstrap-icons.css'
// import {Router} from "./components/router/Router.jsx";
import Router from "./components/router/Router.jsx";
import { RouterProvider } from 'react-router'

createRoot(document.getElementById('root')).render(
  <InventoryState>
    <RouterProvider router={Router}/>
  </InventoryState>,
)
