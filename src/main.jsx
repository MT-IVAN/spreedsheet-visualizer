import React from 'react'
import ReactDOM from 'react-dom/client'
import { ChakraProvider } from '@chakra-ui/react'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Calendar } from './pages/Calendar.jsx'
import { ProgressBar } from './pages/ProgressBar.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <h1>404</h1>,
  },
  {
    path: '/calendar',
    element: <Calendar />,
    errorElement: <h1>404</h1>,
  },
  {
    path: '/progress-bar',
    element: <ProgressBar />,
    errorElement: <h1>404</h1>,
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <ChakraProvider>
    <RouterProvider router={router} />
  </ChakraProvider>
)
