/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import Tooltip from './components/Tooltip/Tooltip'
import UserIcon from './components/icons/UserIcon'

function App() {
  return (
    <>
      <Tooltip parentElement={<UserIcon></UserIcon>} title='This is user Icon'></Tooltip>
    </>
  )
}

export default App
