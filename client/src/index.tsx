import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './app/store';
import reportWebVitals from './reportWebVitals';

import { ConfigProvider, theme } from 'antd'


import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Paths } from './paths';
import { Login } from './pages/login';
import { Register } from './pages/register';

import './index.css';
import { Auth } from './features/auth/auth';
import { Employees } from './pages/employees';

const container = document.getElementById('root')!;
const root = createRoot(container);

const router = createBrowserRouter([
  {
    path: Paths.home,
    element: <Employees />
  },
  {
    path: Paths.login,
    element: <Login />
  },
  {
    path: Paths.register,
    element: <Register />
  },
])

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ConfigProvider theme={{
        algorithm: theme.darkAlgorithm
      }}></ConfigProvider>
      <Auth>
        <RouterProvider router={router} />
      </Auth>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
