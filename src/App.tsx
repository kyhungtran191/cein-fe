import Accordion from './components/Accordion/Accordion'
import MenuMobileContent from './components/Sidebar/MenuMobileContent/MenuMobileContent'
import Tooltip from './components/Tooltip/Tooltip'
import { SearchIcon } from './icons'
import MainLayout from './layout/MainLayout'
import Homepage from './pages/Home/Homepage'

function App() {
  return (
    <MainLayout>
      <MenuMobileContent></MenuMobileContent>
      <Homepage></Homepage>
    </MainLayout>
  )
}

export default App
