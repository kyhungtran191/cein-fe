import { Route, Routes, useLocation } from 'react-router-dom'
import Accordion from './components/Accordion/Accordion'
import MenuMobileContent from './components/Sidebar/MenuMobileContent/MenuMobileContent'
import Tooltip from './components/Tooltip/Tooltip'
import { SearchIcon } from './icons'
import MainLayout from './layout/MainLayout'
import CartPage from './pages/Cart/CartPage'
import Homepage from './pages/Home/Homepage'
import Products from './pages/Products/Products'
import { useEffect } from 'react'

function App() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return (
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
    </Routes>
  )
}

export default App
