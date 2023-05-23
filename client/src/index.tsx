import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './app/store';
import reportWebVitals from './reportWebVitals';

import './index.css';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Paths } from './paths';
import { Login } from './pages/login';
import { Register } from './pages/register';

const container = document.getElementById('root')!;
const root = createRoot(container);

const router = createBrowserRouter([
  {
    path: Paths.home,
    element: <h2>Employees</h2>
  },
  {
    path: Paths.login,
    element: <Login/>
  },
  {
    path: Paths.register,
    element: <Register/>
  },
])

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();