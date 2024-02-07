import { useEffect, useRef, useState } from 'react'

export default function useClickOutSide() {
  const [show, setShow] = useState(false)
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const nodeRef = useRef<any>(null)
  useEffect(() => {
    function handleClickOutSide(this: Document, e: MouseEvent) {
      if (nodeRef.current && !nodeRef.current.contains(e.target as Node)) {
        setShow(false)
      }
    }
    document.addEventListener('click', handleClickOutSide)
    return () => {
      document.removeEventListener('click', handleClickOutSide)
    }
  }, [])
  return {
    show,
    setShow,
    nodeRef
  }
}
