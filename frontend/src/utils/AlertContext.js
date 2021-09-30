import React, { useState, createContext } from 'react'

const AlertContext = createContext([{}, () => {}])

const AlertProvider = (props) => {
  const [alertmodal, setAlertModal] = useState(false)
  const [message, setMessage] = useState('')

  return (
    <AlertContext.Provider
      value={[alertmodal, setAlertModal, message, setMessage]}
    >
      {props.children}
    </AlertContext.Provider>
  )
}
export { AlertProvider, AlertContext }
