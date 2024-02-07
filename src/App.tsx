/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import { useState } from 'react'
import Sidebar from './components/Sidebar/Sidebar'
import Tooltip from './components/Tooltip/Tooltip'
import UserIcon from './components/icons/UserIcon'
import Modal from './components/Modal/Modal'

function App() {
  const [show, setShow] = useState<boolean>(false)
  const [show2, setShow2] = useState<boolean>(true)
  const [count, setCount] = useState(1)
  return (
    <>
      <Sidebar isOpen={show} onSidebarClose={() => setShow(false)}>
        1
      </Sidebar>
      <button onClick={() => setShow(true)}>push</button>
      {count}
    </>
  )
}

export default App
