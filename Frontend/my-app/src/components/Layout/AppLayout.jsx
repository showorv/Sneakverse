import React from 'react'
import { Header } from '../CommonFolder/Header'
import { Outlet } from 'react-router-dom'
import { Footer } from '../CommonFolder/Footer'

export const AppLayout = () => {
  return (
    <>
    
    <Header />
    <Outlet />
    <Footer />
    </>
  )
}
