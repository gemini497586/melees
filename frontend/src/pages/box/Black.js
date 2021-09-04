import React from 'react'

function Black(props) {
  const { modal, closeModal } = props
  return (
    <>{modal ? <div className="b-blackbg" onClick={closeModal}></div> : null}</>
  )
}

export default Black
