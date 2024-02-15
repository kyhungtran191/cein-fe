import useClickOutSide from 'src/hooks/useClickOutSide'
import Sidebar from '../Sidebar'
import { useMobileMenu } from 'src/global/useMobileMenu'

export default function MenuMobileContent() {
  const open = useMobileMenu((state) => state.open)
  console.log(open)
  return (
    <Sidebar isOpen={open} position='left' onSidebarClose={useMobileMenu((state) => state.closeMenu)}>
      1
    </Sidebar>
  )
}
