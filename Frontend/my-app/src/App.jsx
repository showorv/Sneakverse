import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { AppLayout } from './components/Layout/AppLayout'
import { ErrorElement } from './components/Layout/ErrorElement'
import { Home } from './pages/Home'
import { About } from './pages/About'
import { Contact } from './pages/Contact'
import { Products } from './pages/Products'
import { ProductDetails } from './components/CommonFolder/ProductDetails'

export const App = () => {

  const router = createBrowserRouter([
    {
      path:"/",
      element:<AppLayout />,
      errorElement:<ErrorElement />,

      children:[

        {
          path:"/",
          element: <Home />
        },
        {
          path:"/about",
          element: <About />
        },
        {
          path:"/contact",
          element: <Contact />
        },
        {
          path:"/products",
          element: <Products />
        },
        {
          path:"/productDetails",
          element: <ProductDetails />
        },
      ]
    }
  ])
  return (
    <RouterProvider router={router}></RouterProvider>
  )
}
