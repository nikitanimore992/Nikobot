import React, { StrictMode } from 'react';
import  ReactDOM from 'react-dom/client';
import './index.css'; 
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Homepage from './routes/homepage/homepage.jsx';
import DashboardPage from './routes/dashboardPage/DashboardPage.jsx';
import ChatPage from './routes/chatpage/Chatpage.jsx';

const router = createBrowserRouter([
  
  {
    path: "/",
    element:<Homepage />,
  },
  {
    path: "dashboard",
    element: <DashboardPage />,
    children: [{path: "/dashboard/chats/:id",element: <ChatPage />}],
  },
  

])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
