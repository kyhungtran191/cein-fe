import React, { useState } from 'react'
import Modal from '../Modal/Modal'

export default function AuthForm() {
  const [statusForm, setStatusForm] = useState<string>('login')
  const [openForm, setOpenFalse] = useState<boolean>(false)
  return (
    <>
      <button onClick={() => setOpenFalse(true)}>On Click login</button>
      <Modal
        isOpen={openForm}
        onModalClose={() => setOpenFalse(false)}
        bodyClassName='bg-white min-w-[400px] -translate-y-1/2'
        title='Login'
      ></Modal>
    </>
  )
}
