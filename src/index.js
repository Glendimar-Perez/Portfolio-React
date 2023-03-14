import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider, 
} from "react-router-dom";
import "./App.css";
import App from "./App";
import Contador from "./Proyectos/contador";
import Calculadora from "./Proyectos/calculadora";
import Tarea from "./Proyectos/apptarea";

const router = createBrowserRouter([
  {
    path: "/Contador",
    element: <Contador />,
  },
  {
    path: "/Calculadora",
    element: <Calculadora />,
  },
  {
    path: "/AppTareas",
    element: <Tarea />,
  },
  {
    path: "/",
    element: <App />,
  },
  
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
