import React, { StrictMode } from 'react';
import  ReactDOM from 'react-dom/client';
import './index.css'; 
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Homepage from './routes/homepage/homepage.jsx';
import DashboardPage from './routes/dashboardPage/DashboardPage.jsx';
import ChatPage from './routes/chatpage/Chatpage.jsx';
import RootLayout from './layouts/rootLayout/RootLayout.jsx';
import DashboardLayout from './layouts/dashboardLayout/DashboardLayout.jsx';
import { ClerkProvider } from '@clerk/clerk-react';

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;
const router = createBrowserRouter([
  
  // {
  //   path: "/",
  //   element:<Homepage />,
  // },
  // {
  //   path: "/dashboard",
  //   children: [{ path: "/dashboard",element: <DashboardPage />,},{ path: "/dashboard/chats/:id",element: <ChatPage />}],
  // },
  {
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <Homepage />,
      },
      {
        element: <DashboardLayout/>,
        children:[
          {
          path:"/dashboard",
          element:<DashboardPage/>
          },
          {
          path:"/dashboard/chats/:id",
          element:<ChatPage/>
            
          }
        ]
      }
    ]
  }

])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ClerkProvider publishableKey={PUBLISHABLE_KEY} afterSignOutUrl="/">
      <RouterProvider router={router} />
    </ClerkProvider>
  </React.StrictMode>
);
