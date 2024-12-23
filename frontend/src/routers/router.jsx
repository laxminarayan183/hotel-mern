import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import MenuItems from "../pages/MenuItems";
import Login from "../admin/Login";
import ContactPage from "../pages/ContactPage";
import AdminDashboard from "../admin/AdminDashboard";
import NewEmployee from "../admin/NewEmployee";
import RegisterMenuItem from "../admin/RegisterMenuItem ";
import Home from "../pages/Home";
import FastFood from "../pages/FastFood";
import Drinks from "../pages/Drinks";
import EmployeeDetails from "../admin/EmployeeDetails";
import PrivateRoute from "./PrivateRoute";
import BillingPage from "../admin/BillingPage";
import ReceiptPage from "../admin/ReceiptPage";
import About from "../pages/About";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "/menu",
        element: <MenuItems />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <ContactPage />,
      },

      {
        path: "/fastfood",
        element: <FastFood />,
      },
      {
        path: "/drinks",
        element: <Drinks />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/admin-dashboard",
        element: (
          <PrivateRoute>
            <AdminDashboard />
          </PrivateRoute>
        ),
      },
      {
        path: "/new-employee",
        element: (
          <PrivateRoute>
            <NewEmployee />
          </PrivateRoute>
        ),
      },
      {
        path: "/new-menu",
        element: (
          <PrivateRoute>
            <RegisterMenuItem />
          </PrivateRoute>
        ),
      },
      {
        path: "/employees",
        element: (
          <PrivateRoute>
            <EmployeeDetails />
          </PrivateRoute>
        ),
      },
      {
        path: "/billing",
        element: (
          <PrivateRoute>
            <BillingPage />
          </PrivateRoute>
        ),
      },
      {
        path: "/receipt",
        element: (
          <PrivateRoute>
            <ReceiptPage />
          </PrivateRoute>
        ),
      },
    ],
  },
]);

export default router;
