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
import { OrderDetails } from './components/CommonFolder/OrderDetails'
import { MyOrder } from './pages/MyOrder'
import { AdminLayout } from './components/Admin/AdminLayout'
import { AdminHome } from './pages/AdminHome'
import { UserManage } from './components/Admin/UserManage'
import { ProductManege } from './components/Admin/ProductManege'
import { EditProduct } from './components/Admin/EditProduct'
import { OrderManage } from './components/Admin/OrderManage'

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
          path:"/myorder",
          element: <MyOrder />
        },
        {
          path:"/checkout",
          element: <CheckoutPage />
        },
        {
          path:"/confirmOrder",
          element: <OrderConfirmPage />
        },
        {
          path:"/order/:id",
          element:<OrderDetails />
        },

        //admin
        


      ],
     
    },
    //admin route
    {
      path:"/admin",
      element:<AdminLayout />,
      children:[
        {
          path:"adminhome",
          element:<AdminHome />
        },
        {
          path:"users",
          element:<UserManage />
        },
        {
          path:"products",
          element:<ProductManege />
        },
        {
          path:"products/:id/edit",
          element:<EditProduct />
        },
        {
          path:"orders",
          element:<OrderManage />
        },
      ]

    }
  ])
  return (
    <RouterProvider router={router}></RouterProvider>
  )
}
