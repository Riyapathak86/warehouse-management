import { createBrowserRouter } from "react-router-dom";
import App from "../../App";

import Customer from '../wareflow/Customer';
import Finance from '../wareflow/Finance';
import Inventory from '../wareflow/Inventory';
import Shipments from '../wareflow/Shipments';
import Tracking from '../wareflow/Tracking';
import Orders from '../wareflow/Orders';
import Navbar from "../layout/Navbar";
import Sidebar from "../layout/Sidebar";
import Detailspage from "../wareflow/Detailspage";

import AdminLogin from "../AdminPanel/AdminLogin";
import AdminDashboard from "../AdminPanel/AdminDashboard";

import PainterDashboard from "../AdminPanel/Adminsidebar/PainterDashboard";
import PriceList from "../AdminPanel/Adminsidebar/PriceList";
import Reports from "../AdminPanel/Adminsidebar/Reports";
import TotalStock from "../AdminPanel/Adminsidebar/TotalStock";
import Pricecal from "../AdminPanel/Adminsidebar/Pricecal";

const Router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [

      { index: true, element: <Inventory /> },

      { path: 'navbar', element: <Navbar /> },
      { path: 'customer', element: <Customer /> },
      { path: 'finance', element: <Finance /> },
      { path: 'inventory', element: <Inventory /> },
      { path: 'inventory/:id', element: <Detailspage /> },
      { path: 'orders', element: <Orders /> },
      { path: 'shipments', element: <Shipments /> },
      { path: 'tracking', element: <Tracking /> },
      { path: 'sidebar', element: <Sidebar /> },
      { path: 'adminlogin', element: <AdminLogin /> },


      {
        path: 'admindash',
        element: <AdminDashboard />,
        children: [
          { path: 'painterDashboard', element: <PainterDashboard /> },
          { path: 'priceList', element: <PriceList /> },

        
          { path: 'pricecal/:id', element: <Pricecal /> },

          { path: 'reports', element: <Reports /> },
          { path: 'totalStock', element: <TotalStock /> },
          { path: 'orders', element: <Orders /> },
        ]
      }

    ]
  }
]);

export default Router;