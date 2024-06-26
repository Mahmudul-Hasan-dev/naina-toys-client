import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'
import {RouterProvider} from "react-router-dom";
import router from './routes/Route.jsx';
import AuthProviders from './providers/AuthProviders.jsx';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProviders>
    <RouterProvider router={router} />
    </AuthProviders>
  
  </React.StrictMode>,
)
