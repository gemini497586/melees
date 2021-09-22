import { useContext } from 'react'
import { AlertContext } from './AlertContext'

const useAlert = () => {
  const [alertmodal, setAlertModal, message, setMessage] =
    useContext(AlertContext)

  const openAlertModal = (msg) => {
    setAlertModal((prev) => !prev)
    setMessage(msg)
  }

  return { openAlertModal, message, alertmodal }
}

export default useAlert
