import React from "react";
import { NativeRouter, Link, Route } from 'react-router-native';
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Today from "./src/routes/Today";
import ErrorPage from "./src/components/ErrorPage";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Today />,
    errorElement: <ErrorPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);