import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createRoutesFromElements, createBrowserRouter, RouterProvider, Route } from "react-router-dom";
import Root, { loader as rootLoader, action as rootAction } from "./routes/root";
import Contact, { loader as contactLoader, action as contactAction } from "./routes/contact";
import EditContact, { action as editAction } from "./routes/edit";
import { action as destroyAction } from "./routes/destroy";
import ErrorPage from "./error-page";
import "./index.css";
import Index from "./routes";

const router = createBrowserRouter(
  createRoutesFromElements(
  <Route
    path="/"
    element={<Root />}
    errorElement={<ErrorPage />}
    loader={rootLoader}
    action={rootAction}
  >
    <Route errorElement={<ErrorPage />}>
      <Route index={true} element={<Index />} />
      <Route 
        path={'contacts/:contactId'}
        element={<Contact />}
        loader={contactLoader}
        action={contactAction}
      />
      <Route
        path={'contacts/:contactId/edit'}
        element={<EditContact />}
        loader={contactLoader}
        action={editAction}
      />
      <Route
        path={'contacts/:contactId/destroy'}
        action={destroyAction}
      />
    </Route>
  </Route>
));

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);