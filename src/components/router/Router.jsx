import { createBrowserRouter } from "react-router-dom";
import App from "../../App";
import AddProduct from "../AdminPanel/Adminsidebar/AddProduct";
import Customer from '../wareflow/Customer';
import Finance from '../wareflow/Finance';
import Inventory from '../wareflow/Inventory';
import Shipments from '../wareflow/Shipments';
import Tracking from '../wareflow/Tracking';
import Orders from '../wareflow/Orders';
import Navbar from "../layout/Navbar";
import Sidebar from "../layout/Sidebar";
import Detailspage from "../wareflow/Detailspage";
import Rewards from "../Rewards";
import AdminLogin from "../AdminPanel/AdminLogin";
import AdminDashboard from "../AdminPanel/AdminDashboard";

import PainterDashboard from "../AdminPanel/Adminsidebar/PainterDashboard";
import PriceList from "../AdminPanel/Adminsidebar/PriceList";
import Reports from "../AdminPanel/Adminsidebar/Reports";
import TotalStock from "../AdminPanel/Adminsidebar/TotalStock";
import Pricecal from "../AdminPanel/Adminsidebar/Pricecal";
import LoginPage from "../AdminPanel/LoginPage";
import AboutUs from "../dashboard/AboutUs";
import Shop from "../dashboard/Shop";
import Painter from "../Painter";
import Cart from "../wareflow/Cart";
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
      {path:'aboutus',element:<AboutUs/>},
    {path:'loginpage',element: <LoginPage/>},
         {path:'shop',element:<Shop/>},
     {path:'painter',element:<Painter/>},
{path:'rewards',element:<Rewards/>},
     { path: 'cart', element: <Cart/> },
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
       
            { path: 'addproduct', element: <AddProduct/> },
        ]
      }

    ]
  }
]);

export default Router;