import React from 'react';

import { createBrowserRouter } from "react-router";
import RootLayout from '../layouts/RootLayout';
import Home from '../Pages/Home/Home';

export const router = createBrowserRouter([
  {
    path: "/",
    element: RootLayout,
    children: [
        {
            index: true,
            Component: Home
        }
    ]
  },
]);