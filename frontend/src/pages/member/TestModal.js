import React, { useState } from 'react'
import Modal from './component/Modal'

function TestModal() {
  const [showModal, setShowModal] = useState(false)
  const openModal = () => {
    setShowModal(prev => !prev)
  }
  return (
    <>
      <button onClick={openModal}>i'm a modal</button>
      <Modal showModal={showModal} setShowModal={setShowModal} />
      {/* <div className="mask-forModal"></div> */}
    </>
  )
}

export default TestModal
