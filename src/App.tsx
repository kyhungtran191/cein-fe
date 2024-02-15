import { Route, Routes } from 'react-router-dom'
import Accordion from './components/Accordion/Accordion'
import MenuMobileContent from './components/Sidebar/MenuMobileContent/MenuMobileContent'
import Tooltip from './components/Tooltip/Tooltip'
import { SearchIcon } from './icons'
import MainLayout from './layout/MainLayout'
import CartPage from './pages/Cart/CartPage'
import Homepage from './pages/Home/Homepage'

function App() {
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
    </Routes>
  )
}

export default App
