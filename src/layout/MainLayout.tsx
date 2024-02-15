import { Outlet } from 'react-router-dom'
import Header from './Header/Header'
import React from 'react'
import Footer from './Footer/Footer'

export default function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <React.Fragment>
      <Header></Header>
      <div className='py-[72px]'>{children}</div>
      <Outlet></Outlet>
      <Footer></Footer>
    </React.Fragment>
  )
}
