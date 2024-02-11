import { Outlet } from 'react-router-dom'
import Header from './Header/Header'
import React from 'react'

export default function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <React.Fragment>
      <Header></Header>
      {children}
      <Outlet></Outlet>
      {/* <Footer></Footer> */}
    </React.Fragment>
  )
}
