import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import { Root } from "./pages/root";
import { Classes, loader as classesLoader } from "./pages/classes";
import { Students, loader as studentsLoader } from "./pages/students";
import { Student, loader as studentLoader } from "./pages/student";

import "./index.css";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route path="classes" element={<Classes />} loader={classesLoader} />
      <Route path="students" element={<Students />} loader={studentsLoader} />
      <Route
        path="students/:studentId"
        element={<Student />}
        loader={studentLoader}
      />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
