import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from "react-router-dom";
import router from './Routes';
import AuthProvider from './Providers/AuthProvider';
import { Toaster } from 'react-hot-toast';

ReactDOM.createRoot(document.getElementById('root')).render(
  <div className="max-w-[1280px] mx-auto">
    <React.StrictMode>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
      <Toaster></Toaster>
    </React.StrictMode>
  </div>
)
