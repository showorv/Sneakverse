import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { AppLayout } from './components/Layout/AppLayout'
import { ErrorElement } from './components/Layout/ErrorElement'
import { Home } from './pages/Home'
import { About } from './pages/About'
import { Contact } from './pages/Contact'
import { Products } from './pages/Products'
import { ProductDetails } from './components/CommonFolder/ProductDetails'
import { Login } from './pages/Login'
import { Register } from './pages/Register'
import { UserProfile } from './pages/UserProfile'
import { CheckoutPage } from './components/Cart/CheckoutPage'
import { OrderConfirmPage } from './components/Cart/OrderConfirmPage'

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
          path:"/products/:product",  //for use filter in url 
          element: <Products />
        },
        {
          path:"/productDetails/:id",
          element: <ProductDetails />
        },
        {
          path:"/userlogin",
          element: <Login />
        },
        {
          path:"/userregister",
          element: <Register />
        },
        {
          path:"/userProfile",
          element: <UserProfile />
        },
        {
          path:"/checkout",
          element: <CheckoutPage />
        },
        {
          path:"/confirmOrder",
          element: <OrderConfirmPage />
        },

      ]
    }
  ])
  return (
    <RouterProvider router={router}></RouterProvider>
  )
}
