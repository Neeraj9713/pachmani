import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Main from "./component/Main.jsx";
import Haircair from "./component/Haircair.jsx";
import Bringraj from "./component/Bringraj.jsx";
import LoginForm from "./component/LoginForm.jsx";
import Registration from "./component/Registration.jsx";
import Error from "./component/Error.jsx";
import { AuthProvider } from "./store/auth.jsx";
import {Logout} from './component/Logout.jsx';
import { ToastContainer } from "react-toastify";


const router = createBrowserRouter([
  {
    path: "/login",
    element: <LoginForm />,
  },
  {
    path: "/register",
    element: <Registration />,
  },
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Main /> },
      { path: "/haircare", element: <Haircair /> },
      { path: "/haircare/bringraj", element: <Bringraj /> },
      { path: "/logout", element: <Logout /> },
    ],
  },
  { path: "*", element: <Error /> },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <AuthProvider>
    <React.StrictMode>
      <RouterProvider router={router} />
      <ToastContainer position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
        bodyClassName="toastBody"
        transition:Bounce />
    </React.StrictMode>
  </AuthProvider>
);
