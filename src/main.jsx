import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import ErrorPage from './components/404.jsx'
import Footer from './components/Footer.jsx'
import ContactUs from './pages/ContactUs.jsx'
import './assets/index.css'
import './assets/App.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },
    {
        path: "/contactus",
        element: <ContactUs />
    },
    {
        path: "*",
        exact: true,
        element : <ErrorPage/>,
}
]);


ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
);
