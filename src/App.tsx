import { Route, Routes, useLocation } from 'react-router-dom'
import MainLayout from './layout/MainLayout'
import CartPage from './pages/Cart/CartPage'
import Homepage from './pages/Home/Homepage'
import Products from './pages/Products/Products'
import { useEffect } from 'react'
import CartContent from './components/Sidebar/CartContent/CartContent'
import MenuMobileContent from './components/Sidebar/MenuMobileContent/MenuMobileContent'
import AuthModal from './components/Modal/AuthModal'
import ProductDetail from './pages/ProductDetail/ProductDetail'

function App() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return (
    <>
      <CartContent></CartContent>
      <MenuMobileContent></MenuMobileContent>
      <AuthModal></AuthModal>
      <Routes>
        <Route
          path='/'
          element={
            <MainLayout>
              <Homepage></Homepage>
            </MainLayout>
          }
        ></Route>
        <Route
          path='/cart'
          element={
            <MainLayout>
              <CartPage></CartPage>
            </MainLayout>
          }
        ></Route>
        <Route
          path='products'
          element={
            <MainLayout>
              <Products></Products>
            </MainLayout>
          }
        ></Route>
        <Route
          path='products/:id'
          element={
            <MainLayout>
              <ProductDetail></ProductDetail>
            </MainLayout>
          }
        ></Route>
      </Routes>
    </>
  )
}

export default App
