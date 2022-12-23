import React from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';
import About from './pages/About/About';
import Flat from './pages/Flat/Flat';
import Home from './pages/Home/Home';
import NotFound404 from './pages/NotFound404/NotFound404';
import './index.module.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <NotFound404 />,
    children: [
      { index: true, element: <Home /> },
      {
        path: 'appartements/:id',
        element: <Flat />,
      },
      {
        path: 'a-propos',
        element: <About />,
      },
    ],
  },
  {
    path: '/not-found-404',
    element: <NotFound404 />,
  },
  {
    path: '*',
    element: <NotFound404 />,
  },
]);

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);
